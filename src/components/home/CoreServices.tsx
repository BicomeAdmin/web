import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

const SERVICES = [
    {
        key: 'ops',
        headerBg: 'bg-emerald-900',
        accentText: 'text-emerald-800',
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-700',
        iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
        key: 'data',
        headerBg: 'bg-slate-900',
        accentText: 'text-slate-900',
        iconBg: 'bg-slate-50',
        iconColor: 'text-slate-800',
        iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
];

export default function CoreServices() {
    const { t } = useTranslation();
    const grid = useInView<HTMLDivElement>();

    return (
        <section id="services" className="relative py-32 bg-gray-50 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#020617] to-gray-50 pointer-events-none opacity-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-gray-400"></span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{t('services.badge')}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tighter leading-[1.1]">
                            {t('services.title.1')}<span className="text-emerald-800">{t('services.title.2')}</span>{t('services.title.3')}<br />
                            <span className="text-slate-900">{t('services.title.4')}</span>{t('services.title.5')}
                        </h2>
                    </div>
                    <div className="max-w-md pb-2">
                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            {t('services.sub')}
                        </p>
                    </div>
                </div>

                <div ref={grid.ref} data-reveal={grid.visible ? 'in' : 'out'} className="reveal-parent grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.key}
                            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-gray-200/50 border border-gray-100"
                        >
                            <div className={`${service.headerBg} p-8 md:p-10 relative overflow-hidden`}>
                                <div className="absolute -right-12 -bottom-24 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full inline-block mb-6 border border-white/20">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">{t(`services.${service.key}.category`)}</span>
                                    </div>
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 text-white">
                                        {index === 0 ? '01' : '02'}
                                    </div>
                                </div>
                                <h3 className="relative z-10 text-3xl font-display font-bold text-white tracking-tight mt-2">
                                    {t(`services.${service.key}.title`)}
                                </h3>
                            </div>

                            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                                <div>
                                    <p className="text-gray-500 leading-relaxed text-lg mb-10 font-medium">
                                        {t(`services.${service.key}.description`)}
                                    </p>

                                    <div className="space-y-6 mb-12">
                                        {[1, 2].map((i) => (
                                            <div key={i} className="flex items-start gap-4 group/item">
                                                <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg ${service.iconBg} flex items-center justify-center transition-colors group-hover/item:bg-gray-100`}>
                                                    <svg className={`w-6 h-6 ${service.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.iconPath} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className={`font-bold text-base mb-1 ${service.accentText}`}>{t(`services.${service.key}.item${i}.title`)}</h4>
                                                    <p className="text-sm text-gray-400 leading-relaxed">
                                                        {t(`services.${service.key}.item${i}.desc`)}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <a
                                        href="#team"
                                        className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group/link text-gray-900 transition-colors hover:text-gray-600"
                                    >
                                        <span className="border-b-2 border-transparent group-hover/link:border-gray-900 transition-all">
                                            {t('services.cta')}
                                        </span>
                                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
