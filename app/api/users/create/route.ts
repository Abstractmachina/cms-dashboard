import { IUserForm } from "@/app/signup/page";
import connectDb from "@/lib/connectDb";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	console.log("/api/users/create");

	const body = await req.json();
	const form: IUserForm = body.form;
	console.log(body.form.username);

	// await connectDb();

    console.log("test");

    await dbConnect();
	const newUser = new User({
		username: "a",
		firstname: "a",
		lastname: "a",
		email: "a",
		hash: "a",
		joindate: new Date(),
		isAdmin: false,
	});

    console.log(newUser);
    console.log("sdfasdfafsd");

    return NextResponse.json({
        success: true,
    }, {status:200});

	// const newUser = new User({
	//     firstname: form.firstname,
	//     lastname: form.lastname,
	//     username: form.username,
	//     email: form.email,
	//     hash: form.password,
	//     joindate: new Date(),
	//     isAdmin: false
	// });

	// console.log(newUser);

	// res.status(200).json({ name: 'John Doe' })
	// res.json();
}
