import ProductData from "./bestProductData.json"
import GoodsList from "../../components/GoodsList/GoodsList";

export default function Best() {

    return (
        <GoodsList
            title={ProductData.title}
            products={ProductData.products}
            sortKey={ProductData.sortKey}
        />
    )
}
