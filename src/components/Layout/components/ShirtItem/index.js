import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ShirtItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ShirtQuickViewModal from "~/components/ShirtQuickViewModal";

const cx = classNames.bind(styles);

function ShirtItem({ shirtName, originalPrice, discountedPrice, image1, image2, id, stock, price, onAddToCart }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const shirtData = {
        shirtName,
        originalPrice,
        discountedPrice,
        image1,
        image2,
        stock,
        price
    }

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; 
    }

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto"; 
    }

    return (
        <div className={cx("wrapper")}>
            <div
                className={cx("shirt-card")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
               
                <div className={cx("shirt-image")}>
                    <img
                        src={isHovered ? image1 : image2}
                        alt="Manchester City Shirt"
                        className={cx("shirt-img")}
                    />

                    <div className={cx("shirt-details")}>
                        <h3 className={cx("shirt-name")}>
                            {shirtName}
                        </h3>
                        <div className={cx("price-container")}>
                            <span className={cx("original-price")}>{originalPrice}</span>
                            <span className={cx("discounted-price")}>{discountedPrice}</span>
                        </div>
                    </div>
                </div>

                <div className={cx("btn-cart-view")}>
                    <button className={cx("quick-view-btn")} onClick={openModal}>Quick View</button>
                    <FontAwesomeIcon icon = {faShoppingCart} className={cx("add-to-cart-icon")} />
                </div>
            </div>

            <ShirtQuickViewModal
                isOpen={isModalOpen}
                onClose={closeModal}
                product={shirtData}
                onAddToCart={onAddToCart}

            />
        </div>
    );
}

export default ShirtItem;
