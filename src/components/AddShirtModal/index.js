// New file: AddShirtModal.js
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddShirtModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AddShirtModal({ isOpen, onClose, clubId, onShirtAdded }) {
    const [formData, setFormData] = useState({
        shirtName: "",
        originalPrice: "",
        discountedPrice: "",
        price: "",
        stock: "",
        image1: "",
        image2: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Format data as needed
        const newShirt = {
            ...formData,
            id: `${clubId}${Date.now()}`, // Generate a unique ID
            price: parseInt(formData.price),
            stock: parseInt(formData.stock)
        };
        
        // Send to server
        fetch(`http://localhost:3001/${clubId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newShirt)
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to add shirt");
            return res.json();
        })
        .then(data => {
            onShirtAdded(data); // Update UI with new shirt
            onClose(); // Close modal
            alert("Shirt added successfully!");
        })
        .catch(err => {
            console.error("Error adding shirt:", err);
            alert("Failed to add shirt. Please try again.");
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };
    
    if (!isOpen) return null;
    
    return (
        <div className={cx("modal-overlay")} onClick={onClose}>
            <div className={cx("modal-content")} onClick={(e) => e.stopPropagation()}>
                <button className={cx("close-button")} onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                
                <h2 className={cx("modal-title")}>Add New Shirt</h2>
                
                <form className={cx("shirt-form")} onSubmit={handleSubmit}>
                    <div className={cx("form-group")}>
                        <label htmlFor="shirtName">Shirt Name</label>
                        <input
                            type="text"
                            id="shirtName"
                            name="shirtName"
                            value={formData.shirtName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className={cx("form-row")}>
                        <div className={cx("form-group")}>
                            <label htmlFor="originalPrice">Original Price</label>
                            <input
                                type="text"
                                id="originalPrice"
                                name="originalPrice"
                                value={formData.originalPrice}
                                onChange={handleChange}
                                placeholder="330.000đ"
                                required
                            />
                        </div>
                        
                        <div className={cx("form-group")}>
                            <label htmlFor="discountedPrice">Discounted Price</label>
                            <input
                                type="text"
                                id="discountedPrice"
                                name="discountedPrice"
                                value={formData.discountedPrice}
                                onChange={handleChange}
                                placeholder="280.000đ"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={cx("form-row")}>
                        <div className={cx("form-group")}>
                            <label htmlFor="price">Price (numeric)</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="330000"
                                required
                            />
                        </div>
                        
                        <div className={cx("form-group")}>
                            <label htmlFor="stock">Stock</label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className={cx("form-group")}>
                        <label htmlFor="image1">Image 1 URL</label>
                        <input
                            type="text"
                            id="image1"
                            name="image1"
                            value={formData.image1}
                            onChange={handleChange}
                            placeholder="/assests/images/Shirt/mancity/ao1.jpg"
                            required
                        />
                    </div>
                    
                    <div className={cx("form-group")}>
                        <label htmlFor="image2">Image 2 URL</label>
                        <input
                            type="text"
                            id="image2"
                            name="image2"
                            value={formData.image2}
                            onChange={handleChange}
                            placeholder="/assests/images/Shirt/mancity/ao2.jpg"
                            required
                        />
                    </div>
                    
                    <div className={cx("form-actions")}>
                        <button 
                            type="button" 
                            className={cx("cancel-btn")} 
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className={cx("submit-btn")}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Adding..." : "Add Shirt"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddShirtModal;