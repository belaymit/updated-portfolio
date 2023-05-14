import { createElement, useRef } from "react";
import { content } from "../common/Content";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_gonc0ha',
       'template_28sg7th', 
       form.current, 
       'EYcaIBZlv4Oc1lA3E'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <section className="bg-dark_primary text-white" id="contact">
    <Toaster />
    <div className="md:container px-5 py-14">
      <h2 className="title !text-white text-center" data-aos="fade-down">
        {Contact.title}
      </h2>
      <h4 className="subtitle text-white text-center py-6" data-aos="fade-down">
        {Contact.subtitle}
      </h4>
      <br />
      <br/>
      <div className="flex gap-10 md:flex-row flex-col">
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          className="flex-1 flex flex-col gap-5"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className="border border-slate-600 p-3 rounded"
          />
          <input
            type="email"
            name="user_email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="Email Id"
            required
            className="border border-slate-600 p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-slate-600 p-3 rounded h-44"
            required
          ></textarea>
          <button
            className="btn self-start
          bg-white text-dark_primary"
          >
            Submit
          </button>
        </form>
        <div className="flex-1 flex flex-col gap-5 ml-10">
          {Contact.social_media.map((content, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-delay={i * 430}
              className="flex items-center gap-2"
            >
              <h4 className="text-white">{createElement(content.icon)}</h4>
              <a className="font-Poppins" href={content.link} target="_blank">
                {content.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact