import classNames from "classnames/bind";
import styles from "./CartPopup.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import Tippy from "@tippyjs/react/headless";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function CartPopup({ cartItems, total, onViewCart, onCheckout, children }) {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Man City sân khách màu ba 24/25 hàng Thái Lan",
            quantity: 1,
            price: 380000,
            image: "https://www.sporter.vn/wp-content/uploads/2017/06/Vn-man-city-xanh-bien-2024-2.jpg",
        },
        {
            id: 2,
            name: "Man City sân khách 24/25 hàng Thái Lan",
            quantity: 2,
            price: 420000,
            image: "https://www.sporter.vn/wp-content/uploads/2017/06/VN-man-city-do-2.jpg",
        },
        {
            id: 3,
            name: "Quần áo Manchester City",
            quantity: 1,
            price: 340000,
            image: "data:image/jpeg;base64,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",
        },
    ]);

    const handleRemoveItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const cartTotal = total || "1,140,000đ";
    const navigate = useNavigate();
    return (
        <Tippy
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx("cart-popup")} tabIndex="-1" {...attrs}>
                    <div className={cx("cart-content")}>
                        {items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onRemove={handleRemoveItem}
                                onClick={() => navigate("/shirtdetail")}
                            />
                        ))}

                        <div className={cx("subtotal")}>Subtotal: {cartTotal}</div>
                        <button className={cx("view-cart")} onClick={onViewCart}>
                            VIEW CART
                        </button>
                        <button className={cx("checkout")} onClick={onCheckout}>
                            CHECKOUT
                        </button>
                    </div>
                </div>
            )}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default CartPopup;
