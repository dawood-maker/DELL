import React from "react";

function About() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        About Us
      </h1>

      <p className="text-lg text-gray-600 mb-4">
        Welcome to our website! Yeh About page hai jahan hum apne project ke
        baare mein detail share karte hain.
      </p>

      <p className="text-lg text-gray-600 mb-4">
        Hum React aur Tailwind CSS use karke simple, fast aur beautiful web
        applications banate hain. Is page ka maqsad sirf yeh dikhana hai ke
        routing sahi kaam kar rahi hai 😊
      </p>

      <p className="text-lg text-gray-600">
        Agar aapko koi sawal ho ya feedback dena ho, to Contact page zaroor
        visit karein.
      </p>
    </div>
  );
}

export default About;



