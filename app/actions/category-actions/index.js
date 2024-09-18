export const getCategories = async () => {
	try {
		const data = await fetch(
			`${process.env.API_BASE_URL}/products/categories`
		);
		const categories = await data.json();
		return categories;
	} catch (err) {
		console.log(err);
	}
};
