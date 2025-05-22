import React, { useState, useEffect } from "react";
import AddNewFishForm from './addNewFishForm';

export default function AquariumOverview() {
    const [aquarium, setAquarium] = useState({
        name: "",
        size: "",
        temperature: "",
        fish: []
    });

    useEffect(() => {
        // This will eventually be replaced with an API call
        const initializeAquarium = {
            name: "Aquarium 1",
            size: "1000 gallons",
            temperature: "72 degrees",
            fish: [
                {
                    name: "Fish 1",
                    species: "Fish Species 1",
                    size: "10 inches",
                    color: "Red",
                },
                {
                    name: "Fish 2",
                    species: "Fish Species 2",
                    size: "12 inches",
                    color: "Blue",
                },
            ],
            coral:[
                {
                    name: "Zoa",
                    color: "Red",
                    parRange: "20-30",
                },
            ],
        };
        setAquarium(initializeAquarium);
    }, []); // Empty dependency array means this runs once on mount

    const addNewFish = async (newFish) => {
        try {
            // In the future, this will be an API call
            // For now, we'll just update the state
            const updatedAquarium = {
                ...aquarium,
                fish: [...aquarium.fish, newFish]
            };
            setAquarium(updatedAquarium);

            // When you're ready to implement the API call:
            // await fetch('/api/fish', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(newFish)
            // });
        } catch (error) {
            console.error('Error adding fish:', error);
            // You might want to add error handling UI here
        }
    }

    return (
        <>
            <h2>Aquarium Overview</h2>
            <AddNewFishForm onAddFish={addNewFish} />
        </>
    )
}