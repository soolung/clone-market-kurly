import ProductData from "./newProductData.json"
import GoodsList from "../../components/GoodsList/GoodsList";

export default function NewProduct() {

    return (
        <GoodsList
            title={ProductData.title}
            products={ProductData.products}
            sortKey={ProductData.sortKey}
        />
    )
}
