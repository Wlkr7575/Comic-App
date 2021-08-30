// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/dbConnect'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import user from '../../../model/user'
dbConnect();

export default async(req,res)=>{
  const{email,password} = req.body
  try {
    const existUser = await user.findOne({email})
    if(!existUser){return res.status(404).json({message:"User doesn't exist with this email"})}
    const  isPasswordCorrect= await bcrypt.compare(password,existUser.password)
    if(!isPasswordCorrect){return res.status(404).json({message:'password incorrect'})}
    const token= jwt.sign({email:existUser.email,id:existUser._id},'test',{expiresIn:'4h'})
    res.status(200).json({result:existUser,token})
  } catch (error) {
    res.status(404).json({message:`something wrong ${error}`})
  }
}
