import User from "../schema/userSchema.js";


export const addUser = async(req,res) =>{
    const user = req.body;

    const newUser = new User(user);

    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message:error.message});
    }

}