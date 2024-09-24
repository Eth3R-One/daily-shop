import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import MobileFilterDialog from "./_components/_sidebar/MobileFilterDialog";
import MobileNavProvider from "../providers";
import MobileFIlterButton from "./_components/MobileFIlterButton";
import CategoriesSection from "./_components/CategoriesSection";
import { getCategories } from "../actions/category-actions";

const sortOptions = [
	{ name: "Most Popular", href: "#", current: false },
	{ name: "Best Rating", href: "#", current: false },
	{ name: "Newest", href: "#", current: false },
	{ name: "Price: Low to High", href: "#", current: true },
	{ name: "Price: High to Low", href: "#", current: false },
];

const filters = [
	{
		id: "category",
		name: "Category",
		options: [
			{ value: "new-arrivals", label: "New Arrivals", checked: false },
			{ value: "sale", label: "Sale", checked: false },
			{ value: "travel", label: "Travel", checked: true },
			{ value: "organization", label: "Organization", checked: false },
			{ value: "accessories", label: "Accessories", checked: false },
		],
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default async function ShopLayout({ children }) {
	const categories = await getCategories();
	return (
		<MobileNavProvider>
			<div className="bg-white">
				<div>
					{/* Mobile filter dialog */}
					<MobileFilterDialog categories={categories} />

					<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900">
								Products
							</h1>

							<div className="flex items-center">
								<Menu
									as="div"
									className="relative inline-block text-left"
								>
									<div>
										<MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
											Sort
											<ChevronDownIcon
												aria-hidden="true"
												className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											/>
										</MenuButton>
									</div>

									<MenuItems
										transition
										className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
									>
										<div className="py-1">
											{sortOptions.map((option) => (
												<MenuItem key={option.name}>
													<a
														href={option.href}
														className={classNames(
															option.current
																? "font-medium text-gray-900"
																: "text-gray-500",
															"block px-4 py-2 text-sm data-[focus]:bg-gray-100"
														)}
													>
														{option.name}
													</a>
												</MenuItem>
											))}
										</div>
									</MenuItems>
								</Menu>

								<MobileFIlterButton
									className={
										"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
									}
								>
									<span className="sr-only">Filters</span>
									<FunnelIcon aria-hidden="true" className="h-5 w-5" />
								</MobileFIlterButton>
							</div>
						</div>

						<section
							aria-labelledby="products-heading"
							className="pb-24 pt-6"
						>
							<h2 id="products-heading" className="sr-only">
								Products
							</h2>

							<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
								{/* Filters */}
								<CategoriesSection categories={categories} />

								{/* Product grid */}
								<div className="lg:col-span-3">{children}</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</MobileNavProvider>
	);
}
