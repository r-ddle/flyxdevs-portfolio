import React, { useState } from 'react';
import Input from '../components/Input'; // Assuming Input.js is in src/components/
import Button from '../components/Button'; // Assuming Button.js is in src/components/
import emailjs from '@emailjs/browser';

// Default data for the form
const defaultFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactPage = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid.';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required.';
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // setIsSubmitting(true);
    // setSubmitMessage('');
    console.log('Form data submitted:', formData);
    // alert('Form submitted! Check the console for data. (Actual submission logic to be implemented)');

    // Placeholder for actual submission logic (e.g., API call)
    // try {
    //   // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
    //   // if (!response.ok) throw new Error('Network response was not ok.');
    //   // setSubmitMessage('Your message has been sent successfully!');
    //   setFormData(defaultFormData); // Reset form
    // } catch (error) {
    //   // console.error('Submission error:', error);
    //   // setSubmitMessage('Failed to send message. Please try again later.');
    // } finally {
    //   // setIsSubmitting(false);
    // }

const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // IMPORTANT: User needs to set these in their .env file
    // and ensure the build process makes them available.
    // For Create React App, they must start with REACT_APP_
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      setSubmitMessage("Configuration error: Unable to send message. Admin check needed.");
      setIsSubmitting(false);
      // alert("EmailJS configuration is missing. Cannot send email."); // For debugging
      return;
    }

    // Prepare template parameters (must match template in EmailJS dashboard)
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject, // 'subject' from form
      message: formData.message, // 'message' from form
      // You can add more params here if your EmailJS template expects them
      // e.g., to_name: "Your Company Name"
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('EmailJS SUCCESS!', response.status, response.text);
        setSubmitMessage('Your message has been sent successfully! We will get back to you soon.');
        setFormData(defaultFormData); // Reset form
        setFormErrors({});
      })
      .catch((err) => {
        console.error('EmailJS FAILED...', err);
        setSubmitMessage('Failed to send message. Please try again later or contact us directly.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 lg:py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white dark:bg-neutral-800 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl">
            <div className="text-center mb-8 lg:mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                Get in Touch
              </h1>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                Have a question or a project in mind? Fill out the form below, and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            {submitMessage && (
              <div
                className={`p-4 mb-6 rounded-md text-sm ${
                  submitMessage.includes('Failed') || submitMessage.includes('error')
                    ? 'bg-error-100 dark:bg-error-500/30 text-error-700 dark:text-error-200'
                    : 'bg-success-100 dark:bg-success-500/30 text-success-700 dark:text-success-200'
                }`}
                role="alert"
              >
                {submitMessage}
              </div>
            )}
              <Input
                label="Full Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                hasError={!!formErrors.name}
                errorText={formErrors.name}
                required
              />
              <Input
                label="Email Address"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                hasError={!!formErrors.email}
                errorText={formErrors.email}
                required
              />
              <Input
                label="Service of Interest / Subject"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="e.g., Web Development Project, General Inquiry"
                hasError={!!formErrors.subject}
                errorText={formErrors.subject}
                required
              />
              <Input
                label="Your Message"
                type="textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Describe your project or question..."
                rows={4}
                hasError={!!formErrors.message}
                errorText={formErrors.message}
                required
              />

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
