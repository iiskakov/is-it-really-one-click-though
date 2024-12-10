"use client"; // This makes the component a Client Component

import React, { useState } from 'react';

const ContactForm = ({ contact }) => {
  // State for form inputs can be added here if needed
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      howHeard: e.target['how-heard'].value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thanks! We'll get to you shortly.");
      } else {
        alert('Failed to submit form. Please try again.', response);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Text Block */}
        <div className={`flex flex-col p-8 pt-0`}>
          <h1 className="text-5xl md:text-[96px] font-semibold mb-8 uppercase">
            {contact.heading}
          </h1>
          <p className="mb-6 opacity-60">{contact.Text}</p>
          <a
            href="https://t.me/qara_vacancies"
            className="text-gray-400 underline hover:text-white"
          >
            Looking for a job?
          </a>
        </div>

        {/* Form Block */}
        <div className="bg-black bg-opacity-60 p-8 pt-0 mb-24 rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium opacity-60">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 w-full p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white opacity-60"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium opacity-60">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white opacity-60"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="how-heard" className="block text-sm font-medium opacity-60">
                How did you hear of us?*
              </label>
              <input
                type="text"
                id="how-heard"
                className="mt-2 w-full p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white opacity-60"
                placeholder="Enter your answer"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium opacity-60">
                For what service are you looking for?
              </label>
              <select
                id="service"
                className="mt-2 w-full p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white opacity-60"
              >
<option>Select one</option>
 <option>Special Project </option>
 <option>Production Service </option>
 <option>Music Video</option>
 <option>Podcasts</option>
 <option>YouTube Show</option>
 <option>Artist Collaborations</option>
 <option>Photo Production</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium opacity-60">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 w-full p-3 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-white opacity-60"
                rows="4"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 h-[60px] w-full md:w-32 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition duration-300 ml-auto block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
