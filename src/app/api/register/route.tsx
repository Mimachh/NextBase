import bcrypt from 'bcrypt';
import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';


interface RequestBody {
    name: string;
    email: string;
    pass: string;
    cpass: string;
    rules: boolean;
}

export async function POST(request:Request) {
    const body:RequestBody = await request.json();

    const { name, email, pass, cpass, rules } = body;

    // ICI NETTOYER LES CHAMPS
    // VERIFIER QUE LE MAIL EST BIEN UN MAIL SINON ERREUR
    if(!name || !email || !pass || !cpass|| !rules) {
       return new NextResponse('Missing Fields', { status: 400 });
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw  new Error('Email already exists');
    }

    // VOIR POUR UN TYPE DE MDP (minimum 8 caractères, !, Majuscule)
    if(pass !== cpass) {
        throw  new Error('Passwords don\'t match');
    }
    const password = await bcrypt.hash(pass, 10);
    
    // FILTRER POUR LE NOM (longueur)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        }
    });

    return NextResponse.json(user);
}