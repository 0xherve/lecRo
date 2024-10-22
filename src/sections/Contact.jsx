import Button from '../components/Button';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    emailjs.init({
      publicKey: "yBdV-BxUp6f8qkaGq",
    });

    try {
      const response = await emailjs.sendForm(
        'service_4c2jwel', // Replace with your service ID
        'template_i96db3w', // Replace with your template ID
        formRef.current,
        {
          name: form.name, 
          email: form.email,
          message: form.message,
        }
      );

      if (response.status === 200) {
        alert('Your message has been sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error('Error sending email:', response.statusText);
        alert('An error occurred while sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-8 w-full">
      <div className="grid place-items-center w-full gap-8 px-4 max-md:px-8">
        <h3 className="h3 text-p4 text-center max-md:text-5xl max-lg:leading-12">
          Contact Us
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 px-20 py-12 w-[80%] max-w-[90%] border border-pale-blue rounded-3xl h-auto max-md:w-full max-md:px-6 max-md:py-8"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-gray-500 text-xl font-semibold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-slate-800 h-16 px-6 py-3 rounded-2xl max-md:h-12 max-md:px-4 max-md:py-2"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-gray-500 text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-slate-800 h-16 px-6 py-3 rounded-2xl max-md:h-12 max-md:px-4 max-md:py-2"
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-gray-500 text-xl font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-slate-800 px-6 py-3 rounded-2xl overflow-hidden max-md:px-4 max-md:py-2"
              placeholder="Hi, I am interested in..."
              rows={5} // Adjust rows for desired height
              required
            ></textarea>
          </div>

          <button
            onSubmit={handleSubmit}
            className="rounded-2xl shadow-500 g5 w-full h-16 max-md:h-12"
          >
            <span className="text-2xl text-p1 max-md:text-xl">
              {loading ? 'Sending...' : 'Send my Message'}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
