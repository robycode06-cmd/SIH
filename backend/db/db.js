import mongoose from "mongoose";

function connectToDB() {
    const dbUri = process.env.DB_CONNECT;
    if (!dbUri) {
        console.error("Error: DB_CONNECT is not defined in environment variables (.env)");
        return;
    }

    mongoose.connect(dbUri)
    .then(() => {
        console.log("Connected to DB successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
    });
}


export default connectToDB;