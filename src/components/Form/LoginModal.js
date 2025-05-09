import classNames from "classnames/bind";
import styles from "./LoginModal.module.scss";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function LoginModal({ isOpen, onClose, onSuccess }) {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formValid, setFormValid] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailBlur = () => {
        if (!email) {
            setEmailError("Email or username is required!");
        } else if (isLoginMode && !validateEmail(email)) {
            if (email.includes("@")) {
                setEmailError("Invalid email format!");
            } else {
                setEmailError("");
            }
        } else if (!isLoginMode && !validateEmail(email)) {
            setEmailError("Invalid email format!");
        } else {
            setEmailError("");
        }
    };

    // Kiểm tra form hợp lệ
    useEffect(() => {
        if (isLoginMode) {
            const isEmailValid = email && (!email.includes("@") || validateEmail(email));
            const isPasswordValid = password.length >= 6;
            setFormValid(isEmailValid && isPasswordValid && !emailError);
        } else {
            const isFullNameValid = fullName.trim().length > 0;
            const isEmailValid = validateEmail(email);
            const isPasswordValid = password.length >= 6;
            const isConfirmPasswordValid = confirmPassword === password && confirmPassword.length >= 6;
            setFormValid(isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && !emailError);
        }
    }, [isLoginMode, email, password, fullName, confirmPassword, emailError]);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3001/users");
        const users = await response.json();
        const userFound = users.find(
            (u) => (u.emailAddress === email || u.fullName === email) && u.password === password,
        );
        if (userFound) {
            onSuccess(userFound);
            setEmail("");
            setPassword("");
            setError("");
            onClose();
        } else {
            setError("Invalid email/username or password!");
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        const newUser = { id: Date.now(), fullName, email, password, username: email };
        const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });
        if (response.ok) {
            const createdUser = await response.json();
            onSuccess(createdUser);
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError("");
            onClose();
        } else {
            setError("Signup failed!");
        }
    };

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
                    <form onSubmit={handleLogin}>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Username or email address *</label>
                            <input
                                type="text"
                                className={cx("input", { "input-error": emailError })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                            />
                            {emailError && <p className={cx("error")}>{emailError}</p>}
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Password *</label>
                            <input
                                type="password"
                                className={cx("input")}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <button className={cx("button", { active: formValid })} type="submit" disabled={!formValid}>
                                Login
                            </button>
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
                        {error && <p className={cx("error")}>{error}</p>}
                    </form>
                ) : (
                    <form onSubmit={handleSignup}>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Full Name *</label>
                            <input
                                type="text"
                                className={cx("input")}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Email address *</label>
                            <input
                                type="email"
                                className={cx("input", { "input-error": emailError })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                                placeholder="Enter your email"
                            />
                            {emailError && <p className={cx("error")}>{emailError}</p>}
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Password *</label>
                            <input
                                type="password"
                                className={cx("input")}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a password"
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <label className={cx("label")}>Confirm Password *</label>
                            <input
                                type="password"
                                className={cx("input")}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                            />
                        </div>
                        <div className={cx("form-group")}>
                            <button className={cx("button", { active: formValid })} type="submit" disabled={!formValid}>
                                Sign In
                            </button>
                        </div>
                        {error && <p className={cx("error")}>{error}</p>}
                    </form>
                )}
            </div>
        </>
    );
}

export default LoginModal;
