import { LayoutDashboardIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
import { SignedIn, SignedOut, SignInButton ,SignOutButton} from "@clerk/clerk-react";
import SignInAuthButton from '../ui/SignInAuthButton';

const Topbar = () => {
    const isAdmin = false;
  return (
    <div className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10  '>

        <div className=' flex gap-2 items-center'>
            spotify
        </div>

        <div className='flex gap-4 items-center'> 
            {isAdmin && (
                <Link to="/admin" >
                    <LayoutDashboardIcon className="size-4 mr-2" />
                    Admin Dashboard
                </Link>
            )}

            <SignedIn>
                <SignOutButton />
            </SignedIn>

            <SignedOut>
                <SignInAuthButton />
            </SignedOut>


        </div>
      
    </div>
  )
}

export default Topbar
