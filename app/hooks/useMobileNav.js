import { useContext } from "react";
import { MobileNavContext } from "../contexts";

export const useMobileNav = () => {
	return useContext(MobileNavContext);
};
