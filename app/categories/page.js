import Link from "next/link";
import CategoryList from "../_components/category/CategoryList";
import { getCategories } from "../actions/category-actions";

const CategoryPage = async () => {
	const categories = await getCategories();
	return (
		<>
			<>
				{/* Category section */}
				<section
					aria-labelledby="category-heading"
					className="py-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
				>
					<div className="px-4 flex items-center justify-between sm:px-6 lg:px-8 xl:px-0">
						<h2
							id="category-heading"
							className="text-3xl text-center font-bold tracking-tight text-gray-900"
						>
							Shop by Category
						</h2>
					</div>

					<CategoryList categories={categories} />
				</section>
			</>
		</>
	);
};

export default CategoryPage;
