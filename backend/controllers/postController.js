const postToGroup = require('../puppeteer/postToGroup');

exports.postToGroup = async (req, res) => {
  const { cookie, message, groupUrl } = req.body;
  try {
    const result = await postToGroup(cookie, message, groupUrl);
    res.json({ success: true, result });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};
