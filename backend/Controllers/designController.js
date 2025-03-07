
import asynchandler from 'express-async-handler';
import Design from '../models/designModel.js';
import cloudinary from '../utils/Cloudinary.js';




const createDesign = async (req, res) => {

  
  try {
    const { name, description, price, size, category, sheetsize } = req.body;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `design`,
      public_id: `sheet_${Date.now()}`,

    });

  

    // Create new design document

    const design = await Design.create({
      name,
      description,
      price,
      size,
      category,
      sheetsize,
      designImage: {
        public_id: result.public_id,
        url: result.url,
      },
    });



    


    res.status(201).json(design);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




// @desc Create a new design
// route POST /api/design/createdesign
// @access Private  

// const createDesign = asynchandler(async (req, res) => {
//   const { name, description, price ,size,category,sheetsize } = req.body;
//   const publicId = req.file.originalname || `sheet_${Date.now()}`;
//   const result = await cloudinary.uploader.upload(req.file.path,{
//     folder: `design`,
//     public_id: publicId,
//   });

//   const design = await Design.create({
//     name,
//     description,
//     price, size,category,sheetsize , 

//     images: {
//       public_id: result.public_id,
//       url: result.url,
//     },





//   });

//   if (design) {
//     res.status(201).json(design);
//   } else {
//     res.status(400);
//     throw new Error('Invalid  data');
//   }
// });



// const createDesign = asynchandler(async (req, res) => {
//   const { name, description, price ,size,category,sheetsize } = req.body;

//   const result = await cloudinary.uploader.upload(req.file.path,(err,result)=>{
//     if(err){console.log(err)}
//   });

//   const design = await Design.create({ 
//     name,
//     description,
//     price, size,category,sheetsize , 
//     images: {
//       public_id: result.public_id,
//       url: result.url,
//     },

//   });

//   if (design) {
//     res.status(201).json(design);
//   } else {
//     res.status(400);
//     throw new Error('Invalid  data');
//   }
// });







// // @desc Get all designs
// // route GET /api/design/getdesign
// // @access Public


const getDesign = asynchandler(async (req, res) => {
  try {
    const design = await Design.find();
    res.status(200).json(design);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});






// @desc Get a single design by ID
// route GET /api/design/ id
// @access Public

const getDesignById = asynchandler(async (req, res) => {
  const design = await Design.findById(req.params.id);

  if (design) {
    res.json(design);
  } else {
    res.status(404);
    throw new Error('Design not found');
  }
});








// @desc Update a design by ID
// route Patch /api/design/:id
// @access Private 

const updateDesignById = asynchandler(async (req, res) => {
  const { name, description, price, size, category, sheetsize, } = req.body;

  const design = await Design.findById(req.params.id);

  if (design) {
    design.name = name || design.name;
    design.description = description || design.description;
    design.price = price || design.price;
    design.size = size || design.size;
    design.sheetsize = sheetsize || design.sheetsize;
    design.category = category || design.category;


    const updatedDesign = await design.save();
    res.json(updatedDesign);
  } else {
    res.status(404);
    throw new Error('Design not found');
  }
});

// @desc Delete design by ID
// route DELETE /api/design/:id
// @access Private 

const deleteDesignById = asynchandler(async (req, res) => {
  const { id } = req.params;

  try {
    const designdelete = await Design.findOneAndDelete(id)
    res.json({ message: 'design removed', designdelete });
  } catch {
    res.status(404);
    throw new Error('design not found');
  }


});






export { createDesign, getDesign, getDesignById, updateDesignById, deleteDesignById };
