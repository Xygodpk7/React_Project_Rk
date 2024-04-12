// Import necessary modules and dependencies
import prisma from '@/libs/prismadb';
import { NextResponse } from "next/server";
import { getCurrentUser } from '@/actions/getCurrentUser';

// Function to handle POST requests
export async function POST(request: Request) {

    const currentUser = await getCurrentUser();

    if(!currentUser || currentUser.role === 'ADMIN'){
        return NextResponse.error()
    }

    // Extract the JSON body from the request
    const body = await request.json();
    const { name, description, price, brand, category, inStock, images} = body;

    // Create a new user in the database using Prisma
    const product = await prisma.product.create({
        data: {
            name, 
            description,
            brand,
            category,
            inStock,
            images,
            price : parseFloat(price)
        },
    });

    // Return a JSON response containing the created user
    return NextResponse.json(product);
}

export async function PUT(request:Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) return NextResponse.error();

    if(currentUser.role !== 'ADMIN'){
        return NextResponse.error()
    }

    const body = await request.json()
    const {id, inStock } =body

    const product = await prisma.product.update({
        where : {id: id},
        data:{inStock},
    });

    return NextResponse.json(product);
}
