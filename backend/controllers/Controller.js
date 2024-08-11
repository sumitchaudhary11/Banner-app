const Banner = require("../models/Banner");  

const getBanner = (req, res) => {
  Banner.getBanner((banner) => {
    res.json(banner);
  });
};

const updateBanner = (req, res) => {
  const data = req.body;
  Banner.updateBanner(data, (result) => {
    res.json({ message: "Banner updated successfully" });
  });
};

module.exports = {
  getBanner,
  updateBanner,
};
