import React from 'react';
import BackgroundImg from '../images/Consult-Background-Img.png';


function Newsletter() {
  return (
    <section id="consult">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-gradient-to-r from-purple-600 to-purple-900 py-10 px-8 md:py-16 md:px-12 overflow-hidden" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute -right-20 -top-20 -ml-40 pointer-events-none -rotate-12" aria-hidden="true">
            <img className="w-72" src={BackgroundImg} alt="" />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/3">
              <h3 className="h3 text-white mb-2">Setup a consultaiton now!</h3>
              <p className="text-purple-200 text-lg">Enter your details here and we will get in touch with you.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-2/3">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Name..." aria-label="Name…" />
                <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Email..." aria-label="Your best email…" />
                <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Phone number..." aria-label="Your best phone number..." />
                <a className="btn text-purple-600 bg-purple-100 hover:bg-white shadow" href="#0">Send</a>
              </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;
