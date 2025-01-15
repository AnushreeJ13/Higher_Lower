import React from "react";
import "./Home.css"; // Create a separate CSS file for styling

const Home = () => {
  const handleModeSelection = (mode) => {
    alert(`You selected ${mode} mode!`);
  };

  return (
    <div className="home-container">
      <div className="logo">
        <h1 className="game-title">
          The <span className="highlight">Higher Lower</span> Game
        </h1>
      </div>
      <div className="game-description">
        <h2 className="tagline">Price Clash: Higher or Lower?</h2>
        <p>
          A thrilling game of higher or lower using real-world commodity prices.
          Test your market instincts and see if you can predict which item is
          worth more!
        </p>
      </div>
      <div className="button-container">
        <button
          className="mode-button classic-button"
          onClick={() => handleModeSelection("Classic")}
        >
          Classic
        </button>
        <button
          className="mode-button beat-clock-button"
          onClick={() => handleModeSelection("Beat The Clock")}
        >
          Beat The Clock
        </button>
      </div>
    </div>
  );
};

export default Home;
