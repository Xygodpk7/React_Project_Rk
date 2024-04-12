// Import necessary modules and components
import Link from "next/link";
import Container from "../Container";
import { Redressed } from 'next/font/google'
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";

// Define font styles using Google Fonts
const redressed = Redressed({ subsets: ['latin'], weight: ['400'] })

// Async function to get the current user information
const NavBar = async () => {
    // Fetch the current user information
    const currentUser = await getCurrentUser();

    return (
        <div className="
            sticky
            top-0
            w-full
            bg-slate-200
            z-30
            shadow-sm"
        >
            <div className="py-4 border-b-[1px]">
                {/* Container for styling and layout consistency */}
                <Container>
                    {/* Navigation bar content */}
                    <div className="
                        flex
                        items-center
                        justify-between
                        gap-3
                        md:gap-0"
                    >
                        {/* Brand link with custom font styling */}
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
                            <img className="w-1/3 relative aspect-video"
                            src="fazal.png"></img>
                        </Link>
                        {/* Search bar (hidden on small screens) */}
                        <div className="hidden md:block">
                            <SearchBar/>
                        </div>
                        {/* Cart count and user menu components */}
                        <div className="
                            flex
                            items-center
                            gap-8
                            md:gap-12"
                        >
                            <CartCount />
                            <UserMenu currentUser={currentUser} />
                        </div>
                    </div>
                </Container>
            </div>
            <Categories/>
        </div>
    );
}

// Export the NavBar component as the default export
export default NavBar;
