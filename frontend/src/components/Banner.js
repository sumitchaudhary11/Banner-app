import React, { useState, useEffect } from "react";

function Banner({ banner, setBanner }) {
  const [timeLeft, setTimeLeft] = useState(banner.timer);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
      return () => clearInterval(timerId);
    }
    // Hide banner when time reaches 0
    if (timeLeft === 0) {
      setBanner({ ...banner, isVisible: false });
    }
  }, [timeLeft, banner]);

  // Handler for hiding banner when timer reaches 0
  const handleVisibility = () => {
    if (timeLeft <= 0) {
      return false;
    }
    return banner.isVisible;
  };

  return (
    <>
      {handleVisibility() && (
        <div className="banner bg-blue-500 text-white p-4 mb-4 text-center rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-2">{banner.description}</h1>
          <p className="text-lg mb-2">Time remaining: {timeLeft}s</p>
          <a
            href={banner.link}
            className="text-blue-200 underline hover:text-blue-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </div>
      )}
    </>
  );
}

export default Banner;
