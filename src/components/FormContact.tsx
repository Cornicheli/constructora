import { useState } from 'react';
import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdWatchLater, MdAlternateEmail, MdSmartphone } from 'react-icons/md';
import SEO from './SEO';

const interestOptions = [
    'Vivienda nueva',
    'Piscinas',
    'Proyecto a medida',
    'Inversión',
    'Otros',
];

const FormContact = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleOption = (option: string) => {
        setSelected(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option],
        );
    };

    const handleEventForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <main className="min-h-screen bg-paper pb-20 pt-24">
            <SEO
                title="Contacto"
                description="Contactate con Home Deluxe Constructora. Estamos en Berazategui, Buenos Aires. Tel: +54 11 36821653. Respondemos a la brevedad."
                canonical="/contact"
            />
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Left column */}
                    <div className="flex flex-col justify-center">
                        {/* Eyebrow */}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-6 bg-gold" />
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                                Hablemos
                            </span>
                        </div>

                        <h1 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-extralight tracking-tight text-ink">
                            Contactanos{' '}
                            <em className="font-serif not-italic text-navy">
                                hoy
                            </em>
                        </h1>

                        <p className="mb-8 text-base leading-relaxed text-mute">
                            Estamos listos para ayudarte a construir el proyecto
                            de tus sueños. Completá el formulario y nos ponemos
                            en contacto a la brevedad.
                        </p>

                        {/* Contact info */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <MdAlternateEmail
                                    className="shrink-0 text-gold"
                                    size={18}
                                />
                                <span className="text-sm text-ink">
                                    constructorahomedeluxe@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdSmartphone
                                    className="shrink-0 text-gold"
                                    size={18}
                                />
                                <span className="text-sm text-ink">
                                    +54 11 36821653
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoLocationSharp
                                    className="shrink-0 text-gold"
                                    size={18}
                                />
                                <span className="text-sm text-ink">
                                    Berazategui, Calle 5 4340
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdWatchLater
                                    className="shrink-0 text-gold"
                                    size={18}
                                />
                                <span className="text-sm text-ink">
                                    Lunes a Viernes de 9 a 18 hs.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right column — form */}
                    <div className="rounded-2xl border border-line bg-white p-8 lg:p-10">
                        <h2 className="mb-6 text-xl font-semibold text-ink">
                            Enviá tu consulta
                        </h2>

                        <form onSubmit={handleEventForm} className="space-y-6">
                            <input
                                value="https://jamstacker.studio/thankyou"
                                type="hidden"
                                name="_redirect"
                            />

                            {/* Nombre */}
                            <div>
                                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-mute">
                                    Tu nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre completo"
                                    className="w-full border-0 border-b border-line bg-transparent pb-2 text-sm text-ink transition placeholder:text-mute focus:border-gold focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-mute">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ejemplo@gmail.com"
                                    className="w-full border-0 border-b border-line bg-transparent pb-2 text-sm text-ink transition placeholder:text-mute focus:border-gold focus:outline-none"
                                />
                            </div>

                            {/* Interés — multi-select chips */}
                            <div>
                                <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-mute">
                                    Me interesa
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {interestOptions.map(option => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => toggleOption(option)}
                                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                                selected.includes(option)
                                                    ? 'bg-navy text-paper'
                                                    : 'border border-line text-mute hover:border-navy hover:text-navy'
                                            }`}>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Consulta */}
                            <div>
                                <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-mute">
                                    Consulta
                                </label>
                                <textarea
                                    name="consulta"
                                    placeholder="Describí tu proyecto o consulta"
                                    rows={4}
                                    className="w-full resize-none border-0 border-b border-line bg-transparent pb-2 text-sm text-ink transition placeholder:text-mute focus:border-gold focus:outline-none"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-full bg-navy py-3 text-sm font-medium text-paper transition hover:bg-navy-2">
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FormContact;
