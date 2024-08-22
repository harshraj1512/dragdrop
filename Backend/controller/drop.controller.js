import Singlelayout from '../model/singlelayout.model.js'

// create
export const CreateDrop = async (req, res)=>{
    try {
        await Singlelayout.deleteMany({});

        const newlayout = new Singlelayout({droppedItems: req.body.droppedItems});
        await newlayout.save();
        console.log('saved layout');
        res.status(201).json({ message: 'Layout saved successfully!' });
    } catch (error) {
        console.log("error layout", error);
        res.status(500).json({ message: 'Error saving layout' });
    }
};