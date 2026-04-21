import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

const METHODS = [
    { key: '01', gradient: 'from-emerald-500 to-teal-500', glow: 'hover:shadow-[0_25px_80px_rgba(16,185,129,0.25)]' },
    { key: '02', gradient: 'from-amber-500 to-amber-600', glow: 'hover:shadow-[0_25px_80px_rgba(245,158,11,0.25)]' },
    { key: '03', gradient: 'from-slate-700 to-slate-900', glow: 'hover:shadow-[0_25px_80px_rgba(51,65,85,0.2)]' },
];

export default function MethodologyCEO() {
    const { t } = useTranslation();
    const grid = useInView<HTMLDivElement>();
    const cta = useInView<HTMLDivElement>();

    return (
        <section id="methodology" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                        <i className="ri-compasses-2-line" aria-hidden="true"></i>
                        {t('methodology.badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                        {t('methodology.title')}
                    </h2>
                </div>

                <div ref={grid.ref} data-reveal={grid.visible ? 'in' : 'out'} className="reveal-parent grid md:grid-cols-3 gap-8">
                    {METHODS.map((m) => (
                        <div
                            key={m.key}
                            className={`group relative bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:border-transparent ${m.glow}`}
                        >
                            <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${m.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-xl font-display font-extrabold text-white">{m.key}</span>
                            </div>
                            <div className="pt-4">
                                <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2">{t(`methodology.${m.key}.title`)}</h3>
                                <p className="text-sm text-gray-400 mb-4">{t(`methodology.${m.key}.subtitle`)}</p>
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{t(`methodology.${m.key}.description`)}</p>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3].map((i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-100 group-hover:border-gray-200 transition-colors"
                                        >
                                            {t(`methodology.${m.key}.feat.${i}`)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={cta.ref} className={`mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white transition-all duration-700 ${cta.visible ? 'reveal-in' : 'reveal-init'}`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                <i className="ri-check-line text-2xl text-emerald-400" aria-hidden="true"></i>
                            </div>
                            <div>
                                <div className="font-display font-bold text-lg">{t('methodology.flow.title')}</div>
                                <div className="text-sm text-white/60">{t('methodology.flow.desc')}</div>
                            </div>
                        </div>
                        <div className="hidden md:block w-24 h-px bg-gradient-to-r from-white/20 via-emerald-500/50 to-white/20" />
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
                                <i className="ri-time-line text-2xl text-amber-400" aria-hidden="true"></i>
                            </div>
                            <div>
                                <div className="font-display font-bold text-lg">{t('methodology.ongoing.title')}</div>
                                <div className="text-sm text-white/60">{t('methodology.ongoing.desc')}</div>
                            </div>
                        </div>
                        <div className="hidden md:block w-24 h-px bg-gradient-to-r from-white/20 via-emerald-500/50 to-white/20" />
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                <i className="ri-line-chart-line text-2xl text-emerald-400" aria-hidden="true"></i>
                            </div>
                            <div>
                                <div className="font-display font-bold text-lg">{t('methodology.measure.title')}</div>
                                <div className="text-sm text-white/60">{t('methodology.measure.desc')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
