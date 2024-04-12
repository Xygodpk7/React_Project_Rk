// Import the 'User' type from the Prisma client
import { User } from "@prisma/client";

// Define a new type 'SafeUser' by omitting certain fields from the 'User' type
export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
    // Include the omitted fields with adjusted types
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};
