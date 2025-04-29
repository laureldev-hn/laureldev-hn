import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 350 80">
                <g>
                  <path d="M40,10 C30,15 10,20 5,30 C0,40 5,50 15,60 C25,70 45,75 60,65 C75,55 80,40 75,30 C70,20 60,15 50,20 C40,25 35,35 40,45 C45,55 55,60 65,55" 
                        fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
                  <path d="M20,15 L40,15 L30,30 Z" fill="#F0290C"/>
                  <circle cx="50" cy="30" r="3" fill="#ffffff"/>
                </g>
                <text x="100" y="45" font-family="Montserrat, sans-serif" font-size="36" font-weight="700" fill="#fec53a">LAUREL DEV</text>
              </svg>
            </a>
            <p className="text-white text-opacity-80 mb-4">
              Innovative financial technology solutions for credit unions and banks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-opacity-80 hover:text-primary transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white text-opacity-80 hover:text-primary transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white text-opacity-80 hover:text-primary transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white text-opacity-80 hover:text-primary transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white text-opacity-80 hover:text-primary transition duration-300">About Us</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-primary transition duration-300">Services</a></li>
              <li><a href="#testimonials" className="text-white text-opacity-80 hover:text-primary transition duration-300">Success Stories</a></li>
              <li><a href="#technologies" className="text-white text-opacity-80 hover:text-primary transition duration-300">Technologies</a></li>
              <li><a href="#contact" className="text-white text-opacity-80 hover:text-primary transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white text-opacity-80 hover:text-primary transition duration-300">Core Banking Solutions</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-primary transition duration-300">Mobile Banking Apps</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-primary transition duration-300">Security & Compliance</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-primary transition duration-300">Analytics & Reporting</a></li>
              <li><a href="#services" className="text-white text-opacity-80 hover:text-primary transition duration-300">API Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 mr-3">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white text-opacity-80">123 Financial District<br />San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-white text-opacity-80">(415) 555-0123</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-white text-opacity-80">info@laureldev.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white border-opacity-20 text-center md:flex md:justify-between md:items-center">
          <p className="text-white text-opacity-60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LaurelDev. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 justify-center">
            <a href="#" className="text-white text-opacity-60 hover:text-primary transition duration-300">Privacy Policy</a>
            <a href="#" className="text-white text-opacity-60 hover:text-primary transition duration-300">Terms of Service</a>
            <a href="#" className="text-white text-opacity-60 hover:text-primary transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
