import ProductData from "./thriftyProductData.json"
import GoodsList from "../../components/GoodsList/GoodsList";

export default function ThriftyShopping() {

    return (
        <GoodsList
            title={ProductData.title}
            products={ProductData.products}
            sortKey={ProductData.sortKey}
        />
    )
}
