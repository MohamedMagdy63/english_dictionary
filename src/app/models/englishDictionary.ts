import mongoose , { Document , Model } from "mongoose";

export interface Word {
    word : string;
    isMemorized : boolean;
}

export interface WordDocument extends Word, Document {
    createdAt: Date;
    updatedAt: Date;
}

const dictionarySchema = new mongoose.Schema<WordDocument>(
    {
        word: { 
            type: String,
            required: true,
        },
        isMemorized :{
            type : Boolean,
        }
    },
    {
        timestamps : true 
    }
)
const Dictionary : Model <WordDocument> = 
    mongoose.models.Dictionary || mongoose.model("Dictionary" , dictionarySchema)

export default Dictionary