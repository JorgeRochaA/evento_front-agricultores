import * as Contact from "./styled";
import { Error, Label } from "../common";
import { FieldError } from "react-hook-form";
import ProductButton from "./productButton";


export interface params {
	products?: string[];
	resetProducts: boolean;
	onSelect: (products: string[]) => void
}

const App = (params: params): JSX.Element => {
	const products: string[] = [];

	const handleSelect = (name: string, state: boolean) => {
		const productsNew = state
			? [...products, name]
			: products.filter((p) => p !== name);

		params.onSelect(productsNew);
	};

	return (
		<Contact.ProductContainer>
			<Label>Productos que solicita el mayorista</Label>
			<Contact.ProductList>
				{params.products?.map((v, i) => (
					<ProductButton
						reset={params.resetProducts}
						key={i}
						name={v}
						onSelect={handleSelect}
					/>
				))}
			</Contact.ProductList>
		</Contact.ProductContainer>
	);
};

export default App;
