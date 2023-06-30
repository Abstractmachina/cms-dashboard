import { IUserSignupForm } from "@/app/signup/page";
import connectDb from "@/lib/connectDb";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	console.log("/api/users/create");

	const body = await req.json();
	const form: IUserSignupForm = body.form;
	console.log(body.form.username);

	// await connectDb();

	try {
		await dbConnect();
		// const newUser = new User({
		// 	username: "a",
		// 	firstname: "a",
		// 	lastname: "a",
		// 	email: "a",
		// 	hash: "a",
		// 	joindate: new Date(),
		// 	isAdmin: false,
		// });

        // TODO: user validation 
		const newUser = new User({
			firstname: form.firstname,
			lastname: form.lastname,
			username: form.username,
			email: form.email,
			hash: form.password,
			joindate: new Date(),
			isAdmin: false,
		});

		console.log(newUser);

		await newUser.save();
        console.log("new user saved successfully");

		return NextResponse.json(
			{
				success: true,
			},
			{ status: 200 }
		);
	} 
    catch (err) {
        console.error(err);
        return NextResponse.json({
            success: false
        },
        {status: 500 });
    }
}
