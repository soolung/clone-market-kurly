import ProductData from "./newProductData.json"
import NewProductArticle from "../../components/BigProduct/BigProductArticle/BigProductArticle";
import "./NewProduct.scss";

export default function NewProduct() {

    return (
        <section>
            <div className="section-wrapper">
                <div className="section-header">
                    <div className="section-header-title">
                        <span className="section-title">신상품</span>
                    </div>
                </div>
                <div className="big-product-contents">
                    <div className="products_bar">
                        <p className='total_count'>
                            <span>총 {ProductData.products.length}건</span>
                        </p>
                        <div className="products_button_total">
                            <p className='total_button'>
                                <ul className='button_list'>
                                    <li>
                                        <a>추천순</a>
                                    </li>
                                    <li className='bar_before'>
                                        <a>신상품순</a>
                                    </li>
                                    <li className='bar_before'>
                                        <a>판매량순</a>
                                    </li>
                                    <li className='bar_before'>
                                        <a>낮은 가격순</a>
                                    </li>
                                    <li className='bar_before'>
                                        <a>높은 가격순</a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <NewProductArticle
                    title={ProductData.title}
                    products={ProductData.products}
                />
            </div>
        </section>
    )
}
