const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://agarwalprateek666:HR1h9Q4nL8k832W2@mynotebookcluster.8sozk05.mongodb.net/?retryWrites=true&w=majority&appName=INotebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB successfully");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
};

module.exports = connectToMongo;

