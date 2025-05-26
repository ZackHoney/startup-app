"use client";

import { signOut, signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
// Import your session hook here, e.g. useSession from next-auth/react

const Navbar = () => {
    // Replace with your actual session hook
    const { data: session } = useSession();

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src='/logo.png' alt='logo' width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5'>
                    {session && session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span>Create</span>
                            </Link>

                            <button onClick={() => signOut()}>
                                <span>Logout</span>
                            </button>

                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={() => signIn('github')}>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar