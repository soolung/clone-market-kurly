import Button from "../../components/Button/Button";
import './Login.scss'
import Check from "../../components/Check/Check";
import {useState} from "react";

export default function Login() {

    const [securityCheck, setSecurityCheck] = useState(true);

    const toggleSecurityCheck = () => {
        setSecurityCheck(!securityCheck);
    }

    return (
        <section>
            <div className="section-wrapper">
                <div className="section-inner">
                    <h3 className="title">로그인</h3>

                    <div className="login-box">
                        <input type="text" className="id" placeholder="아이디를 입력해주세요"/>
                        <input type="password" className="password" placeholder="비밀번호를 입력해주세요"/>
                        <div className="check-box">
                            <div className="security-check">
                                <Check id="security" willDo={toggleSecurityCheck} isChecked={securityCheck}/>
                                <label htmlFor="security">보안접속</label>
                            </div>
                            <div className="find">
                                <a href="">
                                    <span>아이디 찾기</span>
                                </a>
                                <span className="bar"/>
                                <a href="">
                                    <span>비밀번호 찾기</span>
                                </a>
                            </div>
                        </div>

                        <a href="">
                            <Button
                                color="purple"
                                text="로그인"
                                className="login"
                            />
                        </a>
                        <a href="">
                            <Button
                                color="white"
                                text="회원가입"
                                className="join"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
