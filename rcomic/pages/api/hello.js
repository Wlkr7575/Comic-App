// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect'
import bcrypt from 'bcrypt'
import jwtoken from 'jsonwebtoken'
import user from '../../model/user'
dbConnect();

export default async(req,res)=>{
  const email = 'tugiimk@gmail.com'
  const password = 'node123'
  const name = 'togii'
  try {
    const existUser = await user.findOne({email})
    if(existUser){return res.status(404).json({message:'User already exist'})}
    const hashedPassword = await bcrypt.hash(password,12)
    const result = await user.create({email,password:hashedPassword,name})
    const token = jwtoken.sign({email:result.email,id:result._id},'test',{expiresIn:'4h'})
    res.status(200).json({result,token})
  } catch (error) {
    res.status(404).json({message:`something wrong ${error}`})
  }
}
