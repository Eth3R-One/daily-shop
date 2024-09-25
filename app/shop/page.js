import { getProducts } from "../actions/product-actions";
import ProductsList from "../_components/products/PorductsList";

const ShopPage = async ({ searchParams: { page } }) => {
	const products = await getProducts({ SKIP: ((page ?? 1) - 1) * 10 });
	return <ProductsList products={products} />;
};

export default ShopPage;
