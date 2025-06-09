import React from "react";
import './AquariumOverview.css';

const FishOverview = ({ fish }) => {
    return (
        <div className="fish-section">
            <h3>Fish Collection</h3>
            <div className="fish-grid">
                {fish.map((fishItem, index) => (
                    <div key={index} className="fish-card">
                        <div className="fish-info">
                            <span className="fish-label">Name:</span>
                            <span className="fish-value">{fishItem.name}</span>
                        </div>
                        <div className="fish-info">
                            <span className="fish-label">Species:</span>
                            <span className="fish-value">{fishItem.species}</span>
                        </div>
                        <div className="fish-info">
                            <span className="fish-label">Size:</span>
                            <span className="fish-value">{fishItem.size}</span>
                        </div>
                        <div className="fish-info">
                            <span className="fish-label">Color:</span>
                            <span className="fish-value" style={{ color: fishItem.color }}>{fishItem.color}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FishOverview;