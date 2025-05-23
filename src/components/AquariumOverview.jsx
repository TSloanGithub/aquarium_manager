import React, { useState, useEffect } from "react";
import AddNewFishForm from './addNewFishForm';
import './AquariumOverview.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
};

const AquariumOverview = () => {
    const [aquarium, setAquarium] = useState({
        name: "",
        size: "",
        temperature: "",
        fish: [],
        coral: []
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
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
            coral: [
                {
                    name: "Zoa",
                    color: "Red",
                    parRange: "20-30",
                },
            ],
        };
        setAquarium(initializeAquarium);
    }, []);

    const addNewFish = async (newFish) => {
        try {
            const updatedAquarium = {
                ...aquarium,
                fish: [...aquarium.fish, newFish]
            };
            setAquarium(updatedAquarium);
        } catch (error) {
            console.error('Error adding fish:', error);
        }
    }

    return (
        <div className="aquarium-container">
            <div className="aquarium-header">
                <h2 className="aquarium-title">Aquarium Overview</h2>
                <div className="aquarium-info">
                    <div className="info-item">
                        <span className="info-label">Name:</span>
                        <span className="info-value">{aquarium.name}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Size:</span>
                        <span className="info-value">{aquarium.size}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Temperature:</span>
                        <span className="info-value">{aquarium.temperature}</span>
                    </div>
                </div>
            </div>
            
            {aquarium.fish && aquarium.fish.length > 0 && (
                <div className="fish-section">
                    <h3>Fish Collection</h3>
                    <div className="fish-grid">
                        {aquarium.fish.map((fish, index) => (
                            <div key={index} className="fish-card">
                                <div className="fish-info">
                                    <span className="fish-label">Name:</span>
                                    <span className="fish-value">{fish.name}</span>
                                </div>
                                <div className="fish-info">
                                    <span className="fish-label">Species:</span>
                                    <span className="fish-value">{fish.species}</span>
                                </div>
                                <div className="fish-info">
                                    <span className="fish-label">Size:</span>
                                    <span className="fish-value">{fish.size}</span>
                                </div>
                                <div className="fish-info">
                                    <span className="fish-label">Color:</span>
                                    <span className="fish-value" style={{ color: fish.color }}>{fish.color}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {aquarium.coral && aquarium.coral.length > 0 && (
                <div className="coral-section">
                    <h3>Coral Collection</h3>
                    <div className="coral-grid">
                        {aquarium.coral.map((coral, index) => (
                            <div key={index} className="coral-card">
                                <div className="coral-info">
                                    <span className="coral-label">Name:</span>
                                    <span className="coral-value">{coral.name}</span>
                                </div>
                                <div className="coral-info">
                                    <span className="coral-label">Color:</span>
                                    <span className="coral-value" style={{ color: coral.color }}>{coral.color}</span>
                                </div>
                                <div className="coral-info">
                                    <span className="coral-label">PAR Range:</span>
                                    <span className="coral-value">{coral.parRange}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <button className="add-fish-button" onClick={() => setIsModalOpen(true)}>
                Add New Fish
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <AddNewFishForm 
                    onAddFish={addNewFish}
                    onClose={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default AquariumOverview;