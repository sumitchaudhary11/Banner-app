const db = require("../config/db");

const Banner = {
  getBanner: (callback) => {
    db.query("SELECT * FROM banner WHERE id = 1", (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  updateBanner: (data, callback) => {
    const { description, timer, link, isVisible } = data;
    db.query(
      "UPDATE banner SET description=?, timer=?, link=?, isVisible=? WHERE id = 1",
      [description, timer, link, isVisible],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

module.exports = Banner;
