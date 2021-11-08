const express = require('express')
const router = express.Router()
const Center = require('../../../models/centers/Center')
const { check, validationResult } = require('express-validator')
const auth = require('../../../../devconnect/middleware/auth')

router.post('/', [auth, [
    check('fname', 'Firstname is required').not().isEmpty(),
    check('lname', 'Lastname is required').not().isEmpty(),
    check('qualification', 'Qualification is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(401).json({
            errors:errors.array()
        })
    }

    const { fname, lname, qualification, phoneNumber } = req.body
    
    const profileCenter = {}

    profileCenter.centerUser = req.centerUser.id
    
    if(fname) profileCenter.bio.fname = fname
    if(lname) profileCenter.bio.lname = lname
    if(qualification) profileCenter.bio.qualification = qualification
    if(phoneNumber) profileCenter.bio.phoneNumber = phoneNumber

    try {
        const center = new Center(profileCenter)

        await center.save()

        res.status(200).json(center)
    } catch (err) {
        res.status(500).json()
    }
})


module.exports = router