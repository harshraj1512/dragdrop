import mongoose from "mongoose";

const droppedSchema = mongoose.Schema({
  id: {
    type: String,
    
  },
  type: {
    type: String,
   
  },
  content: {
    className: {
      type: String,
      default: '',
    },
    children: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',  
    },
    placeholder: {
      type: String,
      default: '',  
    },
    value: {
      type: Boolean,
      default: false, 
    }
  }
});

const singleLayoutSchema = new mongoose.Schema({
    droppedItems: {
      type: [droppedSchema],
      default: []
    }
  });
const singlelayout = mongoose.model('singlelayout',  singleLayoutSchema);

export default singlelayout;