const suspend = async (req,res) =>
{
    try
    {
        const type = req.params.content
        const id = req.params.id
        const DB = require(`../../models/${type}`)
        const result = await DB.findByIdAndDelete({_id:id})
        if(result)
        {
            return res.status(200).send(result)
        }
        else
            return res.status(404).json({message: "Page not found"})
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({message:"Unsuccessful suspend of report"})
    }
}
module.exports = {suspend}