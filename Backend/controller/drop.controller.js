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

// fetch
export const getDrop = async (req, res) => {
    try {
        const layout = await Singlelayout.findOne({}).exec();
        if (layout) {
            res.status(200).json(layout.droppedItems);
        } else {
            res.status(404).json({ message: 'No layout found' });
        }
    } catch (error) {
        console.error('Error fetching layout:', error);
        res.status(500).json({ message: 'Server error' });
    }
}