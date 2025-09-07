// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Shir o Khurshid",
  description: "Luxury Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#001B2D] min-h-screen flex justify-center items-center">
        <div className="max-w-sm w-full h-screen bg-[#001B2D] flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
