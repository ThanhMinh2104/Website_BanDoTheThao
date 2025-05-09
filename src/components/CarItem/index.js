import classNames from "classnames/bind";
import styles from "./CartItem.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "~/assests/images";
import Slider from "react-slick";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function CartItem() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [count, setCount] = useState(1);
    const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

    const handleIncrease = () => {
        setCount((pre) => pre + 1);
    };

    const handleDecrease = () => {
        setCount((pre) => (pre > 1 ? pre - 1 : 1));
    };

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className={cx("product-card")}>
            {/* Image Slider */}
            <div className={cx("image-slider")}>
                <Slider {...sliderSettings}>
                    <div className={cx("slide")}>
                        <img src={images.mancity1} alt="Man City Away Jersey 24/25" className={cx("main-image")} />
                    </div>
                    <div className={cx("slide")}>
                        <img src={images.mancity10} alt="Man City Away Jersey Back" className={cx("main-image")} />
                    </div>
                </Slider>
            </div>

            {/* Product Details */}
            <div className={cx("details-section")}>
                {/* Discount Badge */}
                <span className={cx("discount-badge")}>-15%</span>

                {/* Product Title */}
                <h2 className={cx("product-title")}>Áo bóng đá Man City sân khách 24/25 hàng Thái Lan</h2>

                {/* Prices */}
                <div className={cx("price")}>
                    <span className={cx("original-price")}>330,000đ</span>
                    <span className={cx("discounted-price")}>280,000đ</span>
                </div>

                {/* Description */}
                <p className={cx("description")}>Chi tiết Áo thi đấu Man City sân khách 23/24</p>
                <p className={cx("description")}>Áo Man City sân khách 24/25 hàng Thái Lan</p>

                {/* Size Selection Buttons */}
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

                {/* Add to Cart Button */}
                <div className={cx("action-buttons")}>
                    <button className={cx("quantity-btn")} onClick={handleDecrease}>
                        -
                    </button>
                    <span className={cx("quantity")}>{count}</span>
                    <button className={cx("quantity-btn")} onClick={handleIncrease}>
                        +
                    </button>

                    <button className={cx("add-to-cart")}>ADD TO CART</button>
                </div>

                {/* Receive Badge */}
                <span className={cx("receive-badge")}>NHẬN IN LÊU CHỈ 1 BỘ</span>

                {/* Hotline */}
                <p className={cx("hotline")}>
                    TƯ VẤN NGAY{" "}
                    <a href="tel:0936777554" className={cx("hotline-link")}>
                        HOTLINE: 0936777554
                    </a>
                </p>
            </div>
        </div>
    );
}
