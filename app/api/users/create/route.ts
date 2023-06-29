import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest, res: NextResponse) {
    console.log("/api/users/create");

    const body = await req.json();
    console.log(body);
    // res.status(200).json({ name: 'John Doe' })
  }

