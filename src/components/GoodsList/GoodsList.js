import BigProductArticle from "../BigProduct/BigProductArticle/BigProductArticle";
import sortKey from "./sortKeyData.json";
import "./GoodsList.scss";

export default function GoodsList(props) {

    return (
        <section>
            <div className="section-wrapper">
                <div className="section-header">
                    <div className="section-header-title">
                        <span className="section-title">{props.title}</span>
                    </div>
                </div>
                <div className="big-product-contents">
                    <div className="products_bar">
                        <p className='total_count'>
                            <span>총 {props.products.length}건</span>
                        </p>
                        <div className="products_button_total">
                            <p className='total_button'>
                                <ul className='button_list'>
                                    {sortKey.map((s, index) => (
                                        <li className={index === 0 ? "" : "bar_before"}>
                                            <a className={s === props.sortKey ? "checked" : ""}>{s}</a>
                                        </li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <BigProductArticle
                    title={props.title}
                    products={props.products}
                />
            </div>
        </section>
    )
}
