import "./Header.scss"
import {useState} from "react";

export default function Header() {

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
        <header>
            <div className="header-wrapper">
                <div className="user-item">
                    <ul className="list-item">
                        <li className="menu purple">
                            <a>회원가입</a>
                        </li>
                        <li className="menu">
                            <a>로그인</a>
                        </li>
                        <li className="menu last">
                            <a>고객센터</a>
                            <ul className="list-item-sub">
                                <li>
                                    <a>공지사항</a>
                                </li>
                                <li>
                                    <a>자주하는 질문</a>
                                </li>
                                <li>
                                    <a>1:1 문의</a>
                                </li>
                                <li>
                                    <a>대량주문 문의</a>
                                </li>
                                <li>
                                    <a>상품 제안</a>
                                </li>
                                <li>
                                    <a>에코포장 피드백</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="header-logo">
                    <a>
                        <img className="logo-image" src={"./logo_x2.webp"} alt="market-kurly-logo" width={103}
                             height={79}/>
                    </a>
                </div>
                <div className="gnb">
                    <ul className="main-menu">
                        <li className="gnb-category">
                            <a>
                                <span id="three-line"/>
                                <span>전체 카테고리</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>신상품</span>
                            </a>
                        </li>
                        <li>
                            <a className="other-width">
                                <span>베스트</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>알뜰쇼핑</span>
                            </a>
                        </li>
                        <li>
                            <a className="other-width">
                                <span>특가/혜택</span>
                            </a>
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
                            <a href=""/>

                            <div className="delivery-layer">
                                <div className="no-address">
                                    <span className="purple">배송지를 등록</span>하고<br/>
                                    구매 가능한 상품을 확인하세요!
                                    <div className="no-address-button">
                                        <button className="btn white-login">로그인</button>
                                        <button className="btn purple-address">
                                            <span className="search-address"/>
                                            주소검색
                                        </button>
                                    </div>
                                </div>
                                <div className="yes-address">

                                </div>
                            </div>
                        </div>
                        <div className="gym other-item">
                            <a href=""/>
                        </div>
                        <div className="cart other-item">
                            <a href=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
