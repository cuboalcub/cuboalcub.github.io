import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios.' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Change to your verified domain in production
            to: ['zs22019951@estudiantes.uv.mx'], // Replace with your actual email or add to env
            subject: `Nuevo mensaje de contacto de ${name}`,
            replyTo: email,
            html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor.' },
            { status: 500 }
        );
    }
}
