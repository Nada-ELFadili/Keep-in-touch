const express = require('express');
const Authentification = require('../controllers/clientCntrl');
const sendmail = require ('../sendMail/Sendmail')

const router = express.Router();


router.post('/client', Authentification.postClient );
router.get('/contact', Authentification.getClient );
router.post('/send',sendmail);

module.exports = router; 
