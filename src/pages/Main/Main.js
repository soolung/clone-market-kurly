import BannerData from "./banner.json";
import ProductData from "./productArticleData.json"
import Banner from "../../components/Main/Banner/Banner"
import ProductArticle from "../../components/Main/ProductArticle/ProductArticle";

export default function Main() {
    let i = 0

    return (
        <section>
            <Banner
                banner={BannerData.banners}
            />
            {
                ProductData.sections.map(s => (
                    <ProductArticle
                        title={s.title}
                        description={s.description}
                        hasListPage={s.hasListPage}
                        num={i++}
                        products={s.products}
                    />
                ))
            }
        </section>
    )
}
