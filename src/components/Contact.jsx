function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const subject = form.subject.value
    const message = form.message.value
    
    // Create mailto link with form data
    const mailtoLink = `mailto:akash.bmrskr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          I'm always excited to collaborate on innovative projects. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out if you'd like to collaborate or have any questions. I'm always happy to connect!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-teal-400 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <a href="mailto:akash.bmrskr@gmail.com" className="text-teal-400 font-semibold hover:text-pink-400 transition-colors">
                      akash.bmrskr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Phone</p>
                    <a href="tel:+918848080655" className="text-teal-400 font-semibold hover:text-pink-400 transition-colors">
                      +91 88480 80655
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-teal-400 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <p className="text-white font-semibold">Kottayam, Kerala</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 font-medium mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/aakash-s-nair" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-teal-400 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-pink-500/50 hover:scale-110 transform transition-all duration-200"
                    aria-label="LinkedIn profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/astradevop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-teal-400 to-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-teal-500/50 hover:scale-110 transform transition-all duration-200"
                    aria-label="GitHub profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-required="true"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 shadow-sm hover:bg-white/10 focus:bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  aria-required="true"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 shadow-sm hover:bg-white/10 focus:bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  required 
                  aria-required="true"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 shadow-sm hover:bg-white/10 focus:bg-white/10 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-teal-400 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-200 relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
