const myDate = (req,res,next) => {
    const date=new Date()
    console.log(date.getDay())
    if ((2>=date.getDay & date.getDay<=5)&(9>=date.getHours & date.getHours<=17)){
  
   next ();
    } else {
        res.status(401).send("App is not available")
    }
}
module.exports=myDate;