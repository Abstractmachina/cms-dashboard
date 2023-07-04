"use client";

import { IUser } from "@/types/IUser";
import { useState } from "react";

const server : string = process.env.SERVER || "";

export interface IUserSignupForm {
	username: string;
	firstname: string;
	lastname: string;
	email: string;
	password: string;
    confirmPassword: string,
}

const Signup = () => {
	const [form, setForm] = useState<IUserSignupForm>({
		username: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
        confirmPassword: "",
	});

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const testUser: IUser = {
				username: "aa",
				firstname: "aa",
				lastname: "aa",
				email: "aa@email.com",
				hash: "1234",
				joindate: new Date(),
				isAdmin: false,
			};

			const response: Response = await fetch(`${server}/api/users`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					form
				}),
			});
            console.log("post fetch")
            console.log(response);
			// const data = await response.json();
			// console.log(data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
        const name = e.target.name;

        setForm({
            ...form,
            [name]: value
        });

	};

	return (
		<div className="fixed w-full h-full  mx-auto">
			<form onSubmit={handleSubmit} className="bg-gray-400 flex flex-col mx-5 mt-8 p-10">
                <h1 className="text-2xl font-bold mb-8">Sign up</h1>
				<div className="flex flex-row gap-2 justify-between">
                    <div className=" flex-grow">
                        <label 
                            htmlFor="firstname" 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                First Name
                        </label>
                        <input
                            type="text"
                            name="firstname"
                            value={form.firstname}
                            placeholder="First"
                            onChange={handleChange}
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        />
                    </div>
                    <div className=" flex-grow">
                    <label 
                        htmlFor="lastname" 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        value={form.lastname}
                        placeholder="Last"
                        onChange={handleChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                </div>
                <div>
                        <label htmlFor="username" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            placeholder="Your username"
                            onChange={handleChange}
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
				
				<div>
                    <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={form.email}
                        placeholder="email@email.com"
                        onChange={handleChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
				<div>
                    <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="************"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
				<div>
                    <label htmlFor="confirmPassword" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="************"
                        onChange={handleChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8"
				>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default Signup;
