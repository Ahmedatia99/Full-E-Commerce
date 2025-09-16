import React from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    // TODO: Send form data to API or email service
  };

  return (
    <section
      className="Box-Container flex flex-col md:flex-row items-center justify-center gap-5  m-5 md:m-10"
      aria-labelledby="contact-title"
    >
      {/* Left Section: Contact Information */}
      <aside
        className="left shadow-sm flex flex-col flex-1 justify-center p-7 gap-10 h-[500px]"
        aria-label="Contact Information"
      >
        {/* Phone Contact */}
        <div className="left-top flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div
              className="bg-[#DB4444] rounded-full flex items-center justify-center p-2"
              aria-hidden="true"
            >
              <Phone color="white" />
            </div>
            <h2 id="contact-title" className="font-semibold text-lg">
              Call To Us
            </h2>
          </div>
          <div className="flex flex-col gap-1 font-medium text-sm">
            <p>We are available 24/7, 7 days a week.</p>
            <p>
              Phone:{" "}
              <a href="tel:+8801611112222" className="text-blue-600 underline">
                +8801611112222
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="h-0.5 w-full bg-gray-300 my-5" />

        {/* Email Contact */}
        <div className="left-bottom flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div
              className="bg-[#DB4444] rounded-full flex items-center justify-center p-2"
              aria-hidden="true"
            >
              <Mail color="white" />
            </div>
            <h2 className="font-semibold text-lg">Write To Us</h2>
          </div>
          <div className="flex flex-col gap-1 font-medium text-sm">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>
              Email:{" "}
              <a
                href="mailto:customer@exclusive.com"
                className="text-blue-600 underline"
              >
                customer@exclusive.com
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:support@exclusive.com"
                className="text-blue-600 underline"
              >
                support@exclusive.com
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* Right Section: Contact Form */}
      <div className="right flex flex-col flex-2 h-[500px] shadow-sm p-7 w-full gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          aria-label="Contact Form"
        >
          {/* Inputs */}
          <div className="inputs flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="bg-[#F5F5F5] rounded-sm py-3 px-4 w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="bg-[#F5F5F5] rounded-sm py-3 px-4 w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone *"
              className="bg-[#F5F5F5] rounded-sm py-3 px-4 w-full"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message *"
            className="bg-[#F5F5F5] rounded-sm py-3 px-4 w-full min-h-[250px] max-h-[400px]"
            required
          />

          {/* Submit Button */}
          <div className="flex justify-center md:justify-end">
            <Button type="submit" className="py-7">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
