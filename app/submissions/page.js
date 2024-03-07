'use client'

import { useState, useEffect } from 'react';

const Submissions = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        // Fetch teams and their projects. This is sample data.
        // In a real application, replace this with an API call.
        const sampleTeams = [
            { id: 1, name: 'Team Alpha', project: 'Project Alpha Description' },
            { id: 2, name: 'Team Beta', project: 'Project Beta Description' },
            { id: 3, name: 'Team Gamma', project: 'Project Gamma Description' },
            // ... more teams
        ];
        setTeams(sampleTeams);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-3xl font-bold my-6">Hackathon Team Submissions</h1>
            <div className="flex justify-center items-center flex-col md:grid md:grid-cols-2 gap-4 text-black">
                {teams.map((team) => (
                    <div key={team.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h2 className="font-bold text-xl mb-2">{team.name}</h2>
                            <p>{team.project}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Submissions;
