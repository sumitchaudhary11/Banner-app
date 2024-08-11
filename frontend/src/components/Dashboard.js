import React, { useState } from "react";
import axios from "axios";

function Dashboard({ banner, setBanner }) {
  const [description, setDescription] = useState(banner.description);
  const [timer, setTimer] = useState(banner.timer);
  const [link, setLink] = useState(banner.link);
  const [isVisible, setIsVisible] = useState(banner.isVisible);
  const [error, setError] = useState("");
  

  const handleSubmit = async () => {

        if (!description){
            setError("Please enter the description of banner")
            return
        }       
        if (timer <= 0 ){
            setError("Please enter the positive value for timing")
            return
        }
        if(!link){
            setError("Please enter the URL");
            return
        }


        if(!link.startsWith("https") || !link.startsWith("http")) {
            setError("Please enter a valid URL starting with http:// or https://")
          return;
        }
    const updatedBanner = { description, timer, link, isVisible };
    try {
      await axios.post("http://localhost:5000/api/banner", updatedBanner);
      setBanner(updatedBanner);
      setDescription("");
      setError("");
      setTimer("");
      setLink("");
      setIsVisible(false);
    } catch (error) {
      console.error("Error updating banner:", error);
    }
  };

  return (
    <div className="dashboard bg-gray-100 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Banner Controls</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-1">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Timer (seconds):</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Visibility:</label>
          <input
            type="checkbox"
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
            className="mr-2"
          />
          <span className="text-sm">Show Banner</span>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
}

export default Dashboard;
