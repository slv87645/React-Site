import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Movies collection using Mongoose.');
    }
});

// Schema
const collectableSchema = mongoose.Schema({
    title:         {type: String, required: true},
    type:          {type: String, required: true},
    quantity:      {type: Number, required: true, default: 0},
    cost:         {type: Number, required: true, default: 0},
    date: {type: Date,   required: true, default: Date.now}
});

const Collectable = mongoose.model("Collectable", collectableSchema);

// Create model
const createCollectable = async (title, type, quantity, cost, date) => {
    const collectable = new Collectable({
        title: title,
        type: type,
        quantity: quantity,
        cost: cost,
        date: date
    });
    return collectable.save();
};

// Find model
const findCollectables = async (filter) => {
    const query = Collectable.find(filter);
    return query.exec();
};

// Find by id
const findById = async(id) => {
    const query = Collectable.findById(id);
    return query.exec();
};

// Update model
const replaceCollectable = async (id, title, type, quantity, cost, date) => {
    const result = await Collectable.replaceOne({_id:id}, {
        title : title,
        type : type,
        quantity : quantity,
        cost : cost,
        date : date,
    });
    return{
        id : id,
        title : title,
        type : type,
        quantity : quantity,
        cost : cost,
        date : date,
    }
};

// Delete model
const deleteById = async (id) => {
    const result = await Collectable.deleteOne({_id: id});
    return result.deletedCount;
};

export { createCollectable, findCollectables, findById, replaceCollectable, deleteById};