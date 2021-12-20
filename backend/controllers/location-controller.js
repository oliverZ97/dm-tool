/* eslint-disable no-undef */
const Location = require('../models/location-model')

createLocation = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a location',
        })
    }

    const location = new Location(body)

    if (!location) {
        return res.status(400).json({ success: false, error: err })
    }

    location
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: location._id,
                message: 'Location created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Location not created!',
            })
        })
}

updateLocation = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Location.findOne({ _id: req.params.id }, (err, location) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Location not found!',
            })
        }
        location.title = body.title
        location.description = body.description
        location.file_ID = body.file_ID
        location
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: location._id,
                    message: 'Location updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Location not updated!',
                })
            })
    })
}

deleteLocation = async (req, res) => {
    await Location.findOneAndDelete({ _id: req.params.id }, (err, location) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!location) {
            return res
                .status(404)
                .json({ success: false, error: `Location not found` })
        }

        return res.status(200).json({ success: true, data: location })
    }).catch(err => console.log(err))
}

getLocationById = async (req, res) => {
    await Location.findOne({ _id: req.params.id }, (err, location) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!location) {
            return res
                .status(404)
                .json({ success: false, error: `Location not found` })
        }
        return res.status(200).json({ success: true, data: location })
    }).catch(err => console.log(err))
}

getLocations = async (req, res) => {
    await Location.find({}, (err, locations) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!locations.length) {
            return res
                .status(404)
                .json({ success: false, error: `Locations not found` })
        }
        return res.status(200).json({ success: true, data: locations })
    }).catch(err => console.log(err))
}

module.exports = {
    createLocation,
    updateLocation,
    deleteLocation,
    getLocations,
    getLocationById,
}