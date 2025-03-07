
import asyncHandler from'express-async-handler'
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'


// @desc register user/set token
// route POST /api/users/signup
//  if you are not our user so  New User Registation 
// @access Public
const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password}=req.body;
    const userExists =await User.findOne({email})
    if (userExists){
        res.status(400);
        throw new Error("user alredy exists");
    }
    const user =await User.create({
        name,
        email,
        password

    })


    if (user){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            password:user.password,
            success:true,
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data')

    }
    res.status (200).json({ message: 'Register User' });
  
}); 



// @desc Auth user/set token  
// route POST/ api/users/login
//  you are alredy sign up so now you are login
// @access Public

const authUser = asyncHandler(async(req, res) => {
    const {email,password}=req.body
  
    const user= await User.findOne({email})
  
    if (user && (await user.matchPassword(password))){
      generateToken(res,user._id)
      res.status(201).json({
          _id:user._id,
          name:user.name,
          email:user.email,
          password:user.password,
          role: user.role,
          token: user.token,
          success : true,
          message :"Welcome" +" " + user.name });
  }
  else{
      res.status(401)
      throw new Error('Invaild email or password')
      
  }
       });

// @desc logout user/set token
// route POST /api/users/logout
// logout your account 
// User LogOut
// @access Public
const logoutUser = asyncHandler(async(req, res) => {

    res.cookie('jwt','',{ 
        httpOnly:true, 
        expires: new Date(0),
    })
    res.status (200).json ({ message: 'User logged out successfully'});
    });
    

// @desc get profile
// route GET /api/users/profile
// get your profile
// @access Public

    const getUserProfile = asyncHandler(async(req, res) => {
        res.status (200).json ({ message: ' User profile' });
        });
    
 
// @desc update user profile
// route Patch /api/users/profile
// @access Private

    const updateUserProfile = asyncHandler(async(req, res) => {
       const user = await User.findById(req.user._id)
       if (user) {
        user.name =req.body.name ||user.name
        user.email =req.body.email ||user.email
             if (req.body.password) {
                user.password=req.body.password
             }
            const updateduser = await user.save();
            res.status(200).json({
                _id:updateduser._id,
                name:updateduser.name,
                email:updateduser.email
                
            })
       }
       else{
        res.status(404);
        throw new Error('User not found')

       } 
        });
// @desc GetAllusers
// route Patch /api/users/getalluser
// @access Private

        const getAlluser = asyncHandler(async (req, res) => {
            const user= await User.find({});
            res.json(user);
          });
          
// @desc GetSingleUser by ID
// route GET /api/users/id
// @access Private

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
  
    if (user) { 
      res.json(user);
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });


    export {authUser,
        registerUser,
        getUserProfile,
        logoutUser,
        updateUserProfile,
        getAlluser,
        getUserById,

     


    };