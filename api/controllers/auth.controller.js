import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('สร้างชื่อผู้ใช้นี้เรียบร้อย');
  } catch (error) {
    next(error);
  }
};

export const signin=async(req,res,next)=>{
  const {email,password}=req.body;
  try {
    const vaildUser=await User.findOne({email})
    if(!vaildUser) return next(errorHandler(404,'ไม่มีข้อมูลผู้ใช้'))
    const vaildPassword=await bcryptjs.compareSync(password,vaildUser.password)
    if(!vaildPassword) return next(errorHandler(401,'ตรวจสอบรหัสผ่าน'))
    const token = jwt.sign({id:vaildUser._id},process.env.JWT_SECRET)
    const {password:pass,...we} = vaildUser;
    res.cookie('access_token',token,{httpOnly:true})
    .status(200)
    .json(we)
  } catch (error) {
    next(error);
  }
}

