import { displayWords } from '@/app/lib/actions';
import React, { useEffect, useState } from 'react';



const DisplayWords = () => {
    const [words , setWords] = useState<string[]>([])
    const [error , setError] = useState<string | null >()
    useEffect(() => {
        const fetchData = async () => {
            const response = await displayWords();
            setWords(response.data)
            setError(response.error)
        };
        fetchData();
    }, []);      
    return (
        <div className='relative'>
            <div>
            {   
                words && words.map((word, index) =>
                <div className='m-4 bg-slate-600 p-2 rounded-md' key={index}>
                    {word}
                </div>
            )}
            </div>
           <div>
            <p className='text-red-500'>{error}</p>
           </div>

        </div>
    );
}

export default DisplayWords;
