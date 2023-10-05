import User from "../models/User.js"
import bcrypt from 'bcryptjs'
// import {createError} from 

export const register = async (req,res,next) => {
    try {  
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,

        })
        await newUser.save()
        res.status(200).send("user has been created")
    } catch (err) {
        next(err)
    }
}
export const login = async (req,res,next) => {
    try {  
        const user = await User.findOne({username:req.body.username})
        if(!user) return next(createError(404, "user not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) 
        return next(createError(400, "wrong password or username"))
        const {password, isAdmin, ...otherDetails} = user;
        res.status(200).json({...otherDetails})
    } catch (err) {
        next(err)
    }
}