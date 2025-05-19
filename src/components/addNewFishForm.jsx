import React from "react";
import { useState, useEffect } from "react";

export default function AddNewFishForm(){
    const [formData, setFormData] = useState({
        name:"",
        species:"",
        size:"",
        color:"",
        reefSafe: null
    })

    return(
        <>
            <h2>Add New Fish</h2>
        </>
    )
}