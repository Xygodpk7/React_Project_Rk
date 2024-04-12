// Import necessary modules and dependencies
import bcrypt from "bcrypt";
import prisma from '@/libs/prismadb';
import { NextResponse } from "next/server";

// Function to handle POST requests
export async function POST(request: Request) {
    // Extract the JSON body from the request
    const body = await request.json();
    const { name, email, password } = body;

    // Hash the password using bcrypt with a cost factor of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database using Prisma
    const user = await prisma.user.create({
        data: {
            name, 
            email, 
            hashedPassword,
        },
    });

    // Return a JSON response containing the created user
    return NextResponse.json(user);
}
