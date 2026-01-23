"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Shield, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

type GovernanceType = "context" | "domains" | "maturity" | "program";

interface GovernanceSlideProps {
    type: GovernanceType;
    data: any;
}

export default function GovernanceSlide({ type, data }: GovernanceSlideProps) {
    return (
        <Slide variant="dark">
            <div className="w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl w-full">
                    {/* Header */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center mb-12 text-center"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="w-5 h-5 text-rose-500" />
                            <span className="text-xs font-mono text-rose-500 tracking-widest uppercase">
                                Governance Framework™
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif leading-tight text-white max-w-4xl">
                            {data.title}
                        </h2>
                    </motion.div>

                    {/* Render based on Type */}
                    {type === "context" && <ContextLayout data={data} />}
                    {type === "domains" && <DomainsLayout data={data} />}
                    {type === "maturity" && <MaturityLayout data={data} />}
                    {type === "program" && <ProgramLayout data={data} />}

                </div>
            </div>
        </Slide>
    );
}

// --- Layouts ---

function ContextLayout({ data }: { data: any }) {
    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-rose-950/20 p-8 rounded-xl border border-rose-900/30"
            >
                <div className="flex items-center gap-3 mb-4 text-rose-400">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="text-xl font-medium">{data.problem.title}</h3>
                </div>
                <p className="text-rose-200/80 leading-relaxed text-lg">
                    {data.problem.description}
                </p>
            </motion.div>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-emerald-950/20 p-8 rounded-xl border border-emerald-900/30"
            >
                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="text-xl font-medium">{data.solution.title}</h3>
                </div>
                <p className="text-emerald-200/80 leading-relaxed text-lg">
                    {data.solution.description}
                </p>
            </motion.div>
        </div>
    );
}

function DomainsLayout({ data }: { data: any }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.items.map((item: any, idx: number) => (
                <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="p-6 rounded-lg bg-neutral-800/40 border border-neutral-700 hover:border-neutral-500 transition-colors"
                >
                    <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
}

function MaturityLayout({ data }: { data: any }) {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="overflow-hidden rounded-xl border border-neutral-800"
            >
                <table className="w-full text-left">
                    <thead className="bg-neutral-900 text-neutral-400 text-sm">
                        <tr>
                            <th className="p-4 border-b border-neutral-800">Nível</th>
                            <th className="p-4 border-b border-neutral-800">Indicador</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800 bg-neutral-900/40">
                        {data.levels.map((lvl: any, idx: number) => (
                            <tr key={idx}>
                                <td className="p-4 font-medium text-white">{lvl.level}</td>
                                <td className="p-4 text-neutral-400">{lvl.indicator}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
            >
                <div className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">Axiomas Fundamentais</div>
                {data.axioms.map((axiom: string, idx: number) => (
                    <div key={idx} className="flex gap-3 items-center p-3 rounded bg-neutral-900/60 border border-neutral-800">
                        <Lock className="w-4 h-4 text-neutral-500 shrink-0" />
                        <span className="text-sm text-neutral-300 font-medium">{axiom}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

function ProgramLayout({ data }: { data: any }) {
    return (
        <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-xl text-white font-medium mb-6">Certificação MBRAS AI™</h3>
                <div className="space-y-4">
                    {data.certifications.map((cert: any, idx: number) => (
                        <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-neutral-800/40 border border-neutral-700">
                            <span className="font-medium text-rose-200">{cert.name}</span>
                            <span className="text-xs font-mono bg-neutral-950 px-2 py-1 rounded text-neutral-500">{cert.req}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-xl text-white font-medium mb-6">Diferenciais</h3>
                <div className="space-y-6">
                    {data.why.map((item: any, idx: number) => (
                        <div key={idx} className="pl-4 border-l-2 border-neutral-700">
                            <h4 className="text-lg text-white font-medium">{item.title}</h4>
                            <p className="text-neutral-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
