import React from "react";

function Contact() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>

      <p className="text-lg text-gray-600 mb-4">
        Agar aapko koi sawal ho ya feedback dena ho, to neeche diye gaye form ya
        contact info se hum se rabta karein.
      </p>

      <ul className="text-gray-600 list-disc list-inside">
        <li>Email: dawoodshahzad4321@example.com</li>
        <li>Phone: +92 321 7454974</li>
        <li>City: faislabad</li>
        <li>Address:  waras pura gol</li>
      </ul>
    </div>
  );
}

export default Contact;
