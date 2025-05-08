import classNames from "classnames/bind";
import styles from "./LoginModal.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function LoginModal({ isOpen, onClose }) {
    const [isLoginMode, setIsLoginMode] = useState(true);

    if (!isOpen) return null;

    return (
        <>
            <div className={cx("overlay")} onClick={onClose}></div>
            <div className={cx("login-modal")}>
                <div className={cx("tab-container")}>
                    <button className={cx("tab", { active: isLoginMode })} onClick={() => setIsLoginMode(true)}>
                        LOGIN
                    </button>
                    <button className={cx("tab", { active: !isLoginMode })} onClick={() => setIsLoginMode(false)}>
                        SIGN IN
                    </button>
                </div>

                {isLoginMode ? (
                    <>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Username or email address *</label>
                            <input
                                type="text"
                                className={cx("input")}
                                defaultValue="nguyenhotthanhminhhdpetra@gmail.com"
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Password *</label>
                            <input type="password" className={cx("input")} defaultValue="password" />
                        </div>
                        <div className={cx("form-group")}>
                            <button className={cx("button")}>Login</button>
                        </div>
                        <div className={cx("form-group", "checkbox-group")}>
                            <input type="checkbox" id="remember-me" className={cx("checkbox")} />
                            <label htmlFor="remember-me" className={cx("checkbox-label")}>
                                Remember me
                            </label>
                        </div>
                        <a href="#" className={cx("lost-password")}>
                            Lost your password?
                        </a>
                    </>
                ) : (
                    <>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Full Name *</label>
                            <input type="text" className={cx("input")} placeholder="Enter your full name" />
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Email address *</label>
                            <input type="email" className={cx("input")} placeholder="Enter your email" />
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Password *</label>
                            <input type="password" className={cx("input")} placeholder="Create a password" />
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Confirm Password *</label>
                            <input type="password" className={cx("input")} placeholder="Confirm your password" />
                        </div>
                        <div className={cx("form-group")}>
                            <button className={cx("button")}>Sign In</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default LoginModal;
