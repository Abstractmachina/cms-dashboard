'use client';

import { FormEvent, useState } from "react";

const server = process.env.SERVER || "";

export interface IUserLoginForm {
	email: string;
	password: string;
}



function Login() {

    const [form, setForm] = useState<IUserLoginForm>({
		email: "",
		password: "",
	});


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;

        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        try{
            const response: Response = await fetch(`${server}/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    form
                }),
            });
            console.log("post fetch");
            console.log(response);
			const data = await response.json();
            console.log(data);

        } catch (err) {
            console.error(err);
        }
    }


  return (
    <div className="fixed w-full h-full  mx-auto">
			<form onSubmit={handleSubmit} className="bg-gray-400 flex flex-col mx-5 mt-8 p-10">
                <h1 className="text-2xl font-bold mb-8">Login</h1>

        		
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
				
				<button type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8">
					    Login
				</button>
			</form>
		</div>
  )
}

export default Login