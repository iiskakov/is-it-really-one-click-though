import React from 'react';
import { lato, tthoves } from '@/app/fonts';
import Nav from '@/components/Intro/Nav';
import Logo from '@/components/Intro/Logo';


const ContactForm = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Text Block */}
        <div className={`flex flex-col  p-8 pt-0 ${lato.className}`}>
          <h1 className={`text-5xl md:text-[96px] font-semibold mb-8 ${tthoves.className}`}>LET&apos;S WORK TOGETHER</h1>
          <p className="mb-6 opacity-60">
            Not sure where to start?
            <br />
            <br />
            Tell us about your product, your timeline, how you heard about us, and where you&apos;re located.
            <br />
            We read every message. So, thanks in advance for making it a good one.
          </p>
          <a href="mailto:hr@2d.pro" className="text-gray-400 underline hover:text-white">
            Looking for a job?
          </a>
        </div>

        {/* Form Block */}
        <div className={`bg-black bg-opacity-60 p-8 pt-0 mb-24 rounded-lg ${lato.className}`}>
          <form className="space-y-6">
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
                <option>Commercial</option>
                <option>Production</option>
                <option>Events</option>
                <option>Other</option>
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



const ContactPage = () => {
  return(
      <>
      <div className="h-[120px]">
        <Logo />
        <Nav />
        </div>
        <ContactForm/>
    </>

  )
}

export default ContactPage;
