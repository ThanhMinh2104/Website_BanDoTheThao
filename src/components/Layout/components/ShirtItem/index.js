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

    const handleQuickAddToCart = (e) => {
  e.stopPropagation(); 
  
  const cartItem = {
    idCloth: window.location.pathname.split('/').pop(), // Extract clubId from URL
    name: shirtName,
    price: parseInt(discountedPrice.replace(/\D/g, "")),
    quantity: 1, 
    image: image2,
    size: "M"
  };
  
  fetch("http://localhost:3001/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Lỗi khi thêm vào giỏ hàng");
      alert("Đã thêm vào giỏ hàng!"); // Success message
    })
    .catch((err) => {
      console.error("Lỗi thêm giỏ hàng:", err);
      alert("Thêm vào giỏ hàng thất bại!"); // Error message
    });
};

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
                    <FontAwesomeIcon 
                        icon={faShoppingCart} 
                        className={cx("add-to-cart-icon")} 
                        onClick={handleQuickAddToCart}
                    />
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
