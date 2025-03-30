import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    fallback: ["system-ui", "Segoe UI", "Roboto", "Arial"],
});

const lato = Lato({
    variable: "--font-lato",
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
    fallback: ["system-ui", "Segoe UI", "Roboto", "Arial"],
});

export const metadata: Metadata = {
    title: "Unira",
    description: "Step into the world where conversations spark connections!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${lato.variable}`}>
                {children}
            </body>
        </html>
    );
}
