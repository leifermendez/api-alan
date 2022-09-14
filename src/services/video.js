const { MOCKE_VIDEO } = require("../models/videos");
const getAllVideos = () => {
  return MOCKE_VIDEO;
};

module.exports = { getAllVideos };
