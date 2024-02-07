import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dos Research",
  description: "Research by Ben && Thanthan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <audio controls src="dance.mp3"></audio>
      </body>
    </html>
  );
}
