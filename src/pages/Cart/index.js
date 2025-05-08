import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "~/assests/images";

const cx = classNames.bind(styles);

function Cart() {
    const [selectedSize, setSelectedSize] = useState(null);

    const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    // Care instructions and notes
    const careInstructions = [
        "Không sử dụng chất tẩy",
        "Không sấy khô",
        "Không giặt khô",
        "Ủi với nhiệt độ thấp, dưới 40 độ C",
        "Giặt bằng nước lạnh",
    ];

    const careNotes = [
        "Không ngâm trong nước giặt, xả vải quá lâu hoặc ngâm qua đêm.",
        "Lật ngược mặt bên trong áo và quần khi giặt và ủi.",
    ];

    // Size note
    const sizeNote =
        "Bảng size tư vấn mang tính chất tham khảo dựa trên chiều cao và cân nặng chuẩn của người mẫu mặc trên cơ thể. Để được tư vấn chính xác hơn bạn có thể nhắn tin trực tiếp Sporter để được tư vấn kỹ hơn về bảng size hoặc ghé trực tiếp Sporter để thử size và mua trực tiếp nhé.";

    // Thai Product Details
    const thaiAdvantages = [
        "Chất vải – Chi tiết/Hoạ tiết – Bề mặt vải giống chính hãng.",
        "Thiết kế Bodyfit Form, co giãn và ôm vào cơ thể. Được form được sản xuất theo size Châu Âu.",
        "Sợi vải thấm hút và thoát mồ hôi tốt, giúp trang phục không bị giữ nước, nhẹ hơn và không gây mùi hôi khi tiếp xúc vi khuẩn từ không khí bên ngoài khi chơi thể thao.",
        "Khó phân biệt được giữa hàng Thái Lan S.F và chính hãng.",
    ];

    const thaiDisadvantages = ["Giá sẽ cao hơn các sản phẩm hàng Việt Nam và bản Fan (Fake 1/F1)."];

    // Vietnam Product Details
    const vnAdvantages = [
        "Thiết kế Regular Form, form suông mặc thoải mái và phù hợp nhiều vóc dáng. Form size Châu Á.",
        "Giá thành rẻ hơn hàng Thái Lan, tiết kiệm chi phí.",
        "Độ bền tương xứng với giá tiền, có thể sử dụng lên đến 2 năm.",
        "Các logo được thêu vào, tránh được trường hợp bong tróc.",
        "Chất liệu thun lạnh co giãn 2 chiều, nhưng đã được cải thiện tốt hơn theo thời gian.",
    ];

    const vnDisadvantages = [
        "Sẽ không có độ chính xác 99% như các mẫu hàng Thái Lan hay chính hãng.",
        "Chất liệu thun lạnh sẽ không có sự thoát mồ hôi tốt như hàng Thái Lan hay áo không logo.",
    ];

    return (
        <div className={cx("container")}>
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
                        <button className={cx("quantity-btn")}>-</button>
                        <span className={cx("quantity")}>1</span>
                        <button className={cx("quantity-btn")}>+</button>
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

            {/* Care Instructions */}
            <div className={cx("care-instructions")}>
                <h3 className={cx("care-title")}>Hướng dẫn bảo quản:</h3>
                <ul className={cx("care-list")}>
                    {careInstructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
                <h4 className={cx("care-subtitle")}>Lưu ý:</h4>
                <ul className={cx("care-list")}>
                    {careNotes.map((note, index) => (
                        <li key={index}>{note}</li>
                    ))}
                </ul>
            </div>

            {/* Lookbook and Size Info */}
            <div className={cx("info-section")}>
                <h3 className={cx("info-title")}>Lookbook hình ảnh áo bóng đá đội Man City sân khách 24/25</h3>
                <h4 className={cx("info-subtitle")}>
                    Bảng size tư vấn áo đấu Manchester City sân khách mùa giải 24/25
                </h4>
                <p className={cx("size-note")}>{sizeNote}</p>

                {/* Size Images */}
                <div className={cx("size-images")}>
                    <div className={cx("size-image")}>
                        <img
                            src={images.vnSizeChart}
                            alt="Bảng tư vấn size hàng Việt Nam"
                            className={cx("size-chart")}
                        />
                        <p className={cx("image-caption")}>Bảng tư vấn size hàng Việt Nam</p>
                    </div>
                    <div className={cx("size-image")}>
                        <img
                            src={images.thSizeChart}
                            alt="Bảng tư vấn size hàng Thái Lan"
                            className={cx("size-chart")}
                        />
                        <p className={cx("image-caption")}>Bảng tư vấn size hàng Thái Lan</p>
                    </div>
                </div>
            </div>

            {/* Product Details Section */}
            <div className={cx("product-details-section")}>
                {/* Thai Product Details */}
                <div className={cx("product-details")}>
                    <h3 className={cx("details-title")}>
                        Áo bóng đá Manchester City sân khách mùa giải 24/25 hàng Thái Lan
                    </h3>
                    <p className={cx("details-description")}>
                        Các mẫu áo bóng đá Thái Lan sẽ được sản xuất giống 99% áo chính hãng, phiên bản cầu thủ thi đấu
                        trên sân. Các nhà sản xuất đến từ xứ sở “Chùa Vàng” sẽ mô phỏng 99% dựa trên mẫu Authentic
                        (Adidas) / Jersey Match (Nike), thường được gọi là bản Player, bản Super Fake (S.F).
                    </p>
                    <h4 className={cx("details-subtitle")}>Ưu điểm:</h4>
                    <ul className={cx("details-list")}>
                        {thaiAdvantages.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h4 className={cx("details-subtitle")}>Nhược điểm:</h4>
                    <ul className={cx("details-list")}>
                        {thaiDisadvantages.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Vietnam Product Details */}
                <div className={cx("product-details")}>
                    <h3 className={cx("details-title")}>
                        Áo bóng đá Manchester City sân khách mùa giải 24/25 hàng Việt Nam
                    </h3>
                    <p className={cx("details-description")}>
                        Các sản phẩm trang phục áo đá banh câu lạc bộ được bán nhiều trên thị trường, từ nhiều xưởng uy
                        tín tại Việt Nam. Sporter tin tưởng và chọn giúp bạn những sản phẩm với chất lượng tốt nhất và
                        giống với áo đấu nhất. Các mẫu áo hàng Việt Nam sẽ không có logo của các nhà sản xuất thể thao ở
                        ngực phải (Vì lý do bản quyền hình ảnh).
                    </p>
                    <h4 className={cx("details-subtitle")}>Ưu điểm:</h4>
                    <ul className={cx("details-list")}>
                        {vnAdvantages.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h4 className={cx("details-subtitle")}>Nhược điểm:</h4>
                    <ul className={cx("details-list")}>
                        {vnDisadvantages.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cart;
