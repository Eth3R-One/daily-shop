import generateRandomImageUrl from "@/utils";
import Image from "next/image";

const CategoryCard = ({ category }) => {
	return (
		<a
			key={category?.name}
			href={category.href}
			className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 "
		>
			<span aria-hidden="true" className="absolute inset-0">
				<Image
					src={generateRandomImageUrl(category?.slug)}
					alt={category?.slug}
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
	);
};

export default CategoryCard;
