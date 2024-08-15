import React, { useState } from 'react';

const WhatsAppContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace this with your actual WhatsApp number
        const phoneNumber = '+94780119069';

        // Create the message
        const message = `Hello, I'm ${formData.name}\n${formData.message}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Generate the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                <div className="absolute inset-0 bg-nine shadow-lg sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold mb-6 text-center text-one">Contact Us via WhatsApp</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 rounded-lg"
                                    placeholder="Name"
                                />
                                <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-[20px] peer-focus:text-one peer-focus:text-sm">
                                    Name
                                </label>
                            </div>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="peer placeholder-transparent w-full border-b-2 focus:outline-none rounded-lg"
                                    placeholder="Message"
                                />
                                <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-[1px] transition-all peer-focus:-top-[20px]  peer-focus:text-one peer-focus:text-sm">
                                    Message
                                </label>
                            </div>
                            <div className="relative w-full mx-auto max-w-[170px]">
                                <button
                                    type="submit"
                                    className="w-[170px] mx-auto bg-one text-nine-100 rounded-md py-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Send via WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatsAppContact;
