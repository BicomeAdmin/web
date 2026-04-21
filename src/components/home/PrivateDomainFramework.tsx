import { useTranslation } from 'react-i18next';

const STAGES = [
    { num: '01', key: '01', icon: 'ri-megaphone-line', color: 'from-emerald-400 to-emerald-500' },
    { num: '02', key: '02', icon: 'ri-chat-smile-3-line', color: 'from-emerald-600 to-teal-600' },
    { num: '03', key: '03', icon: 'ri-sparkling-2-line', color: 'from-amber-500 to-amber-600' },
];

const STEPS = [
    { num: '01', key: '01', icon: 'ri-user-add-line', color: 'emerald' },
    { num: '02', key: '02', icon: 'ri-repeat-line', color: 'emerald' },
    { num: '04', key: '04', icon: 'ri-share-forward-line', color: 'amber' },
    { num: '03', key: '03', icon: 'ri-fire-line', color: 'emerald' },
];

const COLORS: Record<string, { bg: string; text: string; ring: string; tagBg: string; tagText: string }> = {
    emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', ring: 'ring-emerald-200', tagBg: 'bg-emerald-50', tagText: 'text-emerald-700' },
    amber: { bg: 'bg-amber-500', text: 'text-amber-600', ring: 'ring-amber-200', tagBg: 'bg-amber-50', tagText: 'text-amber-700' },
};

export default function PrivateDomainFramework() {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* 三階段 */}
                <div className="mb-28">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                            <i className="ri-flow-chart" aria-hidden="true"></i>
                            {t('framework.maturity.badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                            {t('framework.maturity.title.a')}<span className="text-emerald-600">{t('framework.maturity.title.b')}</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            {t('framework.maturity.sub')}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-24 left-[16%] right-[16%] h-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-amber-500 rounded-full" />

                        <div className="grid lg:grid-cols-3 gap-8">
                            {STAGES.map((stage) => (
                                <div key={stage.num} className="relative">
                                    <div className={`w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10`}>
                                        {stage.num}
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                        <div className="text-center mb-4">
                                            <div className={`inline-flex w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${stage.color} items-center justify-center text-white shadow-md`}>
                                                <i className={`${stage.icon} text-2xl`} aria-hidden="true"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{t(`framework.stage.${stage.key}.title`)}</h3>
                                            <p className="text-sm text-gray-400">{t(`framework.stage.${stage.key}.subtitle`)}</p>
                                        </div>

                                        <div className="inline-block w-full px-3 py-1.5 bg-emerald-50 border border-emerald-200/50 rounded-full text-center text-sm font-medium text-emerald-700 mb-4">
                                            {t(`framework.stage.${stage.key}.mode`)}
                                        </div>

                                        <div className="space-y-3 text-sm text-gray-600">
                                            <div className="flex gap-2">
                                                <span className="text-emerald-600 font-semibold shrink-0 w-10">{t('framework.maturity.label.position')}</span>
                                                <span>{t(`framework.stage.${stage.key}.desc`)}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-emerald-600 font-semibold shrink-0 w-10">{t('framework.maturity.label.content')}</span>
                                                <span>{t(`framework.stage.${stage.key}.content`)}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="text-amber-600 font-semibold shrink-0 w-10">{t('framework.maturity.label.trait')}</span>
                                                <span>{t(`framework.stage.${stage.key}.trait`)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 四步驟 */}
                <div className="mb-28">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                            <i className="ri-refresh-line" aria-hidden="true"></i>
                            {t('framework.flywheel.badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                            {t('framework.flywheel.title.a')}<span className="text-emerald-600">{t('framework.flywheel.title.b')}</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            {t('framework.flywheel.sub')}
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                            {STEPS.map((s, i) => {
                                const c = COLORS[s.color];
                                return (
                                    <article
                                        key={s.key}
                                        className={`group relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:ring-4 hover:${c.ring} hover:-translate-y-1 ${i === 2 ? 'sm:order-4' : i === 3 ? 'sm:order-3' : ''}`}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center shadow-md`}>
                                                <i className={`${s.icon} text-xl text-white`} aria-hidden="true"></i>
                                            </div>
                                            <span className={`text-4xl font-display font-black ${c.text}/15`} aria-hidden="true">{s.num}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-1">
                                            {t(`framework.step.${s.key}.zh`)}
                                            <span className="text-xs font-normal text-gray-400 ml-2 tracking-wide uppercase">{t(`framework.step.${s.key}.en`)}</span>
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{t(`framework.step.${s.key}.desc`)}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {[1, 2, 3].map((tagIdx) => (
                                                <span key={tagIdx} className={`px-2 py-1 ${c.tagBg} ${c.tagText} text-xs rounded-md font-medium`}>{t(`framework.step.${s.key}.tag${tagIdx}`)}</span>
                                            ))}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* 中心飛輪 badge */}
                        <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl animate-glow-pulse" />
                                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-4 border-emerald-400/30 flex flex-col items-center justify-center shadow-2xl">
                                    <i className="ri-refresh-line text-2xl text-emerald-600 animate-[spin_12s_linear_infinite]" aria-hidden="true"></i>
                                    <div className="text-[9px] font-bold text-emerald-700 mt-0.5 tracking-widest">{t('framework.flywheel.label')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <a
                        href="#team"
                        className="inline-block px-12 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-black transition-all text-center"
                    >
                        {t('framework.cta')}
                    </a>
                </div>
            </div>
        </section>
    );
}
