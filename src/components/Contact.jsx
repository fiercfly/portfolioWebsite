import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactItems, heroIcons } from '../constant/data';
import { motion } from "framer-motion";
import { RiSendPlaneFill, RiContactsLine } from '@remixicon/react';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        const serviceID = 'akshat-portfolio';
        const templateID = 'akshat-portfolio';
        const publicKey = 'rzG7nUjQyDlykkCTr';

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then(() => {
                setSubmissionStatus('success');
                formRef.current.reset();
            }, () => {
                setSubmissionStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="py-24 md:py-28 relative overflow-hidden" id="contact">
            <div className="container relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block p-3 rounded-xl bg-primary/10 border border-primary/20 mb-6"
                    >
                        <RiContactsLine className="text-primary" size={22} />
                    </motion.div>
                    <h2 className="section-title">
                        GET IN <span className="text-gradient font-serif-italic">TOUCH</span>
                    </h2>
                    <p className="section-subtitle !mb-0 font-serif italic">Ready to cultivate something extraordinary?</p>
                </div>

                {/* Unified Glass Container wrapping the entire Contact Content */}
                {/* Ambient slow-moving mesh gradient backdrop strictly behind the canvas card */}
                <div className="absolute inset-x-4 md:inset-x-12 top-16 bottom-0 -z-10 overflow-hidden pointer-events-none rounded-[3rem]">
                    <motion.div
                        animate={{
                            scale: [1, 1.25, 1],
                            rotate: [0, 25, 0],
                            opacity: [0.4, 0.65, 0.4]
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full lg:w-[120%] h-[120%] absolute -top-10 left-1/2 lg:left-[-10px] -translate-x-1/2 lg:-translate-x-0 bg-[radial-gradient(circle_at_center,rgba(45,79,49,0.3)_0%,rgba(10,15,11,0.9)_50%,rgba(0,0,0,1)_85%)] blur-[90px]"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass bg-white/[0.02] backdrop-blur-3xl max-w-6xl mx-auto mt-16 rounded-2xl md:rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl p-5 sm:p-8 md:p-12 lg:p-20 relative"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch relative z-10">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-center items-center text-center p-2 sm:p-6 md:p-8">
                            <h3 className="text-sm md:text-base font-bold mb-6 md:mb-10 uppercase tracking-[0.15em] text-primary font-serif italic">Connect With Me</h3>
                            <div className="space-y-6 md:space-y-8 w-full">
                                {contactItems.map((item) => (
                                    <div key={item.id} className="flex flex-col group/item">
                                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60 mb-1.5 font-sans">{item.label}</span>
                                        <a
                                            href={
                                                item.label === 'Email'
                                                    ? `mailto:${item.link}`
                                                    : item.label === 'Phone'
                                                        ? `tel:${item.link.replace(/\s+/g, '')}`
                                                        : `https://maps.google.com/?q=${encodeURIComponent(item.link)}`
                                            }
                                            target={item.label === 'Location' ? '_blank' : undefined}
                                            rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                                            className="text-sm md:text-base lg:text-lg font-medium text-text hover:text-white transition-all hover:scale-105 inline-block break-words px-2 md:px-4"
                                        >
                                            {item.link}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-4 justify-center">
                                {heroIcons.map((icon) => (
                                    <a
                                        key={icon.id}
                                        href={icon.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 md:p-4 glass rounded-xl text-white/60 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_20px_rgba(134,193,149,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center"
                                    >
                                        <icon.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Divider Line (Desktop only) */}
                        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-white/5 -translate-x-1/2"></div>

                        {/* Contact Form */}
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 md:space-y-8 flex flex-col justify-center p-0 sm:p-4">
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 ml-2 font-sans">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-white/[0.005] border-b-2 border-t-0 border-l-0 border-r-0 border-white/10 px-4 sm:px-8 md:px-10 py-2.5 min-h-[36px] focus:border-primary focus:shadow-[0_4px_15px_-3px_rgba(134,193,149,0.3)] outline-none transition-all duration-300 text-sm text-text tracking-normal font-sans rounded-none"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 ml-2 font-sans">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-white/[0.005] border-b-2 border-t-0 border-l-0 border-r-0 border-white/10 px-4 sm:px-8 md:px-10 py-2.5 min-h-[36px] focus:border-primary focus:shadow-[0_4px_15px_-3px_rgba(134,193,149,0.3)] outline-none transition-all duration-300 text-sm text-text tracking-normal font-sans rounded-none"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 ml-2 font-sans">Your Message</label>
                                <textarea
                                    name="message"
                                    className="w-full bg-white/[0.005] border-b-2 border-t-0 border-l-0 border-r-0 border-white/10 px-4 sm:px-8 md:px-10 py-3 focus:border-primary focus:shadow-[0_4px_15px_-3px_rgba(134,193,149,0.3)] outline-none transition-all duration-300 text-sm text-text tracking-normal font-sans min-h-[90px] resize-none leading-relaxed rounded-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative w-full py-4 px-8 rounded-full border border-primary text-white hover:text-bg font-bold tracking-[0.15em] text-xs md:text-sm uppercase overflow-hidden shadow-[0_0_20px_rgba(134,193,149,0.15)] hover:shadow-[0_0_30px_rgba(134,193,149,0.3)] transition-all duration-500 group mt-4 flex items-center justify-center gap-2 cursor-pointer bg-black/40 backdrop-blur-xl disabled:opacity-50"
                            >
                                <span className="relative z-10 font-serif italic">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <RiSendPlaneFill className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                            </button>

                            {submissionStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center gap-2 mt-4"
                                >
                                    <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase font-serif italic">Message sent successfully!</span>
                                </motion.div>
                            )}
                            {submissionStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center gap-2 mt-4"
                                >
                                    <span className="text-secondary text-[11px] font-bold tracking-[0.2em] uppercase font-serif italic">Something went wrong. Try again.</span>
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute bottom-0 right-0 w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-0 md:translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
};

export default Contact;