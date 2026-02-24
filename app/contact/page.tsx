"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Ocurrió un error al enviar el mensaje.");
            }
        } catch (error) {
            console.error("Form error:", error);
            setStatus("error");
            setErrorMessage("Error de conexión. Inténtalo de nuevo.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Ponte en contacto
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                    ¿Tienes un proyecto en mente o quieres saludar? No dudes en enviarme un mensaje.
                </p>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Nombre
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="Tu nombre"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="tu@ejemplo.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Mensaje
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                placeholder="¿En qué puedo ayudarte?"
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                        </button>
                    </div>

                    {status === "success" && (
                        <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
                            ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
                            {errorMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
