import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Your data base connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;