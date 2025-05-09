import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginModal from "~/components/Form/LoginModal";
import CartPopup from "~/components/Popper/CartPopup/CartPopup";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const cartItems = [
        { id: 1, name: "Man City sân khách màu ba 24/25 hàng Thái Lan", quantity: 1 },
        { id: 2, name: "Man City sân khách 24/25 hàng Thái Lan", quantity: 1 },
        { id: 3, name: "Quần áo Manchester City", quantity: 1 },
    ];
    const total = "1,140,000đ";

    const handleViewCart = () => {
        console.log("View Cart clicked");
    };

    const handleCheckout = () => {
        console.log("Checkout clicked");
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
                    <FontAwesomeIcon
                        className={cx("action-icon")}
                        icon={faUser}
                        onClick={() => setShowLoginModal(true)}
                    />
                    <CartPopup
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
                    <li  className={cx("nav-item")}>
                        <Link  to="/shirts/thailand" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ THÁI LAN
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link  to="/shirts/doituyen" className={cx("nav-link")}>
                            ÁO ĐỘI TUYỂN
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link  to="/shirts/clb" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ CLB
                        </Link>
                    </li>
                    <li className={cx("nav-item")}>
                        <Link  to="/shirts/aokhonglogo" className={cx("nav-link")}>
                            ÁO BÓNG ĐÁ KHÔNG LOGO
                        </Link>

                    </li>
                    <li className={cx("nav-item")}>
                        <a href="#" className={cx("nav-link")}>
                            BÓNG ĐÁ
                        </a>
                    </li>
                    <li className={cx("nav-item")}>
                        <a href="#" className={cx("nav-link")}>
                            GYM
                        </a>
                    </li>
                    <li className={cx("nav-item")}>
                        <a href="#" className={cx("nav-link")}>
                            YOGA
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Overlay và nội dung */}
            {showOverlay && (
                <>
                    <div className={cx("overlay")} onClick={() => setShowOverlay(false)}></div>
                    <div className={cx("search-wrapper")}>
                        <input type="text" className={cx("search-input")} placeholder="Tìm kiếm sản phẩm..." />
                        <i className={cx("search-icon")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => {}} />
                        </i>
                    </div>
                </>
            )}

            {/* Modal Login & Logout */}
            <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
        </header>
    );
}

export default Header;
