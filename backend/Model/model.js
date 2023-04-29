import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    profession: {
        type: String,
        require: true,
        default: "Frontend"
    },
    desc: {
        type: String
    },
    tech: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const model = await mongoose.model("Project", Schema);

export default model;