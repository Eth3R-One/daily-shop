import { getProducts } from "../actions/product-actions";
import ProductsList from "../_components/products/PorductsList";

const ShopPage = async () => {
	const products = await getProducts();
	return <ProductsList products={products} />;
};

export default ShopPage;
