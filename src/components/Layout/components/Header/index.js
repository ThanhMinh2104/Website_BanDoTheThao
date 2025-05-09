import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LoginModal from "~/components/Form/LoginModal";
import CartPopup from "~/components/Popper/CartPopup/CartPopup";
import { Link, useNavigate } from "react-router-dom";

import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);

function Header() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [cartItems, setCartItems] = useState();

    const getLastName = (fullName) => {
        if (!fullName) return "";
        const nameParts = fullName.trim().split(" ");
        return nameParts[nameParts.length - 1];
    };

    useEffect(() => {
        fetch("http://localhost:3001/carts")
            .then((res) => res.json())
            .then((data) => setCartItems(data));
    }, [cartItems]);

    const total = "1,140,000đ";

    const navigate = useNavigate();
    const handleViewCart = () => {
        navigate("/cart");
    };

    const handleCheckout = () => {
        console.log("Checkout clicked");
    };

    const handleSuccess = (user) => {
        setCurrentUser(user);
    };

    const handleLogout = () => {
        setCurrentUser(null);
        console.log("Logged out");
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div></div>
                <div className={cx("logo")}>
                    <img className={cx("logo-image")} src={images.logo} alt="logo" />
                </div>
                <div className={cx("actions")}>
                    <FontAwesomeIcon
                        className={cx("action-icon")}
                        icon={faMagnifyingGlass}
                        onClick={() => setShowOverlay(true)}
                    />
                    <Tippy
                        placement="bottom"
                        interactive
                        trigger="mouseenter"
                        render={(attrs) =>
                            currentUser ? (
                                <div className={cx("logout-tippy")} tabIndex="-1" {...attrs}>
                                    <div className={cx("logout-content")}>
                                        <button className={cx("logout-button")} onClick={handleLogout}>
                                            Logout
                                        </button>
                                        <FontAwesomeIcon icon={faSignOut} />
                                    </div>
                                </div>
                            ) : null
                        }
                    >
                        <div className={cx("user-wrapper")}>
                            <FontAwesomeIcon
                                className={cx("action-icon", currentUser ? "user" : undefined)}
                                icon={faUser}
                                onClick={() => !currentUser && setShowLoginModal(true)}
                            />
                            {currentUser && <span>{getLastName(currentUser.fullName)}</span>}
                        </div>
                    </Tippy>

                    <CartPopup
                        setItems={setCartItems}
                        cartItems={cartItems}
                        total={total}
                        onViewCart={handleViewCart}
                        onCheckout={handleCheckout}
                    >
                        <div className={cx("cart")}>
                            <FontAwesomeIcon className={cx("cart-icon")} icon={faCartShopping} />
                        </div>
                    </CartPopup>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className={cx("nav-bar")}>
                <ul className={cx("nav-list")}>
                    <li className={cx("nav-item")}>
                        <Link to="/thailand" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ THÁI LAN
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link to="/doituyen" className={cx("nav-link")}>
                            ÁO ĐỘI TUYỂN
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link to="/clb" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ CLB
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link to="/aokhonglogo" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ KHÔNG LOGO
                        </Link>
                    </li>
                </ul>
            </nav>

            {showOverlay && (
                <>
                    <div className={cx("overlay")} onClick={() => setShowOverlay(false)}></div>
                    <div className={cx("search-wrapper")}>
                        <input type="text" className={cx("search-input")} placeholder="Tìm kiếm sản phẩm..." />
                        <i className={cx("search-icon")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </i>
                    </div>
                </>
            )}

            <LoginModal
                isOpen={!currentUser && showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onSuccess={handleSuccess}
            />
        </header>
    );
}

export default Header;
