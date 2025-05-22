import React from "react";
import { useState, useEffect } from "react";

export default function AddNewFishForm({ onAddFish }) {
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
            reefSafe: null
        });

        // Call the parent's callback function
        if (onAddFish) {
            onAddFish(formData);
        }
    }

    return(
        <>
            <h2>Add New Fish</h2>
            <form onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({
                    ...formData,
                    name: e.target.value
                })}
                />
                <label>Species:</label>
                <input
                type="text"
                name="species"
                value={formData.species}
                onChange={(e) => setFormData({
                    ...formData,
                    species: e.target.value
                })}
                />
                <label>Size:</label>
                <input
                type="number"
                name="size"
                value={formData.size}
                onChange={(e) => setFormData({
                    ...formData,
                    size: e.target.value
                })}
                />
                <label>Color:</label>
                <input
                type="text"
                name="color"
                value={formData.color}
                onChange={(e) => setFormData({
                    ...formData,
                    color: e.target.value
                })}
                />
                <label>Reef Safe:</label>
                <select
                name="reefSafe"
                value={formData.reefSafe}
                onChange={(e) => setFormData({
                    ...formData,
                    reefSafe: e.target.value
                })}
                >
                    <option value="">Select Reef Safe</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <button type="submit">Add Fish</button>
            </form> 
        </>
    )
}