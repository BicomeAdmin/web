import { useState, useRef } from 'react';

export default function SuccessVideos() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const videos = [
        {
            src: "/videos/山納百景.mp4",
            title: "#山納百景 關係經營的重要性",
            creator: "paul_bicome",
            views: "12.3K",
            likes: "1.2K",
        },
        {
            src: "/videos/解讀 私域流量.mp4",
            title: "解讀 私域流量",
            creator: "paul_bicome",
            views: "8.7K",
            likes: "856",
        },
        {
            src: "/videos/私域解說.mp4",
            title: "私域解說",
            creator: "paul_bicome",
            views: "15.2K",
            likes: "2.1K",
        }
    ];

    const handlePlay = (index: number) => {
        // 暫停其他影片
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
            }
        });

        const video = videoRefs.current[index];
        if (video) {
            if (playingIndex === index) {
                video.pause();
                setPlayingIndex(null);
            } else {
                video.play();
                setPlayingIndex(index);
            }
        }
    };

    const handleVideoEnd = () => {
        setPlayingIndex(null);
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* 標題區 */}
                <div className="text-center mb-16">
                    <div className="relative inline-block group mb-10">
                        {/* 外層炫彩漸層背景 */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FE2C55] via-[#FF0050] to-[#FF9500] rounded-full blur-[2px] opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>

                        <a
                            href="https://www.tiktok.com/@paul_bicome"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-3 px-10 py-4 bg-black rounded-full text-white transition-all duration-300 hover:scale-[0.98]"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                            <span className="text-[17px] font-extrabold tracking-tight">追蹤 @paul_bicome</span>
                        </a>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gray-900 tracking-tighter">
                        操盤實戰經驗分享
                    </h2>
                </div>

                {/* 自訂影片播放器 */}
                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="group relative bg-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* 影片容器 */}
                            <div
                                className="relative cursor-pointer"
                                style={{ aspectRatio: '9/16' }}
                                onClick={() => handlePlay(index)}
                            >
                                <video
                                    ref={el => { videoRefs.current[index] = el; }}
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    playsInline
                                    onEnded={handleVideoEnd}
                                    loop
                                />

                                {/* 播放按鈕覆蓋層 */}
                                <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${playingIndex === index ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                                    <div className={`w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 ${playingIndex === index ? 'scale-0' : 'scale-100 group-hover:scale-110'}`}>
                                        {playingIndex === index ? (
                                            <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                {/* TikTok 標籤 */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                    TikTok
                                </div>

                                {/* 播放狀態指示器 */}
                                {playingIndex === index && (
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                                            <div className="w-1 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                                            <div className="w-1 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                                        </div>
                                        <span className="text-white text-xs font-medium">播放中</span>
                                    </div>
                                )}
                            </div>

                            {/* 底部資訊卡片 */}
                            <div className="p-5 bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {video.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-3">@{video.creator}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        {video.views}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        {video.likes}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LINE 社群邀請區 - 緊湊版 */}
                <div className="mt-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06C755] to-[#00B900] rounded-2xl" />

                    <div className="relative py-6 px-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            {/* LINE Logo */}
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                <svg className="w-7 h-7 text-[#06C755]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                            </div>

                            <div className="text-white">
                                <h3 className="text-lg md:text-xl font-bold">
                                    加入 LINE 社群
                                </h3>
                                <p className="text-sm text-white/80">
                                    Bicome，您的私域顧問 · 與 500+ 品牌主以及行銷與營運專家交流
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://line.me/ti/g2/kvmqLQ35fXGFTqn4PtrWxFXvcka5klKmsJBUeA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#06C755] font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
                        >
                            立即加入
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
