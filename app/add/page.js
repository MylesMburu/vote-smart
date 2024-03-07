'use client'
 import {useState, useEffect} from 'react';
 import Link from 'next/link';

 const handleSubmit = async (e) => {}

export default function Results() {
    const [ team, setTeam] = useState('');
    const [ project, setProject] = useState('');
    const [ description, setDescription] = useState('');


    return (
        <section className='flex justify-center items-center flex-col pt-8'>
            <h1 className='blue_gradient font-bold text-2xl'>Add team</h1>
            <form
            onSubmit={handleSubmit}
            className='mt-10 w-full max-w-2xl flex flex-col gap-3 glassmorphism p-5 rounded-lg'
            >
                <label htmlFor="">
                    <span className='font-bold'>Team</span>
                    <input 
                    onChange={(e) => setTeam(e.target.value)}
                    placeholder='Team name'
                    required
                    className='form_input'
                    />
                </label>

                <label htmlFor="">
                    <span className='font-bold'>Project</span>
                    <input 
                    onChange={(e) => setProject(e.target.value)}
                    placeholder='Project name'
                    required
                    className='form_input'
                    />
                </label>

                <label htmlFor="">
                    <span className='font-bold'>Team Description</span>
                    <textarea 
                    onChange={(e) => setDescription({ ...post, tip: e.target.value })}
                    placeholder='Team Project Desriptio.'
                    required
                    className='form_textarea'
                    />
                </label>
                
                <div className=' flex flex-end gap-3 mx-3 mb-4 gap-4'>
                    <Link href='/' className='bg-red-500 text-white px-3 py-1 rounded-md'>
                        Cancel
                    </Link>
                    <button
                    type='submit'
                    className='bg-blue-500 text-white px-3 py-1 rounded-md'
                    >
                        Add Team
                    </button>
                </div>
            </form>
        </section>
      )
}
