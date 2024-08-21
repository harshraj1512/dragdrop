import mongoose from "mongoose";

const droppedSchema = mongoose.Schema({
    id: {
        type: String
    },
    type: {
        type: String
    },
    content: {
        type: String
    }
});

const singlelayout = mongoose.model('singlelayout', droppedSchema);

export default singlelayout;