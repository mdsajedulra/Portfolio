import React, { useRef, useState } from 'react';
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState('')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p34hmbr', 'template_r33f9mu', form.current, 'aOCTtEsLH4E7tCrsr')
            .then((result) => {
                console.log(result.text);
                if (result) {
                    setMessage('Thank you for your message. We will get in touch with you shortlyThank you for your message. We will get in touch with you shortly')
                }
            }, (error) => {
                console.log(error.text);
                if (error) {
                    setMessage('something is wrong')
                }
            });
    };

    return (
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>
        <div id='contact' className='container my-5'>
            <div class="col-12">
                <h1>Contact Me</h1>
                <p>If you have any porject or need help. Contact me</p>
                <form ref={form} onSubmit={sendEmail} id="contact-form" class="default-form contact-form"
                    method="post">
                    <div class="row mb-n6">
                        <div class="col-xl-6 mb-6">
                            <div class="default-form-group">
                                <input name="user_name" type="text" placeholder="Name" required />
                            </div>
                        </div>
                        <div class="col-xl-6 mb-6">
                            <div class="default-form-group">
                                <input name="user_email" type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div class="col-xl-6 mb-6">
                            <div class="default-form-group">
                                <input name="phone" type="tel" placeholder="Phone" required />
                            </div>
                        </div>
                        <div class="col-xl-6 mb-6">
                            <div class="default-form-group">
                                <input name="subject" type="text" placeholder="Subject" required />
                            </div>
                        </div>
                        <div class="col-xl-12 mb-2">
                            <div class="default-form-group">
                                <textarea name="message" placeholder="Comment" required></textarea>
                            </div>
                        </div>
                        <div class="col-2 mb-6">
                            <div class="default-form-group tex-center">
                                <input type="submit" value="Send" class="btn btn-lg btn-outline-one"
                                />
                            </div>
                        </div>
                        <p class="form-messege"></p>
                    </div>
                </form>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Contact;