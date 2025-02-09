import React from 'react';
import '../App.css';

export default function WordSearchGrid({ grid }) {
    return (
        <div className="word-search-grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {row.map((letter, colIndex) => (
                        <div key={colIndex} className="grid-cell">
                            {letter}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}