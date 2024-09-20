import Image from "next/image";
import { getCategories } from "../actions/category-actions";
import generateRandomImageUrl from "@/utils";

const favorites = [
	{
		id: 1,
		name: "Black Basic Tee",
		price: "$32",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg",
		imageAlt: "Model wearing women's black cotton crewneck tee.",
	},
	{
		id: 2,
		name: "Off-White Basic Tee",
		price: "$32",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg",
		imageAlt: "Model wearing women's off-white cotton crewneck tee.",
	},
	{
		id: 3,
		name: "Mountains Artwork Tee",
		price: "$36",
		href: "#",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg",
		imageAlt:
			"Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
	},
];
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
					<a
						href="#"
						className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Browse all categories
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>

				<div className="mt-4 flow-root">
					<div className="-my-2">
						<div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
							<div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
								{categories?.slice(0, 5)?.map((category) => (
									<a
										key={category?.name}
										href={category.href}
										className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
									>
										<span
											aria-hidden="true"
											className="absolute inset-0"
										>
											<Image
												src={generateRandomImageUrl(category?.slug)}
												alt=""
												className="h-full w-full object-cover object-center"
												width={800}
												height={800}
											/>
										</span>
										<span
											aria-hidden="true"
											className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
										/>
										<span className="relative mt-auto text-center text-2xl font-mono font-bold text-white">
											{category.name}
										</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 px-4 sm:hidden">
					<a
						href="#"
						className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
					>
						Browse all categories
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</section>
		</>
	);
};

export default CategorySection;
