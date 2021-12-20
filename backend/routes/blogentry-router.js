const express = require('express')

const BlogentryCtrl = require('../controllers/blogentry-controller')

const router = express.Router()

router.post('/blogentry', BlogentryCtrl.createBlogentry)
router.put('/blogentry/:id', BlogentryCtrl.updateBlogentry)
router.delete('/blogentry/:id', BlogentryCtrl.deleteBlogentry)
router.get('/blogentry/:id', BlogentryCtrl.getBlogentryById)
router.get('/blogentries', BlogentryCtrl.getBlogentries)

module.exports = router