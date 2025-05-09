import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import CartTableItem from "~/components/CartTableItem/CartTableItem";
import CartSummary from "~/components/CartSummary/CartSummary";

const cx = classNames.bind(styles);

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/carts")
            .then((res) => res.json())
            .then((data) => setCartItems(data));
    }, []);

    const updateCartItem = async (id, newQuantity) => {
        try {
            const item = cartItems.find((item) => item.id === id);
            if (!item || newQuantity < 1) return;

            const response = await fetch(`http://localhost:3001/carts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...item, quantity: newQuantity }),
            });

            if (response.ok) {
                const updatedItem = await response.json();
                setCartItems((prevItems) => prevItems.map((i) => (i.id === id ? updatedItem : i)));
            } else {
                console.error("Failed to update quantity");
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    // Fuction Logic
    const handleIncrease = (id) => {
        const item = cartItems.find((item) => item.id === id);
        if (item) {
            updateCartItem(id, item.quantity + 1);
        }
    };

    const handleDecrease = (id) => {
        const item = cartItems.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            updateCartItem(id, item.quantity - 1);
        }
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
            <CartSummary total={total} cartItems={cartItems} onClearCart={() => setCartItems([])} />
        </div>
    );
}

export default Cart;
