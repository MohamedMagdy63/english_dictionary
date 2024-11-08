'use server'

import { revalidatePath } from "next/cache"
import Dictionary from "../models/englishDictionary"
import { connectToMongoDB } from "./db"

export const addToDictionary = async (formData : FormData) => {
    await connectToMongoDB();

    const word = formData.get('word')

    try {
        const newWord = await Dictionary.create({
            word
        })

        newWord.save()

        revalidatePath('/')

        return newWord.toString()

    }catch(error){
        console.log(error);
    }

}