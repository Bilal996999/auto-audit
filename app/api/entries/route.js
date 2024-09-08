import connectMongoDB from "@/libs/mongodb"
import Entries from "@/models/entries"
import { NextResponse } from "next/server"

export async function POST(request){
    const {name, email, phone, vinNumber, status} = await request.json()
    await connectMongoDB()

    await Entries.create({name, email, phone, vinNumber, status})
    return NextResponse.json({message: "Entry Created"}, {status: 201})
}

export async function GET(){
    await connectMongoDB()
    const dataEntries = await Entries.find().sort({ "_id": -1 })
    return NextResponse.json(dataEntries)
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Entries.findByIdAndDelete(id)
    return NextResponse.json({message: "Entry Deleted"}, {status: 200})
}