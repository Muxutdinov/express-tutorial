
const logger = (req,res,next)=>{
    console.log(`http//localhost:4000/${new Date}`);
}
module.exports = logger