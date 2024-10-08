"use client";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from "@heroicons/react/20/solid";
import useMobileNav from "@/app/hooks";
import CategoriesSection from "../CategoriesSection";
import MobileFIlterButton from "../MobileFIlterButton";
const MobileFilterDialog = ({ categories }) => {
	const { mobileFiltersOpen, setMobileFiltersOpen } = useMobileNav();

	return (
		<Dialog
			open={mobileFiltersOpen}
			onClose={setMobileFiltersOpen}
			className="relative z-40 lg:hidden"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
			/>

			<div className="fixed inset-0 z-40 flex">
				<DialogPanel
					transition
					className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
				>
					<div className="flex items-center justify-between px-4">
						<h2 className="text-lg font-medium text-gray-900">Filters</h2>

						<MobileFIlterButton
							className={
								"-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
							}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</MobileFIlterButton>
					</div>

					{/* Filters */}
					<CategoriesSection categories={categories} />
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default MobileFilterDialog;
