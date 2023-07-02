import mongoose, { Schema, Model, Types } from "mongoose";
import createModel from "./createModel";

export interface IPost {
    author: Types.ObjectId,
    published: boolean,
    title: string,
    content: string,
    category: string,
    lastEdited: Date,
    publishedDate?: Date,
    tags: [string],
    location?: string

}

interface IPostMethods {

}

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
