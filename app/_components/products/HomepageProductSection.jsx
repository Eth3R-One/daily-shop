import { getProducts } from "@/app/actions/product-actions";
import PorductsList from "./PorductsList";
import Link from "next/link";

export default async function HomepageProductSection() {
	const products = await getProducts({ LIMIT: 9 });
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="flex flex-row items-center justify-between">
					<h2 className=" text-2xl font-bold tracking-tight text-gray-900 pb-10 pt-0">
						Products
					</h2>
					<Link
						href="/shop"
						className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Browse all products
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>

				<PorductsList products={products} />
			</div>
			<div className="px-4 sm:hidden">
				<Link
					href="/shop"
					className="block text-xl font-semibold text-indigo-600 hover:text-indigo-500"
				>
					Browse all Products
					<span aria-hidden="true"> &rarr;</span>
				</Link>
			</div>
		</div>
	);
}
