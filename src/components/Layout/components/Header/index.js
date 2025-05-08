import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assests/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginModal from "~/components/Form/LoginModal";

const cx = classNames.bind(styles);

function Header() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div></div>
                <div className={cx("logo")}>
                    <img className={cx("logo-image")} src={images.logo} alt="logo"></img>
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
                    <div className={cx("cart")}>
                        <span className={cx("cart-total")}>0đ</span>
                        <FontAwesomeIcon className={cx("cart-icon")} icon={faCartShopping} />
                    </div>
                </div>
            </div>

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
