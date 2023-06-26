const Company = require("../../models/userCompany");

const approveCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const company = await Company.findOne({ _id: id });
    if (company) {
      company.isApproved = true;
      await company.save();
      return res.status(200).send(company)
    }
    else
        return res.status(404).json({message: "User not found"})
  } catch (err) {
    console.log(err);
    return res.status(500).json({message:'Something went wrong'})
  }
};

module.exports = { approveCompany };
