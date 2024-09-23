"use client";

import useMobileNav from "@/app/hooks";
import { FunnelIcon } from "@heroicons/react/24/solid";

const MobileFIlterButton = () => {
	const { setMobileFiltersOpen } = useMobileNav();
	return (
		<button
			type="button"
			onClick={() => setMobileFiltersOpen(true)}
			className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
		>
			<span className="sr-only">Filters</span>
			<FunnelIcon aria-hidden="true" className="h-5 w-5" />
		</button>
	);
};

export default MobileFIlterButton;
