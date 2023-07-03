import { Types } from "mongoose";


export interface IPost {
    author: Types.ObjectId;
    published: boolean;
    title: string;
    content: string;
    category: string;
    lastEdited: Date;
    publishedDate?: Date;
    tags: Array<string>;
    location?: string;
    id?:string;
}

export interface IPostMethods {

}
