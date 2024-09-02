import mongoose, {Schema} from "mongoose";

const entriesSchema = new Schema(
    {
        name:String,
        email: String,
        phone: String,
        vinNumber: String,
        status: String,
    },{
        timestamps:true
    }
)
// if (!mongoose.modelNames().includes('Entries')) {
//     mongoose.model('Entry', entrySchema);
//   }
const Entries = mongoose.models.Entries || mongoose.model("Entries", entriesSchema)

export default Entries