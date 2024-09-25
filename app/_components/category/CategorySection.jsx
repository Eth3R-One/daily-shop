import Image from "next/image";
import { getCategories } from "../../actions/category-actions";
import generateRandomImageUrl from "@/utils";
import CategoryList from "./CategoryList";
import Link from "next/link";

const CategorySection = async () => {
	const categories = await getCategories();
	return (
		<>
			{/* Category section */}
			<section
				aria-labelledby="category-heading"
				className="py-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
			>
				<div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
					<h2
						id="category-heading"
						className="text-2xl font-bold tracking-tight text-gray-900"
					>
						Shop by Category
					</h2>
					<Link
						href="/categories"
						className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Browse all categories
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>

				<CategoryList categories={categories?.slice(0, 5)} />

				<div className="mt-6 px-4 sm:hidden">
					<Link
						href="/category"
						className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
					>
						Browse all categories
						<span aria-hidden="true"> &rarr;</span>
					</Link>
				</div>
			</section>
		</>
	);
};

export default CategorySection;
