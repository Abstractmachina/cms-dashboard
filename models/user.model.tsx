import { Schema, model, models} from "mongoose";

export interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    hash: string;
    avatar?: string;
    joindate: Date;
    isAdmin: boolean;
}


const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    hash: {type: String, required: true},
    avatar: {type: String},
    joindate: {type: Date, required: true},
    isAdmin: {type: Boolean, required: true},
});

const User = models.User || model('User', userSchema);

export default User;
