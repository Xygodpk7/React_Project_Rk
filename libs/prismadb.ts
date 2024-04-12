// Import the PrismaClient from the @prisma/client package
import { PrismaClient } from "@prisma/client";

// Declare a global variable to hold the PrismaClient instance
// The variable is marked as undefined initially
declare global {
    var prisma: PrismaClient | undefined;
}

// Create a new PrismaClient instance or use the existing one if available globally
const client = globalThis.prisma || new PrismaClient();

// If the environment is not production, set the global prisma variable to the client instance
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

// Export the PrismaClient instance
export default client;
