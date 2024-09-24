"use client";

import useMobileNav from "@/app/hooks";

const MobileFIlterButton = ({ className, children }) => {
	const { setMobileFiltersOpen } = useMobileNav();
	return (
		<button
			type="button"
			onClick={() => setMobileFiltersOpen((prev) => !prev)}
			className={className}
		>
			{children}
		</button>
	);
};

export default MobileFIlterButton;
