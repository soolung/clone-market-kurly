import './Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div id='footer'>
                <div className='footer-top'>
                    <div className='inner_footer'>
                        <div className='footer_cc'>
                            <h2 className='tit_cc'>고객행복센터</h2>
                            <div className='cc_view cc_call'>
                                <h3 class="tit_num">
                                    <span className='phonenum'>1644-1107</span>
                                </h3>
                                <dl className='list'>
                                    <dt>365고객센터</dt>
                                    <dd>오전 7시 - 오후 7시</dd>
                                </dl>
                            </div>
                            <div className='cc_view cc_kakao'>
                                <h3>
                                    <a className='tit'>카카오톡 문의</a>
                                </h3>
                                <dl className='list'>
                                    <dt>365고객센터</dt>
                                    <dd>오전 7시 - 오후 7시</dd>
                                </dl>
                            </div>
                            <div className='cc_view cc_qna'>
                                <h3>
                                    <a className='tit'>1:1 문의</a>
                                </h3>
                                <dl className='list'>
                                    <dt>24시간 접수 가능</dt>
                                    <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
                                </dl>
                            </div>
                            <div className='cc_view cc_bulkorder'>
                                <h3>
                                    <a className='tit'>대량주문 문의</a>
                                </h3>
                                <p className='txt'>비회원의 겨우 메일로 문의 바랍니다.</p>
                            </div>
                        </div>
                        <div className='company'>
                            <ul className='list'>
                                <li>컬리소개</li>
                                <li>컬리소개영상</li>
                                <li>인재채용</li>
                                <li>이용약관</li>
                                <li>개인정보처리방침</li>
                                <li>이용안내</li>
                            </ul>
                            <div className='footer_information'>
                                <p>법인명 (상호) : 주식회사 컬리 <span className='bar'>I</span> 사업자등록번호 : 261-81-23567 <a>사업자정보 확인</a><br/></p>
                                <p>통신판매업 : 제 2018-서울강남-01646 호 <span className='bar'>I</span> 개인정보보호책임자 : 이원준<br/></p>
                                <p>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <span className='bar'>I</span> 대표이사 : 김슬아<br/></p>
                                <p>입점문의 : <a>입점문의하기</a> <span className='bar'>I</span> 마케팅제휴 : <a>business@kurlycorp.com</a><br/></p>
                                <p>채용문의 : <a>recruit@kurlycorp.com</a><br/></p>
                                <p>팩스: 070 - 7500 - 6098 I 이메일 : <a>help@kurlycorp.com</a><br/></p>
                                <p>대량주문 문의 : <a>kurlygift@kurlycorp.com</a><br/></p>
                            </div>
                            <ul className='list_sns'>
                                <li>
                                    <a href="https://www.instagram.com/marketkurly/" className='link_sns' target='_blank' alt="마켓컬리 인스타 바로가기">
                                        <img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/marketkurly" className='link_sns' target='_blank' alt="마켓컬리 페이스북 바로가기">
                                        <img src="https://res.kurly.com/pc/ico/1810/ico_fb.png"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://blog.naver.com/marketkurly" className='link_sns' target='_blank' alt="마켓컬리 블로그 바로가기">
                                        <img src="https://res.kurly.com/pc/ico/1810/ico_blog.png"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://m.post.naver.com/marketkurly" className='link_sns' target='_blank' alt="마켓컬리 네이버 포스터 바로가기">
                                        <img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg" className='link_sns' target='_blank' alt="마켓컬리 유튜브 바로가기">
                                        <img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer_link'>
                        <div className='all_link'>
                            
                            <div className='mark'> 
                                <img src="https://res.kurly.com/kurly/logo/isms_220310.png" className='logo'></img>
                                <a className='txt'>
                                    [인증범위]마켓컬리 쇼핑몰 서비스 개발·운영
                                    <br/>
                                    (심사받지 않은 물리적 인프라 제외)
                                    <br/>
                                    [유효기간] 2022.01.19 ~ 2025.01.08
                                </a>
                            </div>
                            <div className='mark'>
                                <img src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png" className='logo'></img>
                                <a className='txt'>
                                    개인정보보호 우수 웹사이트 ·
                                    <br/>
                                    개인정보처리시스템인증 (ePRIVACYPLUS)
                                </a>
                            </div>
                            <div className='mark_plus'>
                                <img src="https://res.kurly.com/pc/service/main/2009/logo_payments.png" className='logo'></img>
                                <a className='txt'>
                                    고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
                                    <br/>
                                    토스 페이먼츠 구매안정(에스크로) 서비스를 이용하실 수 있습니다.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_clause'>
                    <p className='txt'>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
                    <p className='txt'>마켓플레이스(오픈마켓)상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문,품질,교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
                    <p className='txt_2'>© KURLY CORP.ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    )
}