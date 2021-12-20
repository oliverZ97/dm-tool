/* eslint-disable no-undef */
const Blogentry = require('../models/blogentry-model')

createBlogentry = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a blogentry',
        })
    }

    const blogentry = new Blogentry(body)

    if (!blogentry) {
        return res.status(400).json({ success: false, error: err })
    }

    blogentry
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: blogentry._id,
                message: 'Blogentry created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Blogentry not created!',
            })
        })
}

updateBlogentry = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Blogentry.findOne({ _id: req.params.id }, (err, blogentry) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Blogentry not found!',
            })
        }
        blogentry.title = body.title
        blogentry.createdAt = body.createdAt
        blogentry.author = body.author
        blogentry.text = body.text
        blogentry
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: blogentry._id,
                    message: 'Blogentry updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Blogentry not updated!',
                })
            })
    })
}

deleteBlogentry = async (req, res) => {
    await Blogentry.findOneAndDelete({ _id: req.params.id }, (err, blogentry) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!blogentry) {
            return res
                .status(404)
                .json({ success: false, error: `Blogentry not found` })
        }

        return res.status(200).json({ success: true, data: blogentry })
    }).catch(err => console.log(err))
}

getBlogentryById = async (req, res) => {
    await Blogentry.findOne({ _id: req.params.id }, (err, blogentry) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!blogentry) {
            return res
                .status(404)
                .json({ success: false, error: `Blogentry not found` })
        }
        return res.status(200).json({ success: true, data: blogentry })
    }).catch(err => console.log(err))
}

getBlogentries = async (req, res) => {
    await Blogentry.find({}, (err, blogentries) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!blogentries.length) {
            return res
                .status(404)
                .json({ success: false, error: `Blogentries not found` })
        }
        return res.status(200).json({ success: true, data: blogentries })
    }).catch(err => console.log(err))
}

module.exports = {
    createBlogentry,
    updateBlogentry,
    deleteBlogentry,
    getBlogentries,
    getBlogentryById,
}