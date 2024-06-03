import { Inter } from "next/font/google"

export const metadata = {
    title: 'Login',
    description: 'Login to your account',
}

import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });


export default function LoginLayout({children}: { children: ReactNode }) {
    return (
        <div className={`${inter.className} flex justify-center items-center h-screen`}>
            {children}
        </div>
    )
}