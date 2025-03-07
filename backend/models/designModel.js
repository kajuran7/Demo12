import mongoose from 'mongoose';
const designSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  price: {
    type: Number, 
    required: true,
  }, 

    size:{
      type:String,
      required: true,
    },
    sheetsize:
    {
      type:String,
      required: true,
    },

    category: {
      type: String,
      required:true, 
         
  },
 

designImage: {
    public_id: {
      type: String,
    required:true
    },
    url: {
      type: String,
      required:true
    },

 
  },




    

}, { 
  timestamps: true,
});

const Design = mongoose.model('designImage', designSchema);

export default Design;
