import {useContext, useState} from "react";
import "./Header.scss";
import categoryData from "./category.json";
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

export default function Header() {

    const {user} = useContext(UserContext);

    const [searchText, setSearchText] = useState("");
    const [searchTextOnFocus, setSearchTextOnFocus] = useState(false);

    const toggleSearchTextOnFocus = e => {
        setSearchTextOnFocus(!searchTextOnFocus)
    }

    const writeSearchText = e => {
        setSearchText(e.target.value)
    }

    const resetSearchText = e => {
        setSearchText("");
    }

    return (
        <>
            <div className="header-top">
                <div className="header-inner">
                    <div className="user-item">
                        <ul className="list-item">
                            <li className="menu">
                                <Link to="" className="purple">회원가입</Link>
                            </li>
                            <li className="menu">
                                <Link to="/login">로그인</Link>
                            </li>
                            <li className="menu last">
                                <Link to="">고객센터</Link>
                                <ul className="list-item-sub">
                                    <li>
                                        <Link to="">공지사항</Link>
                                    </li>
                                    <li>
                                        <Link to="">자주하는 질문</Link>
                                    </li>
                                    <li>
                                        <Link to="">1:1 문의</Link>
                                    </li>
                                    <li>
                                        <Link to="">대량주문 문의</Link>
                                    </li>
                                    <li>
                                        <Link to="">상품 제안</Link>
                                    </li>
                                    <li>
                                        <Link to="">에코포장 피드백</Link>
                                    </li>
                                    <li>
                                        {user.name}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="header-logo">
                        <Link to="/">
                            <img className="logo-image" src={"./logo_x2.webp"} alt="market-kurly-logo" width={103}
                                 height={79}/>
                        </Link>
                    </div>
                </div>
            </div>
            <header>
                <div className="gnb">
                    <ul className="main-menu">
                        <li className="gnb-category">
                            <Link to="">
                                <span id="three-line"/>
                                <span>전체 카테고리</span>
                            </Link>
                            <div className="category-list-box">
                                <ul className="category-list">
                                    {categoryData.category.map(c => (
                                        <li className="category-list-item" onMouseEnter={() => console.log(c.id)}>
                                            <img className="category-list-item--icon icon-off" src={c.iconImage}
                                                 alt="icon"/>
                                            <img className="category-list-item--icon icon-on" src={c.onIconImage}
                                                 alt="on-icon"/>
                                            <span>{c.title}</span>
                                            <ul className="category-list-item--sub-list">
                                                {c.sub.map(s => (
                                                    <li className="category-list-item--sub-list-item">
                                                        <span>{s.subTitle}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="">
                                <span>신상품</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="other-width">
                                <span>베스트</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <span>알뜰쇼핑</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="other-width">
                                <span>특가/혜택</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="search">
                        <input type="text" placeholder="검색어를 입력해주세요." value={searchText} onChange={writeSearchText}
                               onFocus={toggleSearchTextOnFocus} onBlur={toggleSearchTextOnFocus}/>
                        <button
                            className={"search-delete " + (searchText.length > 0 && searchTextOnFocus ? "search-delete-show" : "search-delete-no")}
                            onClick={resetSearchText}/>
                        <input type="image" className="search-go" src={"./images/search.webp"} alt="search-go"/>
                    </div>

                    <div className="other-menu">
                        <div className="delivery other-item">
                            <Link to="" className="delivery-icon"/>

                            <div className="delivery-layer">
                                <div className="no-address">
                                    <span className="purple">배송지를 등록</span>하고<br/>
                                    구매 가능한 상품을 확인하세요!
                                    <div className="no-address-button">
                                        <Link to="/login">
                                            <button className="white-login btn">로그인</button>
                                        </Link>
                                        <Link to="">
                                            <button className="purple-address btn">
                                                <span className="search-address"/>
                                                주소검색
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="yes-address">

                                </div>
                            </div>
                        </div>
                        <div className="gym other-item">
                            <Link to=""/>
                        </div>
                        <div className="cart other-item">
                            <Link to=""/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
