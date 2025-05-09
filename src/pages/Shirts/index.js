

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Shirts() {
    const { clubId } = useParams();
    const [shirts, setShirts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/shirts")
            .then((response) => response.json())
            .then((data) => {
                const clubShirts = data[clubId]; // Lấy mảng áo đấu theo clubId
                if (clubShirts) {
                    // Nếu ảnh dùng "~", thay thế bằng đúng đường dẫn từ public/
                    const normalizedShirts = clubShirts.map((shirt) => ({
                        ...shirt,
                        image1: shirt.image1.replace(/^~\/assets/, "/assets"),
                        image2: shirt.image2.replace(/^~\/assets/, "/assets"),
                    }));
                    setShirts(normalizedShirts);
                } else {
                    setShirts([]);
                }
            })
            .catch((error) => {
                console.error("Lỗi khi fetch áo đấu:", error);
                setShirts([]);
            });
    }, [clubId]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("grid")}>
                {shirts.map((item) => (

                    <ShirtItem
                        key={item.id}
                        shirtName={item.shirtName}
                        originalPrice={item.originalPrice}
                        discountedPrice={item.discountedPrice}
                        image1={item.image1}
                        image2={item.image2}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shirts;
