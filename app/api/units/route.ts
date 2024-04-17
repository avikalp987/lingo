import db from "@/db/drizzle"
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { NextResponse } from "next/server";

export const GET = async () => {
    if(!getIsAdmin())
    {
        return new NextResponse("Unauthorized", { status: 401 })
    }
    const data = await db.query.units.findMany();
    
    return NextResponse.json(data);
}

export const POST = async (req: Request) => {
    if(!getIsAdmin())
    {
        return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()

    const data = await db.insert(units).values({
        ...body
    }).returning()

    return NextResponse.json(data[0])
}