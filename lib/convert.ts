import { IPost } from "@/types/IPost";
import mongoose, { Types } from "mongoose";
// import {ObjectId} from 'mongodb';

export default class Convert {
    public static toPost(json:any) : IPost | null {
        
        // TODO: validation
        if (!json["author"] || !json["published"] || !json["title"] || !json["content"] || !json["category"] || !json["lastEdited"] || !json["tags"]) {
            throw new Error("Invalid JSON");
        }
        
        // if (!mongoose.isObjectIdOrHexString(json["author"]))
        //     throw new Error("Invalid Author");


        let location = (json["location"]) ? json["location"]  : undefined;

        const publishedDate = (json["publishedDate"]) ? new Date(json["publishedDate"]) : undefined;
        
        const result : IPost= {
            author: json["author"],
            published: json["published"],
            title: json["title"],
            content: json["content"],
            category: json["category"],
            lastEdited: new Date(json["lastEdited"]),
            tags: json["tags"],
            location,
            publishedDate,
            id: json["_id"],
        } 

        return result;
    }
}