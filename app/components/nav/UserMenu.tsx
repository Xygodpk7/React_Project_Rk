// Using the 'client' directive to run this file only on the client-side
"use client";

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";

// Define the props interface for the UserMenu component
interface UserMenuProps{
  currentUser: SafeUser | null;
}

// React functional component for the UserMenu
const UserMenu : React.FC <UserMenuProps> = ({currentUser}) => {
    // State to manage the open/closed state of the dropdown menu
    const [isOpen, setIsOpen] = useState(false);
  
    // Function to toggle the open/closed state of the dropdown menu
    const toggleOpen = useCallback(() => {
      setIsOpen((prev) => !prev);
    }, []);
  
    return (
      <>
        {/* Container for the user menu */}
        <div className="relative z-30">
            {/* Button to open/close the dropdown menu */}
          <div
            onClick={toggleOpen}
            className="
              p-2
              border-[1px]
              border-slate-400
              flex
              flex-row
              items-center
              gap-1
              rounded-full
              cursor-pointer
              hover:shadow-md
              transition
              text-slate-700
            "
          >
            {/* Display user avatar */}
            <Avatar src={(currentUser?.image)}/>
            {/* Caret down icon indicating the dropdown */}
            <AiFillCaretDown />
          </div>
            {/* Dropdown menu content */}
          {isOpen && (
            <div className="absolute 
            rounded-md 
            shadow-md 
            w-[170px] 
            bg-white 
            overflow-hidden 
            right-0 top-12 
            text-sm 
            flex 
            flex-col 
            cursor-pointer">
            {/* Render different menu items based on user authentication status */}
              {currentUser ? <div>
                <Link href="/orders">
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Log Out
                </MenuItem>
              </div> :  <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>}

            </div>
          )}
        </div>
        {/* Backdrop to close the dropdown menu when clicked outside */}
        {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
      </>
    );
  };
  
// Export the UserMenu component as the default export
export default UserMenu;