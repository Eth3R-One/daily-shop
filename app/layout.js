import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import FooterSection from "./_components/FooterSection";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Daily Shop",
	description:
		"This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
			>
				<header className="relative overflow-hidden bg-slate-50">
					<Navbar />
				</header>
				{children}

				<FooterSection />
			</body>
		</html>
	);
}
