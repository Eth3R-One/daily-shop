import CategorySection from "./_components/category/CategorySection";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import HomepageProductSection from "./_components/products/HomepageProductSection";

const footerNavigation = {
	shop: [
		{ name: "Bags", href: "#" },
		{ name: "Tees", href: "#" },
		{ name: "Objects", href: "#" },
		{ name: "Home Goods", href: "#" },
		{ name: "Accessories", href: "#" },
	],
	company: [
		{ name: "Who we are", href: "#" },
		{ name: "Sustainability", href: "#" },
		{ name: "Press", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Privacy", href: "#" },
	],
	account: [
		{ name: "Manage Account", href: "#" },
		{ name: "Returns & Exchanges", href: "#" },
		{ name: "Redeem a Gift Card", href: "#" },
	],
	connect: [
		{ name: "Contact Us", href: "#" },
		{ name: "Twitter", href: "#" },
		{ name: "Instagram", href: "#" },
		{ name: "Pinterest", href: "#" },
	],
};

export default function HomePage() {
	return (
		<div className="bg-slate-50">
			<HeroSection />
			<main>
				<CategorySection />
				<HomepageProductSection />
			</main>
		</div>
	);
}
