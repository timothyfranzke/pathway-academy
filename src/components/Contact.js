import React, { useState } from 'react';
import { Phone, Building2, Mail } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGe4tEALPi6kdBnAJo4uf-8omOQ4Nda-0",
  authDomain: "pathway-academy.firebaseapp.com",
  projectId: "pathway-academy",
  storageBucket: "pathway-academy.firebasestorage.app",
  messagingSenderId: "822490806225",
  appId: "1:822490806225:web:218ebd85b334fa140312f0",
  measurementId: "G-43HW36L0TK"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Add timestamp to the form data
      const contactData = {
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'new'
      };

      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'contacts'), contactData);

      // Clear form and show success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate bg-white" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left side - Contact Info */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#77CDDA] via-[#218581] to-[#F9B359] opacity-20" />
          </div>

          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We'd love to hear from you! Whether you have questions about our programs, 
              admissions, or would like to schedule a visit, please don't hesitate to reach out.
            </p>
            
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <Building2 className="h-7 w-6 text-[#218581]" />
                </dt>
                <dd>10561 Barkley St, Suite 630<br/>Overland Park, 66212</dd>
              </div>
              
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-7 w-6 text-[#218581]" />
                </dt>
                <dd>
                  <a href="tel:913-303-1803" className="hover:text-[#218581]">
                    913-303-1803
                  </a>
                </dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-[#218581]" />
                </dt>
                <dd>
                  <a href="mailto:luciana.innerchange@gmail.com" className="hover:text-[#218581]">
                    luciana.innerchange@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {/* Status Messages */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-red-50 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#218581] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#218581] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#218581] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#218581] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#218581] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-[#218581] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1a6964] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#218581] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;