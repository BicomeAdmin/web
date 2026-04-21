import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';

export default function CulturePillars() {
    const { t } = useTranslation();
    const values_ = useInView<HTMLDivElement>();
    const stats_ = useInView<HTMLDivElement>();

    const values = [
        { key: '01', icon: 'ri-team-line', gradient: 'from-emerald-500 to-teal-500' },
        { key: '02', icon: 'ri-book-open-line', gradient: 'from-emerald-600 to-emerald-800' },
        { key: '03', icon: 'ri-refresh-line', gradient: 'from-amber-500 to-amber-600' },
    ];

    const stats = [
        { value: '5+', key: 'culture.stat.years' },
        { value: '20+', key: 'culture.stat.team' },
        { value: '300+', key: 'culture.stat.brands' },
    ];

    return (
        <section id="about" className="py-24 md:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full mb-5 border border-emerald-200/60 uppercase tracking-[0.3em]">
                        <i className="ri-heart-line" aria-hidden="true"></i>
                        {t('culture.badge')}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 mb-6 tracking-tighter">
                        {t('culture.title.a')}<span className="text-emerald-600">{t('culture.title.b')}</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        {t('culture.sub.a')}
                        <span className="text-gray-900 font-semibold">{t('culture.sub.b')}</span>
                        {t('culture.sub.c')}
                    </p>
                </div>

                <div
                    ref={stats_.ref}
                    data-reveal={stats_.visible ? 'in' : 'out'}
                    className="reveal-parent grid grid-cols-3 gap-3 md:gap-5 max-w-2xl mx-auto mb-16"
                >
                    {stats.map((s) => (
                        <div key={s.key} className="text-center p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                            <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-600 mb-1 tabular-nums">{s.value}</div>
                            <div className="text-xs md:text-sm text-gray-500">{t(s.key)}</div>
                        </div>
                    ))}
                </div>

                <div
                    ref={values_.ref}
                    data-reveal={values_.visible ? 'in' : 'out'}
                    className="reveal-parent grid md:grid-cols-3 gap-5"
                >
                    {values.map((v) => (
                        <article
                            key={v.key}
                            className="group relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 transition-all duration-500 hover:border-transparent hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] hover:-translate-y-1"
                        >
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${v.gradient} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className={`w-12 h-12 bg-gradient-to-br ${v.gradient} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300`}>
                                <i className={`${v.icon} text-xl text-white`} aria-hidden="true"></i>
                            </div>
                            <h3 className="text-lg font-display font-bold text-gray-900 mb-1">{t(`culture.value.${v.key}.title`)}</h3>
                            <p className="text-xs text-gray-400 mb-3 tracking-wider uppercase">{t(`culture.value.${v.key}.subtitle`)}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{t(`culture.value.${v.key}.desc`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
