import {connect} from "mongoose";


const uri: string = process.env.MONGODB_URI || "";

const connectDb = async () => {
        console.log("> Connecting to database");
        await connect(uri);
        console.log(">Connected to database");
}

export default connectDb;