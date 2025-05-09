import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ShirtQuickViewModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ShirtQuickViewModal({ isOpen, onClose, product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size!");
      return;
    }

    const cartItem = {
      name: product.shirtName,
      price: parseInt(product.discountedPrice.replace(/\D/g, "")), // loại bỏ ký tự ₫
      quantity: count,
      image: product.image1,
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
        alert("Đã thêm vào giỏ hàng!");
        onClose();
        document.body.style.overflow = "auto";
      })
      .catch((err) => {
        console.error("Lỗi thêm giỏ hàng:", err);
        alert("Thêm vào giỏ hàng thất bại!");
      });
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  if (!isOpen || !product) return null;

  return (
    <div className={cx("modal-overlay")} onClick={onClose}>
      <div className={cx("modal-content")} onClick={(e) => e.stopPropagation()}>
        <button className={cx("close-button")} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={cx("modal-body")}>
          <div className={cx("product-images")}>
            <div className={cx("main-image")}>
              <img
                src={activeImage === 0 ? product.image2 : product.image1}
                alt={product.shirtName}
              />
            </div>
            <div className={cx("thumbnail-container")}>
              <div
                className={cx("thumbnail", { active: activeImage === 0 })}
                onClick={() => setActiveImage(0)}
              >
                <img src={product.image2} alt={`${product.shirtName} view 1`} />
              </div>
              <div
                className={cx("thumbnail", { active: activeImage === 1 })}
                onClick={() => setActiveImage(1)}
              >
                <img src={product.image1} alt={`${product.shirtName} view 2`} />
              </div>
            </div>
          </div>

          <div className={cx("product-details")}>
            <h2 className={cx("product-title")}>{product.shirtName}</h2>

            <div className={cx("price")}>
              <span className={cx("original-price")}>{product.originalPrice}</span>
              <span className={cx("discounted-price")}>{product.discountedPrice}</span>
            </div>

            <p className={cx("description")}>{product.shirtName}</p>

            <div className={cx("size-buttons")}>
              {sizes.map((size) => (
                <button
                  key={size}
                  className={cx("size-button", { selected: selectedSize === size })}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className={cx("action-buttons")}>
              <div className={cx("quantity-controls")}>
                <button className={cx("quantity-btn")} onClick={handleDecrease}>
                  -
                </button>
                <span className={cx("quantity")}>{count}</span>
                <button className={cx("quantity-btn")} onClick={handleIncrease}>
                  +
                </button>
              </div>

              <button className={cx("add-to-cart")} onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>

            <span className={cx("receive-badge")}>NHẬN IN TÊN CHỈ 1 BỘ</span>

            <p className={cx("hotline")}>
              TƯ VẤN NGAY{" "}
              <a href="tel:0936777554" className={cx("hotline-link")}>
                HOTLINE: 0936777554
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShirtQuickViewModal;
