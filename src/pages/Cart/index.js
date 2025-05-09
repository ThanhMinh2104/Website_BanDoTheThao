import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import CartTableItem from "~/components/CartTableItem";
import CartSummary from "~/components/CartSummary";

const cx = classNames.bind(styles);

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/carts")
            .then((res) => res.json())
            .then((data) => setCartItems(data));
    }, []);

    const handleIncrease = (id) => {
        setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    const handleDecrease = (id) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
        );
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={cx("cart-container")}>
            <h1>SHOPPING CART</h1>
            <table className={cx("cart-table")}>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <CartTableItem
                            key={item.id}
                            item={item}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                        />
                    ))}
                </tbody>
            </table>
            <CartSummary total={total} />
        </div>
    );
}

export default Cart;
