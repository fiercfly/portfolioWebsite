import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { contactItems } from '../constant/data';
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "../motion/animation";
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error' or null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        const serviceID = 'akshat-portfolio';
        const templateID = 'akshat-portfolio';
        const publicKey = 'rzG7nUjQyDlykkCTr';

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setSubmissionStatus('success');
                formRef.current.reset(); 
            }, (error) => {
                console.log(error.text);
                setSubmissionStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className='py-20' id="contact">
            <motion.div variants={staggerContainer} initial='hidden' whileInView="show" viewport={{ once: true }} className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">
                {/* content */}
                <div>
                    <motion.h2 variants={fadeInUp}>Get in Touch</motion.h2>
                    <motion.p variants={fadeInUp} className='mt-3.5 mb-7'>
                        Have a question or a project in mind? I'd love to hear from you. Let's connect and create something amazing together.
                    </motion.p>

                    {/* List */}
                    <motion.ul variants={fadeInUp}>
                        {contactItems.map((item) => (
                            <li key={item.id} className='flex items-center gap-1.5'>
                                <p className='text-white font-semibold'>{item.label}</p>
                                <a href={item.label === 'Email:' ? `mailto:${item.link}` : `tel:${item.link}`} className='hover:text-primary-clr transition-colors'>{item.link}</a>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div variants={fadeIn} className="flex items-center gap-4 mt-6">
                        <a href="https://linkedin.com/in/kshtjn" target="_blank" rel="noopener noreferrer" className='hover:text-primary-clr transition-colors'>
                            <RiLinkedinBoxFill size={30} />
                        </a>
                        <a href="https://github.com/fiercfly" target="_blank" rel="noopener noreferrer" className='hover:text-primary-clr transition-colors'>
                            <RiGithubFill size={30} />
                        </a>
                    </motion.div>
                </div>

                <motion.form ref={formRef} onSubmit={sendEmail} variants={fadeIn} action="" className='grid gap-5 md:pl-10'>
                    {/* Input field */}
                    <div className='grid gap-2'>
                        <label htmlFor="name">Name *</label>
                        <input type="text" name="name" placeholder='Your name' className='input' required />
                    </div>

                    {/* Input field */}
                    <div className='grid gap-2'>
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" placeholder='Your Email' className='input' required />
                    </div>

                    {/* Text area */}
                    <div className='grid gap-2'>
                        <label htmlFor='message'>Message *</label>
                        <textarea name="message" id='message' placeholder='Your message' className='h-40 border border-neutral-800 indent-4 py-2 resize-none' required />
                    </div>
                    
                    <div>
                        <button type="submit" disabled={isSubmitting} className="primary-btn max-w-max">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submissionStatus === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
                        {submissionStatus === 'error' && <p className="text-red-500 mt-4">Failed to send message. Please try again later.</p>}
                    </div>
                </motion.form>
            </motion.div>
        </section>
    )
}

export default Contact;