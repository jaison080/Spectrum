const Company = require("../../models/userCompany");

const pendingCompanyApproval = async (req, res) => {
  try {
    const company = await Company.find({ isApproved: false });
    if (company) {
      return res.status(200).send(company);
    } else {
      return res.status(404).json({ message: "No such company" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { pendingCompanyApproval };
