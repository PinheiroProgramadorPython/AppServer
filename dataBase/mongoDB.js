import mongoose from "mongoose";

const uri =
    process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI_TEST
        : process.env.MONGO_URI;

mongoose.connect(uri);

mongoose.connection.once("open", () => {
    if (process.env.NODE_ENV !== "test") {
        console.log("📦 Conectado ao banco de produção");
    }
});

export default mongoose;
