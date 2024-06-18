import jwt from "jsonwebtoken";


const isAuthenticated = async (req,res,next) => {
    try {
        const token = req.cookies.token;
      //  console.log("token",token);
    
        if(!token){
            return res.status(401).json({
                message:"User not authenticated",
                success:false
            })
        }
       
    
        const decode =await jwt.verify(token,"rdg");
 //       console.log("decode=>line 18 auth",decode);
        req.user = decode.userId;
    
        next();
    } catch (error) {
        console.log(error)
    }
 
}

export default isAuthenticated;