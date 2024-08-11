import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [banner, setBanner] = useState({
    description: "",
    timer: 0,
    link: "",
    isVisible: false,
  });

  useEffect(() => {
    // Fetch banner data from the server
    const fetchBanner = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/banner");
        setBanner(response.data);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };
    fetchBanner();
  }, []);

  return (
    <>

      {banner.isVisible && <Banner banner={banner} setBanner={setBanner} />}
      <Dashboard banner={banner} setBanner={setBanner} />
      </>
  );
}

export default App;
