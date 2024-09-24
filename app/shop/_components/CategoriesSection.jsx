import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const CategoriesSection = ({ categories }) => {
	return (
		<form className="mt-4 border-t border-gray-200">
			<h3 className="sr-only">Categories</h3>

			<Disclosure
				key={"categories"}
				as="div"
				className="border-t border-gray-200 px-4 py-6"
			>
				<DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
					<span className="font-medium text-gray-900">Categories</span>
					<span className="ml-6 flex items-center">
						<PlusIcon
							aria-hidden="true"
							className="h-5 w-5 group-data-[open]:hidden"
						/>
						<MinusIcon
							aria-hidden="true"
							className="h-5 w-5 [.group:not([data-open])_&]:hidden"
						/>
					</span>
				</DisclosureButton>
				<DisclosurePanel className="pt-6">
					<div className="space-y-6">
						{categories?.map((category, optionIdx) => (
							<div key={category.slug} className="flex items-center">
								<input
									// defaultValue={option.value}
									// defaultChecked={option.checked}
									id={`filter-mobile-${category.slug}-${optionIdx}`}
									name={`${category.slug}[]`}
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label
									htmlFor={`filter-mobile-${category.slug}-${optionIdx}`}
									className="ml-3 min-w-0 flex-1 text-gray-500"
								>
									{category.name}
								</label>
							</div>
						))}
					</div>
				</DisclosurePanel>
			</Disclosure>
		</form>
	);
};

export default CategoriesSection;
