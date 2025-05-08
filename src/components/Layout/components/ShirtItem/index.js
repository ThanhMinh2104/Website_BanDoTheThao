import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ShirtItem.module.scss";
import ao1 from "~/assests/images/Shirt/mancity/ao1.jpg";
import ao2 from "~/assests/images/Shirt/mancity/ao2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ShirtItem() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <div
                className={cx("shirt-card")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
               
                <div className={cx("shirt-image")}>
                    <img
                        src={isHovered ? ao2 : ao1}
                        alt="Manchester City Shirt"
                        className={cx("shirt-img")}
                    />

                    <div className={cx("shirt-details")}>
                        <h3 className={cx("shirt-name")}>
                            Quần áo Manchester City xanh sân nhà 24/25
                        </h3>
                        <div className={cx("price-container")}>
                            <span className={cx("original-price")}>139.000đ</span>
                            <span className={cx("discounted-price")}>100.000đ</span>
                        </div>
                    </div>
                </div>

                <div className={cx("btn-cart-view")}>
                    <button className={cx("quick-view-btn")}>Quick View</button>
                    <FontAwesomeIcon icon = {faShoppingCart} className={cx("add-to-cart-icon")} />
                </div>
            </div>
        </div>
    );
}

export default ShirtItem;
