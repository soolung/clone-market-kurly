import Button from "../../components/Button/Button";
import './Login.scss'
import Check from "../../components/Check/Check";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Login() {

    const [securityCheck, setSecurityCheck] = useState(true);
    const [loginInput, setLoginInput] = useState({
        id: "",
        password: "",
    });

    const toggleSecurityCheck = () => {
        setSecurityCheck(!securityCheck);
    };

    const changeLoginInput = e => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value,
        });
    };

    const login = () => {
        if (loginInput.id === "gimhanul" && loginInput.password === "gimhanul") {
            const user = {
                name: "김한울",
                numberOfCart: 3,
                grade: "일반",
                delivery: {
                    address: "경기도 평택시 상서재로5길 15 (평택센트럴자이1단지) 104동 101호",
                    type: "택배배송",
                },
            }

            sessionStorage.setItem("currentUser", JSON.stringify(user));
        } else if (loginInput.id === "sookyoungwoo" && loginInput.password === "sookyoungwoo") {
            const user = {
                name: "우수경",
                numberOfCart: 0,
                grade: "더퍼플",
                delivery: {
                    address: "동래버스에서 내려서 갈 수 있는 온천천 근처 오두막집에서 왼쪼긍로 꺾으렴",
                    type: "샛별배송",
                },
            }

            sessionStorage.setItem("currentUser", JSON.stringify(user));
        } else {
            alert("아이디 또는 비밀번호 오류입니다.")
        }
    };

    return (
        <section>
            <div className="section-wrapper">
                <div className="section-inner">
                    <h3 className="title">로그인</h3>

                    <div className="login-box">
                        <input type="text" name="id" className="id" placeholder="아이디를 입력해주세요" onChange={changeLoginInput}/>
                        <input type="password" name="password" className="password" placeholder="비밀번호를 입력해주세요" onChange={changeLoginInput}/>
                        <div className="check-box">
                            <div className="security-check">
                                <Check id="security" willDo={toggleSecurityCheck} isChecked={securityCheck}/>
                                <label htmlFor="security">보안접속</label>
                            </div>
                            <div className="find">
                                <Link to="">
                                    <span>아이디 찾기</span>
                                </Link>
                                <span className="bar"/>
                                <Link to="">
                                    <span>비밀번호 찾기</span>
                                </Link>
                            </div>
                        </div>

                        <Link to="">
                            <Button
                                color="purple"
                                text="로그인"
                                className="login"
                                willDo={login}
                            />
                        </Link>
                        <Link to="">
                            <Button
                                color="white"
                                text="회원가입"
                                className="join"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
