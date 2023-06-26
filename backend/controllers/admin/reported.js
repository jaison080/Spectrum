// const Blog = require("../../models/blogs");
// const House = require("../../models/house");
// const Jobs = require("../../models/jobs");
// const { Question, Answer } = require("../../models/qna");

const reported = async (req, res) => {
    try
  {
    const type = req.params.content;
    console.log(type);
    const DB = require(`../../models/${type}`)
    const result = await DB.find({isReported:true});
    if(result)
        return res.status(200).send(result)
    else
        return res.status(404).json({message : "Not found"})
  }
  catch(err)
  {
    console.log(err);
    return res.status(500).json({message : "Something went wrong"})
  }
};

module.exports = {reported}