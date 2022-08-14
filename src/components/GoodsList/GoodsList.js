import BigProductArticle from "../BigProduct/BigProductArticle/BigProductArticle";
import "./GoodsList.scss";
import SortKeyData from "./sortKeyData.json";
import {useEffect, useState} from "react";

export default function GoodsList(props) {

    const [sortKey, setSortKey] = useState(props.sortKey)

    useEffect(() => {
        setSortKey(props.sortKey);
    }, [])

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
                                    {SortKeyData.map((s, index) => (
                                        <li className={index === 0 ? "" : "bar_before"}>
                                            <a
                                                className={s === sortKey ? "checked" : ""}
                                                onClick={() => setSortKey(s)}
                                            >
                                                {s}
                                            </a>
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
