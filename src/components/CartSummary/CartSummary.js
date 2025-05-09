import classNames from "classnames/bind";
import styles from "./CartSummary.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function CartSummary({ total, cartItems, onClearCart }) {
    const [mancity, setMancity] = useState([]);
    const [arsenal, setArsenal] = useState([]);
    const [chelsea, setChelsea] = useState([]);
    const [liverpool, setLiverpool] = useState([]);
    const [manutd, setManutd] = useState([]);
    const [atletico, setAtletico] = useState([]);
    const [barcelona, setBarcelona] = useState([]);
    const [realmadrid, setRealmadrid] = useState([]);
    const [bayern, setBayern] = useState([]);
    const [dortmund, setDortmund] = useState([]);
    const [milan, setMilan] = useState([]);
    const [roma, setRoma] = useState([]);
    const [inter, setInter] = useState([]);
    const [juventus, setJuventus] = useState([]);
    const [psg, setPsg] = useState([]);
    const [thailand, setThailand] = useState([]);
    const [doituyen, setDoituyen] = useState([]);
    const [clb, setClb] = useState([]);
    const [aokhonglogo, setAokhonglogo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const refreshData = () => {
        fetch("http://localhost:3001/mancity")
            .then((res) => res.json())
            .then((data) => setMancity(data))
            .catch((error) => console.error("Error fetching mancity:", error));

        fetch("http://localhost:3001/arsenal")
            .then((res) => res.json())
            .then((data) => setArsenal(data))
            .catch((error) => console.error("Error fetching arsenal:", error));

        fetch("http://localhost:3001/chelsea")
            .then((res) => res.json())
            .then((data) => setChelsea(data))
            .catch((error) => console.error("Error fetching chelsea:", error));

        fetch("http://localhost:3001/liverpool")
            .then((res) => res.json())
            .then((data) => setLiverpool(data))
            .catch((error) => console.error("Error fetching liverpool:", error));

        fetch("http://localhost:3001/manutd")
            .then((res) => res.json())
            .then((data) => setManutd(data))
            .catch((error) => console.error("Error fetching manutd:", error));

        fetch("http://localhost:3001/atletico")
            .then((res) => res.json())
            .then((data) => setAtletico(data))
            .catch((error) => console.error("Error fetching atletico:", error));

        fetch("http://localhost:3001/barcelona")
            .then((res) => res.json())
            .then((data) => setBarcelona(data))
            .catch((error) => console.error("Error fetching barcelona:", error));

        fetch("http://localhost:3001/realmadrid")
            .then((res) => res.json())
            .then((data) => setRealmadrid(data))
            .catch((error) => console.error("Error fetching realmadrid:", error));

        fetch("http://localhost:3001/bayern")
            .then((res) => res.json())
            .then((data) => setBayern(data))
            .catch((error) => console.error("Error fetching bayern:", error));

        fetch("http://localhost:3001/dortmund")
            .then((res) => res.json())
            .then((data) => setDortmund(data))
            .catch((error) => console.error("Error fetching dortmund:", error));

        fetch("http://localhost:3001/milan")
            .then((res) => res.json())
            .then((data) => setMilan(data))
            .catch((error) => console.error("Error fetching milan:", error));

        fetch("http://localhost:3001/roma")
            .then((res) => res.json())
            .then((data) => setRoma(data))
            .catch((error) => console.error("Error fetching roma:", error));

        fetch("http://localhost:3001/inter")
            .then((res) => res.json())
            .then((data) => setInter(data))
            .catch((error) => console.error("Error fetching inter:", error));

        fetch("http://localhost:3001/juventus")
            .then((res) => res.json())
            .then((data) => setJuventus(data))
            .catch((error) => console.error("Error fetching juventus:", error));

        fetch("http://localhost:3001/psg")
            .then((res) => res.json())
            .then((data) => setPsg(data))
            .catch((error) => console.error("Error fetching psg:", error));

        fetch("http://localhost:3001/thailand")
            .then((res) => res.json())
            .then((data) => setThailand(data))
            .catch((error) => console.error("Error fetching thailand:", error));

        fetch("http://localhost:3001/doituyen")
            .then((res) => res.json())
            .then((data) => setDoituyen(data))
            .catch((error) => console.error("Error fetching doituyen:", error));

        fetch("http://localhost:3001/clb")
            .then((res) => res.json())
            .then((data) => setClb(data))
            .catch((error) => console.error("Error fetching clb:", error));

        fetch("http://localhost:3001/aokhonglogo")
            .then((res) => res.json())
            .then((data) => setAokhonglogo(data))
            .catch((error) => console.error("Error fetching aokhonglogo:", error));
    };

    useEffect(() => {
        refreshData();
    }, []);

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;
        setIsLoading(true);

        const allShirtsData = {
            mancity,
            arsenal,
            chelsea,
            liverpool,
            manutd,
            atletico,
            barcelona,
            realmadrid,
            bayern,
            dortmund,
            milan,
            roma,
            inter,
            juventus,
            psg,
            thailand,
            doituyen,
            clb,
            aokhonglogo,
        };

        const updatePromises = cartItems.map(async (cartItem) => {
            const { idCloth, shirtName, quantity } = cartItem;

            const clothList = allShirtsData[idCloth?.toLowerCase()];
            if (!clothList) return;

            const matchedShirt = clothList.find((shirt) => shirt.shirtName === shirtName);
            if (!matchedShirt) return;

            const updatedStock = matchedShirt.stock - quantity;
            if (updatedStock < 0) {
                console.warn(`Không đủ hàng cho: ${shirtName}`);
                return;
            }

            try {
                const response = await fetch(`http://localhost:3001/${idCloth}/${matchedShirt.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...matchedShirt, stock: updatedStock }),
                });

                if (!response.ok) {
                    console.error(`Cập nhật thất bại cho: ${shirtName}`);
                }
            } catch (error) {
                console.error(`Lỗi khi cập nhật ${shirtName}:`, error);
            }
        });

        await Promise.all(updatePromises);

        const deletePromises = cartItems.map((item) =>
            fetch(`http://localhost:3001/carts/${item.id}`, {
                method: "DELETE",
            }),
        );
        onClearCart();
        refreshData();

        setIsLoading(false);
    };

    return (
        <div className={cx("cart-summary")}>
            <h3>CART TOTALS</h3>
            <div className={cx("summary-row")}>
                <span>Subtotal</span>
                <span>{total.toLocaleString()}đ</span>
            </div>
            <div className={cx("summary-row")}>
                <span>Total</span>
                <span>{total.toLocaleString()}đ</span>
            </div>
            <button className={cx("checkout-btn")} onClick={handleCheckout} disabled={isLoading}>
                {isLoading ? "Processing..." : "PROCEED TO CHECKOUT"}
            </button>

            <div className={cx("coupon-section")}>
                <label>Coupon</label>
                <input type="text" placeholder="Coupon code" />
                <button>Apply coupon</button>
            </div>
        </div>
    );
}

export default CartSummary;
