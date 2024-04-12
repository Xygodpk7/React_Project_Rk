// Import necessary modules and dependencies
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";

// Function to get the current session using NextAuth.js
export async function getSession() {
    return await getServerSession(authOptions);
}

// Function to get the current user information
export async function getCurrentUser() {
    try {
        // Get the current session
        const session = await getSession();

        // Check if there is a user email in the session
        if (!session?.user?.email) {
            return null; // Return null if no user email is found
        }

        // Query the database using Prisma to find a unique user based on the email from the session
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email,
            },
            include:{
                orders:true
            },
        });

        // If the user is not found in the database, return null
        if (!currentUser) {
            return null;
        }

        // Return the user information with additional formatting for date fields
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };
    } catch (error: any) {
        // Handle errors and return null in case of an exception
        return null;
    }
}
