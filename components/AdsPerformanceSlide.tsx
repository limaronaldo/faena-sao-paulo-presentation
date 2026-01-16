"use client";

import Slide from "./Slide";
import { motion } from "framer-motion";
import { Instagram, Search, BarChart3, Eye, Users, Clock, MousePointer, Target } from "lucide-react";

export default function AdsPerformanceSlide() {
    const metaAds = [
        {
            type: "Carrossel",
            impressions: "53.612",
            reach: "34.840",
            frequency: "1,54",
            cpm: "R$ 1,71",
            clicks: "43",
        },
        {
            type: "Posts",
            impressions: "97.950",
            reach: "56.232",
            frequency: "1,74",
            cpm: "R$ 0,93",
            clicks: "56",
        },
    ];

    const metaTotals = {
        impressions: "151.562",
        reach: "91.072",
        clicks: "99",
    };

    const googleAds = [
        { label: "Conversões", value: "6", highlight: true },
        { label: "Cliques", value: "83" },
        { label: "Impressões", value: "1.205" },
        { label: "CTR", value: "6,89%" },
        { label: "CPC", value: "R$ 7,28" },
    ];

    const analytics = [
        { icon: Eye, label: "Visualizações", value: "1.749" },
        { icon: Users, label: "Usuários Ativos", value: "1.389" },
        { icon: BarChart3, label: "Views/Usuário", value: "1,26" },
        { icon: Clock, label: "Tempo Engajamento", value: "20s" },
    ];

    return (
        <Slide className="bg-dark-900 text-cream-100">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-800/30 via-dark-900 to-dark-900" />

            <div className="z-10 w-full max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <p className="text-gold-500 tracking-[0.3em] uppercase text-xs mb-4">
                        Performance de Marketing
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light">
                        Resultados da Campanha
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Meta Ads Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Instagram className="w-5 h-5 text-gold-500" />
                            <h3 className="text-lg font-serif text-cream-100">Meta Ads</h3>
                        </div>

                        {/* Totals */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="text-center p-4 bg-gold-500/10 rounded-xl border border-gold-500/20">
                                <p className="text-2xl font-serif text-gold-500">{metaTotals.impressions}</p>
                                <p className="text-cream-100/50 text-[10px] uppercase tracking-wider">Impressões</p>
                            </div>
                            <div className="text-center p-4 bg-gold-500/10 rounded-xl border border-gold-500/20">
                                <p className="text-2xl font-serif text-gold-500">{metaTotals.reach}</p>
                                <p className="text-cream-100/50 text-[10px] uppercase tracking-wider">Alcance</p>
                            </div>
                            <div className="text-center p-4 bg-gold-500/10 rounded-xl border border-gold-500/20">
                                <p className="text-2xl font-serif text-gold-500">{metaTotals.clicks}</p>
                                <p className="text-cream-100/50 text-[10px] uppercase tracking-wider">Cliques</p>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-hidden rounded-xl border border-cream-100/10 text-sm">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-dark-800/80">
                                        <th className="text-left px-3 py-2 text-cream-100/50 text-[10px] uppercase tracking-wider font-normal">Conjunto</th>
                                        <th className="text-center px-3 py-2 text-cream-100/50 text-[10px] uppercase tracking-wider font-normal">Impressões</th>
                                        <th className="text-center px-3 py-2 text-cream-100/50 text-[10px] uppercase tracking-wider font-normal">Alcance</th>
                                        <th className="text-center px-3 py-2 text-cream-100/50 text-[10px] uppercase tracking-wider font-normal">CPM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {metaAds.map((row, index) => (
                                        <tr key={row.type} className={index % 2 === 0 ? "bg-dark-800/40" : "bg-dark-800/20"}>
                                            <td className="px-3 py-3 text-cream-100 font-medium">{row.type}</td>
                                            <td className="px-3 py-3 text-center text-cream-100/80">{row.impressions}</td>
                                            <td className="px-3 py-3 text-center text-cream-100/80">{row.reach}</td>
                                            <td className="px-3 py-3 text-center text-gold-500">{row.cpm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Google Ads Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Search className="w-5 h-5 text-gold-500" />
                            <h3 className="text-lg font-serif text-cream-100">Google Ads</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {googleAds.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                                    className={`text-center p-4 rounded-xl border ${item.highlight
                                        ? "bg-gold-500/15 border-gold-500/30 col-span-2"
                                        : "bg-dark-800/50 border-cream-100/5"
                                        }`}
                                >
                                    <p className={`text-2xl font-serif mb-1 ${item.highlight ? "text-gold-500" : "text-cream-100"}`}>
                                        {item.value}
                                    </p>
                                    <p className="text-cream-100/50 text-[10px] uppercase tracking-wider">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Google Analytics Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-8"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <BarChart3 className="w-5 h-5 text-gold-500" />
                        <h3 className="text-lg font-serif text-cream-100">Google Analytics</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {analytics.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                    className="text-center p-4 bg-dark-800/50 rounded-xl border border-cream-100/5"
                                >
                                    <IconComponent className="w-4 h-4 text-gold-500/70 mx-auto mb-2" strokeWidth={1.5} />
                                    <p className="text-xl font-serif text-cream-100 mb-1">{item.value}</p>
                                    <p className="text-cream-100/40 text-[10px] uppercase tracking-wider">{item.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
