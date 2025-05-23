import React from "react";
import { useState, useEffect } from "react";
import './AddNewFishForm.css';

export default function AddNewFishForm({ onAddFish, onClose }) {
    const [formData, setFormData] = useState({
        name:"",
        species:"",
        size:"",
        color:"",
        reefSafe: null
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.reefSafe === null) {
            alert("Please select a reef safe option");
            return;
        }
        
        // Clear the form after successful submission
        setFormData({
            name: "",
            species: "",
            size: "",
            color: "",
            reefSafe: "Select Reef Safe"
        });

        // Call the parent's callback function
        if (onAddFish) {
            onAddFish(formData);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="fish-form">
                <h2 className="form-title">Add New Fish</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({
                            ...formData,
                            name: e.target.value
                        })}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="species">Species:</label>
                    <input
                        type="text"
                        id="species"
                        name="species"
                        value={formData.species}
                        onChange={(e) => setFormData({
                            ...formData,
                            species: e.target.value
                        })}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size (inches):</label>
                    <input
                        type="number"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={(e) => setFormData({
                            ...formData,
                            size: e.target.value
                        })}
                        className="form-input"
                        required
                        min="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={(e) => setFormData({
                            ...formData,
                            color: e.target.value
                        })}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reefSafe">Reef Safe:</label>
                    <select
                        id="reefSafe"
                        name="reefSafe"
                        value={formData.reefSafe}
                        onChange={(e) => setFormData({
                            ...formData,
                            reefSafe: e.target.value
                        })}
                        className="form-select"
                        required
                    >
                        <option value="">Select Reef Safe</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit" className="submit-button">Add Fish</button>
                    <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </>
    )
}