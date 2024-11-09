"use client"
import DisplayWords from "./components/displayWords/displayWords";
import { addToDictionary } from "./lib/actions";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  
  const [error, setError] = useState<string | null>();
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    return () => {
      const fetchError = async ()=>{
        try{
          const formData = new FormData(ref.current)
          const getError = await addToDictionary(formData)
          setError(getError)
        }catch (error){
          console.log(error);
          setError(error instanceof Error ? error.message : 'An error occurred');
        }
        
      }
      fetchError()
    };
  }, []);
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1 className="font-bold font-sans text-2xl">My English Dictionary</h1>
        <form 
          ref= {ref}
          action={
            async (FormData)=>{
              ref.current?.reset()
              await addToDictionary(FormData)
            }
          }>
          <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <input className="m-2 p-2 outline-none overflow-hidden text-black"type="text" name="word" placeholder="English Word" />
            </li>
          </ol>
          <div className="flex mt-5 items-center justify-center">
            <button 
              type="submit"
              className="rounded-full border border-solid border-transparent transition-colors  bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Add Word
            </button>
          </div>
        </form>
      </main>
      {/* Display all the words */}
      <div>
        <DisplayWords />
        {error && <p>{error}</p>}
      </div>
      <footer className="mt-5 row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Dictionary for english language <span className="text-blue-400">@Created</span> by M.Magdy</p>
      </footer>
    </div>
  );
}
