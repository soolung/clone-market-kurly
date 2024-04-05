import Button from "../../components/Button/Button";
import './Login.scss'
import Check from "../../components/Check/Check";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

export default function Login() {

    const { setUser } = useContext(UserContext);
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
                grade: {
                    grade: "일반",
                    accumulationPercent: 0.001,
                },
                delivery: {
                    address: "경기도 평택시 상서재로5길 15 (평택센트럴자이1단지) 104동 101호",
                    type: "택배배송",
                    more: {
                        recipient: "김한울",
                        phoneNumber: "010-1234-5678",
                        pickUpLocation: "문 앞",
                        commonDoor: "자유 출입 가능",
                        finishedMessageTime: "배송 직후",
                    },
                },
                phoneNumber: "010-1234-5678",
                email: "dev.gimhanul@gmail.com",
            }
            setUser(user);
        } else if (loginInput.id === "sookyoungwoo" && loginInput.password === "sookyoungwoo") {
            const user = {
                name: "우수경",
                grade: {
                    grade: "더퍼플",
                    accumulationPercent: 0.07,
                },
                delivery: {
                    address: "동래버스에서 내려서 갈 수 있는 온천천 근처 오두막집에서 왼쪼긍로 꺾으렴",
                    type: "샛별배송",
                },
                phoneNumber: "010-5678-1234",
                email: "sookyung@wo.o",
                more: {
                    recipient: "우수경",
                    phoneNumber: "010-5678-1234",
                    pickUpLocation: "택배함",
                    commonDoor: "공동현관 비밀번호",
                    finishedMessageTime: "오전 7시",
                },
            }
            setUser(user);
        } else {
            alert("아이디 또는 비밀번호 오류입니다.")
        }
    };

    return (
        <section>
            <div className="section-wrapper">
                <div className="section-inner">
                    <h3 className="title">짭 로그인</h3>

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

                        <Link to="/">
                            <Button
                                color="purple"
                                text="짭 로그인"
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
