import React, { useState, useEffect } from "react";
import "./App.css";
import mamuImage1 from "./assets/s1.png"; // Replace with your actual image path

function App() {
  const [pic, setPic] = useState(false);

  // Function to toggle between the images

  // Countdown timer function
  const startTimer = () => {
    const now = new Date();
    const target = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const diff = target - now;

    const hours = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, "0");
    const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  // Balloon animation function
  const createBalloons = () => {
    const balloonContainer = document.getElementById("balloons");
    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDelay = `${Math.random() * 2}s`;
      balloon.style.background = `hsl(${Math.random() * 360}, 70%, 80%)`; // Lighter gradient of blue
      balloonContainer.appendChild(balloon);

      setTimeout(() => balloon.remove(), 6000); // Remove balloons after animation
    }
  };

  useEffect(() => {
    const message = document.getElementById("message");
    message.style.display = "none";

    // Set up the balloon animation
    createBalloons();
  }, []);

  return (
    <div className="container nova-square-regular gradient-bg">
      <h1>Happy Birthday Mamu 🎉</h1>
      <p>Wishing you a magical year full of joy and surprises! 💙</p>
      <button
        className="button gradient-bg"
        onClick={() => {
          document.getElementById("message").style.display = "block";
          createBalloons();
          setPic(!pic);
        }}
      >
        Click to Celebrate
      </button>
      <div className="message" id="message">
        🎂 Here's to your best year yet, Mamu! 🥳
      </div>
      <div className="photo-container">
        {pic ? (
          <img
            src={mamuImage1}
            alt="Mamu's Photo"
            id="photo"
            className="photo"
          />
        ) : (
          <img
            src="https://via.placeholder.com/200"
            alt="Mamu's Photo"
            id="photo"
            className="photo"
          />
        )}
      </div>
      <div className="timer">🎈 Time left today: {startTimer()}</div>

      {/* Balloons */}
      <div id="balloons"></div>
    </div>
  );
}

export default App;
