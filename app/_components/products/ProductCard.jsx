import Image from "next/image";

const ProductCard = ({ product }) => {
	return (
		<div
			key={product.id}
			className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:cursor-pointer"
		>
			<div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
				<Image
					src={product.thumbnail}
					width={1000}
					height={1000}
					alt={product.title}
					className="h-full w-full object-cover object-center sm:h-full sm:w-full"
				/>
			</div>
			<div className="flex flex-1 flex-col space-y-2 p-4">
				<h3 className="text-xl font-semibold text-[#FB6E16]">
					<a href={product.href}>
						<span aria-hidden="true" className="absolute inset-0" />
						{product.title}
					</a>
				</h3>
				<p className="text-sm text-gray-500">{product.description}</p>
				<div className="flex flex-1 flex-col justify-end">
					<p className="text-sm italic text-primary-light">
						{product.category}
					</p>
					<p className="text-base font-medium text-gray-900">
						{product.price}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
