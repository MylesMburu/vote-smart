'use client'
import { useEffect, useState } from 'react';

export default function Results() {
    
    const [results, setResults] = useState([]);

    const sortedResults = [...results].sort((a, b) => b.votes - a.votes);

    // Get the top 3 results
    const topThree = sortedResults.slice(0, 3);

    // Define podium heights
    const heights = {
        0: 'h-32', // First place
        1: 'h-40', // Second place
        2: 'h-24', // Third place
    };

    useEffect(() => {
        // Fetch vote counts from the database
        // Placeholder logic
        setResults([{ team: 'Team Alpha', votes: 10 }, { team: 'Team Beta', votes: 7 }, { team: 'Team Gamma', votes: 11 }, { team: 'Team d', votes: 4 }, ]); // Replace with actual API call
    }, []);

    return (
        <div className="container flex justify-center items-center flex-col gap-5 mx-auto p-4">
            <h1 className='text-2xl font-bold'> FINAL RESULTS</h1>

            <div className="flex justify-center items-end pb-10 space-x-4">
            {topThree.map((result, index) => (
                <div key={index} className={`flex flex-col items-center ${heights[index]} bg-gray-300 w-24 rounded-md p-2`}>
                    <span className="text-sm font-bold">{result.team}</span>
                    <span className="text-xs">{result.votes} votes</span>
                    <div className={`text-lg ${index === 0 ? 'text-gold' : index === 1 ? 'text-silver' : 'text-bronze'}`}>
                        #{index + 1}
                    </div>
                </div>
            ))}
        </div>

            <ul>
                {results.map((result, index) => (
                    <li key={index} className="bg-white text-black shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-96">
                        <span className="text-gray-700 text-sm font-bold">{result.team}</span>
                        : 
                        <span classname="text-gray-700 text-sm font-bold"> {result.votes} votes</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
