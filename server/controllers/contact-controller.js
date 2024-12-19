const Contact = require('../models/contact-model');

const contactForm = async(req,res) =>{
try {
    const responce = req.body;
    await Contact.create(responce);
    return res.status(201).send('Message sent successfully');
} catch (error) {
    return res.status(500).send('Message  not sent successfully');
}
}

module.exports = contactForm;