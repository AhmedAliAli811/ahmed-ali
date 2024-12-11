import "./globals.css";
import type {Metadata} from "next";
import {Container, Footer, Nav} from "@/components";
import {Analytics} from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Ahmed Ali",
    description: "Data Analyst",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Yuji+Mai&display=swap"
            />
        </head>
        <body className="bg-gray-800 text-neutral-300">
        {/*<body className="bg-[#f7f2f1] text-black">*/}
        <Nav/>
        <Container>
            {children}
            <Analytics/>
        </Container>
        <Footer/>
        </body>
        </html>
    );
}
