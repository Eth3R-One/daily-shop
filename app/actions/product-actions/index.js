export const getProducts = async ({ SKIP = 0, LIMIT = 10 } = {}) => {
	try {
		const data = await fetch(
			`${process.env.API_BASE_URL}/products?skip=${SKIP}&limit=${LIMIT}`
		);
		const { products } = await data.json();
		return products;
	} catch (err) {
		console.log(err);
	}
};

export const getTotalProductsSize = async () => {
	try {
		const data = await fetch(`${process.env.API_BASE_URL}/products`);
		const { total } = await data.json();
		return total;
	} catch (err) {
		console.log(err);
	}
};
