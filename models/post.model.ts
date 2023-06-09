import mongoose, { Schema, Model } from "mongoose";
import createModel from "./createModel";
import { IPost, IPostMethods } from "../types/IPost";



type PostModel = Model<IPost, {}, IPostMethods>;


const postSchema = new Schema<IPost, PostModel, IPostMethods>({
    author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    published: {type: Boolean, required: true},
    publishedDate: {type: Date},
    title: {type: String, required: true},
    content: {type: String, required: true},
    lastEdited: {type: Date, required: true},
    tags: {type: [String]},
    category: {type: String, required: true},
    location: {type: String},
});


export default createModel<IPost, PostModel>("Post", postSchema);
