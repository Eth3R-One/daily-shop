"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ totalProductsSize }) => {
	const router = useRouter();
	const searchparams = useSearchParams();
	const pageNo = searchparams.get("page") || 1;

	const totalPage = Math.ceil(totalProductsSize / 10);
	const firstProduct = ((pageNo ?? 1) - 1) * 10 + 1 || 1;
	const lastProduct = firstProduct + 9;

	const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

	return (
		<div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 sm:px-6 py-10">
			<div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">{firstProduct}</span> to{" "}
						<span className="font-medium">{lastProduct}</span> of{" "}
						<span className="font-medium">{totalProductsSize}</span>{" "}
						results
					</p>
				</div>
				<div>
					<nav
						aria-label="Pagination"
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
					>
						{pageNo > 1 && (
							<button
								onClick={(e) => {
									if (pageNo > 1) {
										router.push(`/shop?page=${Number(pageNo) - 1}`);
									}
								}}
								className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								title="Previous"
							>
								<span className="sr-only">Previous</span>
								<ChevronLeftIcon
									aria-hidden="true"
									className="h-5 w-5"
								/>
							</button>
						)}

						<div className=" gap-5">
							{pages?.map((page, indx) => (
								<button
									key={indx}
									onClick={() => {
										router.push(`/shop?page=${Number(indx) + 1}`);
									}}
									aria-current="page"
									className={`m-1 rounded-sm relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
										indx + 1 == pageNo
											? "bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											: "text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 hover:bg-orange-300"
									}`}
								>
									{page}
								</button>
							))}
						</div>

						{/* <a
							href="#"
							aria-current="page"
							className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							1
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						>
							2
						</a>
						<a
							href="#"
							className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
						>
							3
						</a>
						<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
							...
						</span>
						<a
							href="#"
							className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
						>
							8
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						>
							9
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						>
							10
						</a> */}
						{Math.ceil(totalProductsSize / 10) > pageNo && (
							<button
								onClick={(e) => {
									if (Math.ceil(totalProductsSize / 10) > pageNo) {
										router.push(`/shop?page=${Number(pageNo) + 1}`);
									}
								}}
								className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								title="Next"
							>
								<span className="sr-only">Next</span>
								<ChevronRightIcon
									aria-hidden="true"
									className="h-5 w-5"
								/>
							</button>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
