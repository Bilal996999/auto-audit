import connectMongoDB from "@/libs/mongodb"
import Entries from "@/models/entries";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params

    const {newName: name, newEmail: email, newPhone: phone, newVinNumber: vinNumber, newStatus: status} = await request.json()

    await connectMongoDB()
    await Entries.findByIdAndUpdate(id, {name, email, phone, vinNumber, status})
    return NextResponse.json({message: "record updated"}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params

    await connectMongoDB()
    const entry = await Entries.findOne({_id:id})
    return NextResponse.json({entry}, {status: 200})
}