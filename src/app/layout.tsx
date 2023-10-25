import {ReduxProvider} from "@/redux/provider";
import "../assets/styles/globals.css";
import React from "react";
import {Metadata} from "next";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import '@/assets/styles/main.scss'

export const metadata: Metadata = {
    title: "Baltic Integration Group",
    description: "Baltic Integration Group",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'min-h-max'}>
        <ReduxProvider>
            <main className={'flex-1 flex flex-col pt-16 min-h-max'}>
                {children}
            </main>
            <Footer/>
            <Header/>
        </ReduxProvider>
        </body>
        </html>
    );
}