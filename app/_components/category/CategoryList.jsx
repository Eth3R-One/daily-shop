import generateRandomImageUrl from "@/utils";
import Image from "next/image";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
	return (
		<div className="mt-4 flow-root">
			<div className="-my-2">
				<div className="h-auto py-2">
					<div className="grid grid-cols-1 justify-items-center space-x-8 px-4 sm:px-6 lg:px-8  xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0 lg:grid-cols-4 md:grid-cols-3">
						{categories?.map((category) => (
							<CategoryCard key={category?.slug} category={category} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
