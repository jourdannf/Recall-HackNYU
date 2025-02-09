import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WordSearchGrid from '../components/WordSearchGrid';

export default function PuzzlePage() {
    const [puzzle, setPuzzle] = useState([]);
    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchPuzzle = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/game/puzzle');
                setPuzzle(response.data.grid);      // Grid for the puzzle
                setWords(response.data.words);      // List of words to find
            } catch (error) {
                console.error('Error fetching puzzle:', error);
            }
        };
        fetchPuzzle();
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Word Search Puzzle 🧩</h1>
            <WordSearchGrid grid={puzzle} />
            <h3>Find these words:</h3>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
}