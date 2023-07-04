import { Schema, model, models, Model} from "mongoose";
import createModel from "./createModel";
import { IUser, IUserMethods } from "../types/IUser";


type UserModel = Model<IUser, {}, IUserMethods>;


const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    username: {type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    hash: {type: String, required: true},
    avatar: {type: String},
    joindate: {type: Date, required: true},
    isAdmin: {type: Boolean, required: true},
});

// const User = models.User || model('User', userSchema);

export default createModel<IUser, UserModel>("User", userSchema);
