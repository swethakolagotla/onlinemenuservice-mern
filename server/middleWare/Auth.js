function AuthAdmin(req,res,next){
  if(req.headers.authorization.split(" ")[1]!=="abcd"){
   res.status(401).json({
     message: "not authorized",
     status: "failed",
   });
  }
 next()
}
export  {AuthAdmin};