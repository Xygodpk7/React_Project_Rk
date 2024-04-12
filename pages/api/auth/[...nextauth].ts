// Import necessary modules and types
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prismadb"; // Import the Prisma instance
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

// Define authentication options
export const authOptions: AuthOptions = {
    // Use PrismaAdapter for session storage
    adapter: PrismaAdapter(prisma),

    // Configure authentication providers
    providers: [
        // Google authentication provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        // Custom credentials authentication provider
        CredentialProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'text',
                },
                password: {
                    label: 'password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                // Check if email and password are provided
                if (!credentials?.email || !credentials.password) {
                    throw new Error("Invalid email or password");
                }

                // Find the user with the provided email in the Prisma database
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                // If user or hashedPassword is not found, throw an error
                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid email or password");
                }

                // Compare the provided password with the hashedPassword in the database
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                // If the password is incorrect, throw an error
                if (!isCorrectPassword) {
                    throw new Error("Invalid email or password");
                }

                // Return the user if authentication is successful
                return user;
            }
        }),
    ],

    // Configure custom pages, e.g., the sign-in page
    pages: {
        signIn: "/login",
    },

    // Enable debugging in development environment
    debug: process.env.NODE_ENV === 'development',

    // Configure session strategy as 'jwt'
    session: {
        strategy: 'jwt',
    },

    // Set the session secret
    secret: process.env.NEXTAUTH_SECRET,
};

// Export the NextAuth instance with the defined options
export default NextAuth(authOptions);
