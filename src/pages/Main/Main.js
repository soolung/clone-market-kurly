import BannerData from "./banner.json";
import Banner from "../../components/Main/Banner/Banner"
import ProductSection from "../../components/Main/ProductSection/ProductSection";

export default function Main() {

    return (
        <>
            <Banner
                banner={BannerData.banners}
            />
        </>
    )
}
