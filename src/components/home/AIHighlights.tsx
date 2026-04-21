import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

export default function AIHighlights() {
    const { t } = useTranslation();
    const strip = useInView<HTMLDivElement>();

    const capabilities = [
        { key: 'reco', icon: 'ri-robot-2-line' },
        { key: 'churn', icon: 'ri-radar-line' },
        { key: 'segment', icon: 'ri-group-line' },
        { key: 'nlp', icon: 'ri-chat-voice-line' },
    ];

    const netPts = useCountUp(108, { duration: 1600, start: strip.visible });
    const validPct = useCountUp(49, { duration: 1500, start: strip.visible });
    const activePct = useCountUp(74, { duration: 1700, start: strip.visible });

    return (
        <section className="relative py-20 md:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-white overflow-hidden">
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100/60 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200 uppercase tracking-[0.3em]">
                        <i className="ri-sparkling-2-line" aria-hidden="true"></i>
                        {t('ai.badge')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-4 tracking-tighter">
                        {t('ai.title.a')}{' '}
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{t('ai.title.b')}</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {t('ai.sub')}
                    </p>
                </div>

                <div
                    ref={strip.ref}
                    data-reveal={strip.visible ? 'in' : 'out'}
                    className="reveal-parent grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
                >
                    {capabilities.map((c) => (
                        <div key={c.key} className="group relative bg-white rounded-2xl p-5 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/50 transition-all">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                                <i className={`${c.icon} text-xl text-white`} aria-hidden="true"></i>
                            </div>
                            <div className="text-[15px] font-display font-bold text-gray-900 mb-1">{t(`ai.cap.${c.key}.name`)}</div>
                            <div className="text-[12px] text-gray-500 leading-relaxed">{t(`ai.cap.${c.key}.desc`)}</div>
                        </div>
                    ))}
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-emerald-200/50 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-600 tabular-nums">+{netPts}K</div>
                            <div className="text-xs md:text-sm text-gray-600 mt-1">{t('ai.stat.net')} <span className="text-gray-400">(pts)</span></div>
                        </div>
                        <div className="sm:border-x sm:border-emerald-200/50">
                            <div className="text-3xl md:text-4xl font-display font-extrabold text-teal-600 tabular-nums">{validPct}%</div>
                            <div className="text-xs md:text-sm text-gray-600 mt-1">{t('ai.stat.valid')}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-700 tabular-nums">{activePct}%</div>
                            <div className="text-xs md:text-sm text-gray-600 mt-1">{t('ai.stat.active')}</div>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-emerald-100/80 text-center text-[11px] text-gray-400">
                        {t('ai.stat.note')}
                    </div>
                </div>
            </div>
        </section>
    );
}
