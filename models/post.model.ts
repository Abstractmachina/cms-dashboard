import mongoose, { Schema, Model, Types } from "mongoose";
import createModel from "./createModel";

export interface IPost {
    author: Types.ObjectId,
    published: boolean,
    title: string,
    body: string,
    lastEdited: Date,
    tags: [string]

}

interface IPostMethods {

}

type PostModel = Model<IPost, {}, IPostMethods>;


const postSchema = new Schema<IPost, PostModel, IPostMethods>({
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    published: {type: Boolean, required: true},
    title: {type: String, required: true},
    body: {type: String, required: true},
    lastEdited: {type: Date, required: true},
    tags: {type: [String]}
});


export default createModel<IPost, PostModel>("Post", postSchema);
