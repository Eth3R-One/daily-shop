"use client";

import { useState } from "react";
import { MobileNavContext } from "../contexts";

export const MobileNavProvider = ({ children }) => {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	return (
		<MobileNavContext.Provider
			value={{ mobileFiltersOpen, setMobileFiltersOpen }}
		>
			{children}
		</MobileNavContext.Provider>
	);
};
