import classNames from "classnames/bind";
import styles from "./CartPopup.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import Tippy from "@tippyjs/react/headless";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function CartPopup({ cartItems, setItems, total, onViewCart, onCheckout, children }) {
    const handleRemoveItem = (id) => {
        setItems(cartItems.filter((item) => item.id !== id));
    };

    const cartTotal =
        !cartItems || cartItems.length === 0 ? 0 : cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const navigate = useNavigate();
    return (
        <Tippy
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx("cart-popup")} tabIndex="-1" {...attrs}>
                    <div className={cx("cart-content")}>
                        {cartItems &&
                            cartItems.map((item) => (
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
                    </div>
                </div>
            )}
        >
            <div>{children}</div>
        </Tippy>
    );
}

export default CartPopup;
