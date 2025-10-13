import React, { useState, useEffect } from 'react';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('用戶忠誠計劃');

  const phases = [
    '用戶忠誠架構',
    '精細化營運',
    '遊戲化機制',
    'AI分析',
    '體驗升級',
    '忠誠計劃上線'
  ];

  useEffect(() => {
    // 【修正 TS2339 錯誤：使用 HTMLScriptElement Generic Type】
    const DATA_ID = 'bicome-schema-ld';

    // 使用 document.querySelector<HTMLScriptElement> 明確告知 TypeScript 返回的類型。
    let script = document.querySelector<HTMLScriptElement>(`script[data-id="${DATA_ID}"]`);

    if (!script) {
      // Add Schema.org JSON-LD
      script = document.createElement('script');
    }

    // 由於變數 script 現在已知為 HTMLScriptElement，可以安全地訪問 .type 屬性。
    script.type = 'application/ld+json';
    script.setAttribute('data-id', DATA_ID); // 新增唯一識別標籤
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Bicome - 用戶忠誠營運專家",
      "url": import.meta.env.VITE_SITE_URL || window.location.origin,
      "description": "Bicome 專注用戶營運與忠誠計劃，透過AI數據賦能打造深度用戶關係，提升用戶終身價值與品牌忠誠度。",
      "inLanguage": "zh-TW",
      "publisher": {
        "@type": "Organization",
        "name": "Bicome"
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "Bicome 用戶忠誠營運平台",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Web Browser",
        "description": "專業的用戶營運與忠誠計劃平台，提供個人化推薦、遊戲化互動、智能分析等核心功能。",
        "releaseNotes": "預計2025年Q4上線，專注用戶忠誠度提升與終身價值最大化。",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/ComingSoon",
          "availabilityStarts": "2025-10-01"
        }
      }
    });
    document.head.appendChild(script);

    // 【優化：進度條穩定波動邏輯】
    const interval = setInterval(() => {
      setProgress(prev => {
        let newProgress;

        if (prev >= 98) {
          // 達到 98% 後，在 95% ~ 98% 之間小幅隨機波動，模擬持續努力中
          newProgress = 95 + (Math.random() * 3);
        } else if (prev >= 88) {
          // 接近完成時放緩速度
          newProgress = prev + 0.05;
        } else {
          newProgress = prev + 0.3;
        }

        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(phases[Math.min(phaseIndex, phases.length - 1)]);
        return newProgress;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      // 精確清理：只移除帶有 DATA_ID 標籤的 script
      const scriptToRemove = document.querySelector(`script[data-id="${DATA_ID}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = new URLSearchParams();

    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    try {
      const response = await fetch('https://readdy.ai/api/form/d3iu72vuqofrij837s50', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });

      if (response.ok) {
        alert('訊息已送出，我們會盡快回覆您！');
        (e.target as HTMLFormElement).reset();
      } else {
        alert('送出失敗，請稍後再試');
      }
    } catch (error) {
      alert('送出失敗，請稍後再試');
    }
  };

  const handleSocialClick = (platform: string) => {
    // 這裡可以根據不同平台跳轉到對應的社群頁面
    switch(platform) {
      case 'line':
        window.open('https://line.me/ti/g2/kvmqLQ35fXGFTqn4PtrWxFXvcka5klKmsJBUeA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', '_blank');
        break;
      case 'lineoa':
        window.open('https://page.line.me/586srkkv?openQrModal=true', '_blank');
        break;
      case 'tiktok':
        window.open('https://www.tiktok.com/@paul_bicome', '_blank');
        break;
      default:
        // 如果沒有具體連結，可以顯示提示或開啟聯絡表單
        document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation Bar - 精緻現代設計 */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                    src="https://static.readdy.ai/image/b2dbfa5c4fa9886922c19710ac4fc101/50bc65c791a21dcf044a54e5b294b29c.png"
                    alt="Bicome Logo"
                    className="w-10 h-10 object-contain"
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Bicome
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-slate-600 hover:text-slate-900 font-medium transition-all duration-300 cursor-pointer">服務項目</a>
                <a href="#cases" className="text-slate-600 hover:text-slate-900 font-medium transition-all duration-300 cursor-pointer">成功案例</a>
                <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-all duration-300 cursor-pointer">關於我們</a>
                <button
                    // 使用 'as HTMLElement' 向 TypeScript 保證該元素具備 click() 方法
                    onClick={() =>
                        (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()
                    }
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                >
                  免費諮詢
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - 頂級視覺設計 */}
        <div className="relative pt-24 min-h-screen flex items-center overflow-hidden">
          {/* 精美背景設計 */}
          <div className="absolute inset-0">
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"></div>
            <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-100/50 to-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-[600px] h-[600px] border border-slate-200/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-slate-200/20 rounded-full"></div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">

              {/* Left Content */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-8">
                  <div className="inline-flex items-center px-5 py-2.5 bg-white/70 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-slate-700 font-medium text-sm">台灣首選用戶營運專家</span>
                  </div>

                  <h1 className="text-6xl lg:text-7xl font-black leading-tight">

                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    用戶忠誠
                  </span>
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-light">
                    透過專業用戶營運、精準忠誠計劃、活躍社群營運，<br className="hidden lg:block" />
                    助您建立無可取代的用戶關係，實現品牌長期價值
                  </p>
                </div>

                {/* 核心數據 - 頂級卡片設計 */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">75%</div>
                      <div className="text-slate-600 font-medium">留存率提升</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">3.2x</div>
                      <div className="text-slate-600 font-medium">終身價值</div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">90%</div>
                      <div className="text-slate-600 font-medium">客戶滿意</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                      // 使用 'as HTMLElement' 向 TypeScript 保證該元素具備 click() 方法
                      onClick={() =>
                          (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()
                      }
                      className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    立即預約免費諮詢
                  </button>

                  <button
                      onClick={() => document.querySelector('#services')?.scrollIntoView({behavior: 'smooth'})}
                      className="group relative bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg whitespace-nowrap cursor-pointer border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="relative">了解完整解決方案</span>
                  </button>
                </div>
              </div>

              {/* Right - 優雅的進度展示 */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div
                      className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 p-8 hover:shadow-3xl transition-all duration-500">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <i className="ri-rocket-2-line text-2xl text-white"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">用戶忠誠計劃開發進度</h3>
                      <p className="text-slate-600 text-lg">預計 2025年第四季正式推出</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-900 text-lg">整體完成度</span>
                        <span className="font-black text-slate-900 text-2xl">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 shadow-sm"
                            style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-slate-100/80 backdrop-blur-sm rounded-xl border border-slate-200/50">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        <span className="font-semibold text-slate-700 text-sm">進行中：{currentPhase}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {phases.map((phase, index) => (
                          <div key={index} className={`flex items-center space-x-4 p-3 rounded-xl transition-all duration-500 ${index < Math.floor((progress / 100) * phases.length) ? 'bg-slate-100/70 text-slate-900 border border-slate-200/50 shadow-sm' : 'text-slate-500 hover:bg-slate-50/50'}`}>
                            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${index < Math.floor((progress / 100) * phases.length) ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm' : 'bg-slate-300'}`}></div>
                            <span className="font-medium text-sm">{phase}</span>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - 完美設計升級 */}
        <div id="services" className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                <span className="text-slate-600 font-medium text-sm">CORE SOLUTIONS</span>
              </div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                三大核心解決方案
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                專為品牌與IP量身打造，從用戶獲取到深度忠誠的完整營運體系，<br className="hidden lg:block" />
                助您在競爭激烈的市場中脫穎而出
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 社群營運 - 活力設計 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-64 bg-gradient-to-br from-slate-50 to-green-50/30 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Dynamic%20social%20media%20management%20workspace%20with%20vibrant%20community%20engagement%20metrics%2C%20modern%20collaborative%20office%20environment%20with%20multiple%20screens%20showing%20social%20analytics%2C%20creative%20team%20workspace%20with%20contemporary%20design%20and%20natural%20lighting%2C%20professional%20digital%20marketing%20atmosphere%20with%20interactive%20community%20dashboards%20and%20engagement%20visualization%20tools&width=400&height=256&seq=bicome-social-dynamic-2024&orientation=landscape"
                        alt="社群營運解決方案"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-slate-200/50 group-hover:scale-110 transition-all duration-300">
                        <i className="ri-team-line text-xl text-slate-700"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">社群營運</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">建立活躍社群，設計引人入勝的營運策略，透過影響力行銷擴散品牌價值</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">活躍社群建構</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">營運策略設計</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">影響力擴散</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-green-50/30 rounded-2xl p-6 text-center border border-slate-200/30">
                      <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">95%</div>
                      <div className="text-slate-600 font-medium text-sm">品牌好感度</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 忠誠計劃 - 優雅設計 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-64 bg-gradient-to-br from-slate-50 to-purple-50/30 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Premium%20luxury%20membership%20program%20interface%20displayed%20on%20high-end%20modern%20screens%20in%20sophisticated%20corporate%20environment%2C%20elegant%20VIP%20customer%20service%20center%20with%20refined%20interior%20design%20and%20natural%20lighting%2C%20professional%20loyalty%20rewards%20platform%20dashboard%20with%20clean%20minimalist%20aesthetic%2C%20upscale%20business%20lounge%20atmosphere%20with%20contemporary%20technology%20displays%20and%20premium%20membership%20cards%20showcase&width=400&height=256&seq=bicome-loyalty-premium-hd-2024&orientation=landscape"
                        alt="忠誠計劃解決方案"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-slate-200/50 group-hover:scale-110 transition-all duration-300">
                        <i className="ri-medal-line text-xl text-slate-700"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">忠誠計劃</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">建立社群會員體系架構，優化點數獎勵運作機制，打造專屬權益與優質體驗</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">精緻社群會員體系</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">任務點數獎勵機制</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">獨家專屬權益體驗</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl p-6 text-center border border-slate-200/30">
                      <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">3.2x</div>
                      <div className="text-slate-600 font-medium text-sm">客戶終身價值</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 用戶營運 - 精緻升級 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-64 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Professional%20business%20analytics%20workspace%20with%20clean%20modern%20interface%2C%20sophisticated%20data%20dashboard%20displaying%20customer%20insights%20on%20premium%20monitors%2C%20contemporary%20office%20environment%20with%20natural%20lighting%20and%20minimalist%20design%2C%20business%20intelligence%20visualization%20tools%2C%20elegant%20workspace%20atmosphere%20with%20sleek%20technology%20displays%20and%20professional%20analytics%20charts&width=400&height=256&seq=bicome-user-analytics-pro-2024&orientation=landscape"
                        alt="用戶營運解決方案"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-slate-200/50 group-hover:scale-110 transition-all duration-300">
                        <i className="ri-user-search-line text-xl text-slate-700"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">用戶營運</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">深度洞察用戶行為軌跡，設計個人化體驗旅程，建立完整的用戶生命週期管理系統</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">全方位用戶行為分析</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">AI驅動個人化營運</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">精準生命週期管理</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 text-center border border-slate-200/30">
                      <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">75%</div>
                      <div className="text-slate-600 font-medium text-sm">平均留存提升</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section - 卓越升級 */}
        <div id="cases" className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-slate-200/50 mb-6">
                <span className="text-slate-600 font-medium text-sm">SUCCESS STORIES</span>
              </div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                客戶成功故事
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                與各行業領導品牌攜手合作，創造令人驚豔的營運成果，<br className="hidden lg:block" />
                每個數字背後都代表著真實的商業價值提升
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* 案例 1 - 時尚零售 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Sophisticated%20fashion%20retail%20store%20interior%20with%20elegant%20clothing%20displays%20and%20premium%20customer%20experience%20design%2C%20modern%20boutique%20atmosphere%20with%20natural%20lighting%20and%20contemporary%20architecture%2C%20stylish%20fashion%20brand%20showroom%20with%20minimalist%20aesthetic%20and%20high-end%20retail%20environment%2C%20professional%20fashion%20retail%20space%20with%20clean%20lines%20and%20luxury%20atmosphere&width=400&height=192&seq=bicome-fashion-retail-2024&orientation=landscape"
                        alt="時尚零售業成功案例"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg text-slate-700 font-bold border border-slate-200/50">
                        <i className="ri-shirt-line text-lg"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-lg font-bold text-slate-900 mb-1">精品時尚零售</div>
                      <div className="text-slate-500 text-sm">知名服飾連鎖品牌</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200/30">
                        <div className="text-xl font-bold text-slate-900 mb-1">+78%</div>
                        <div className="text-slate-600 text-xs">用戶留存率</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200/30">
                        <div className="text-xl font-bold text-slate-900 mb-1">+156%</div>
                        <div className="text-slate-600 text-xs">復購率成長</div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm">透過AI個人化推薦系統與精緻會員分級制度，成功提升品牌忠誠度與客戶終身價值</p>
                  </div>
                </div>
              </div>

              {/* 案例 2 - 生活服務 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-purple-50/50 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Premium%20service%20center%20interior%20with%20modern%20customer%20service%20design%20and%20professional%20atmosphere%2C%20contemporary%20waiting%20area%20with%20comfortable%20seating%20and%20elegant%20decor%2C%20upscale%20service%20facility%20with%20natural%20lighting%20and%20sophisticated%20interior%20design%2C%20professional%20service%20environment%20with%20clean%20aesthetic%20and%20welcoming%20atmosphere&width=400&height=192&seq=bicome-service-premium-2024&orientation=landscape"
                        alt="生活服務業成功案例"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg text-slate-700 font-bold border border-slate-200/50">
                        <i className="ri-service-line text-lg"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-lg font-bold text-slate-900 mb-1">優質餐飲服務</div>
                      <div className="text-slate-500 text-sm">連鎖餐飲集團</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200/30">
                        <div className="text-xl font-bold text-slate-900 mb-1">2.8x</div>
                        <div className="text-slate-600 text-xs">用戶價值</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200/30">
                        <div className="text-xl font-bold text-slate-900 mb-1">+92%</div>
                        <div className="text-slate-600 text-xs">活躍度提升</div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm">建立完整的用戶營運生態系統，大幅提升平台黏性與服務使用頻率</p>
                  </div>
                </div>
              </div>

              {/* 案例 3 - 線上教育 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="relative h-48 bg-gradient-to-br from-slate-50 to-green-50/50 overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=Modern%20online%20education%20classroom%20with%20advanced%20learning%20technology%20and%20interactive%20displays%2C%20contemporary%20educational%20environment%20with%20students%20engaged%20in%20digital%20learning%2C%20sophisticated%20e-learning%20platform%20interface%20on%20multiple%20screens%2C%20professional%20education%20technology%20setting%20with%20natural%20lighting%20and%20clean%20modern%20design&width=400&height=192&seq=bicome-education-modern-2024&orientation=landscape"
                        alt="線上教育業成功案例"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg text-slate-700 font-bold border border-slate-200/50">
                        <i className="ri-graduation-cap-line text-lg"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-lg font-bold text-slate-900 mb-1">數位學習教育</div>
                      <div className="text-slate-500 text-sm">知名線上教育平台</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200/30">
                        <div className="text-xl font-bold text-slate-900 mb-1">+82%</div>
                        <div className="text-slate-600 text-xs">續課率</div>
                      </div>
                      <div className="text-center p-4 bg-slate-50/80 backdrop-blur-sm rounded-xl border border-slate-200/30">
                        <div className="text-xl font-bold text-slate-900 mb-1">+65%</div>
                        <div className="text-slate-600 text-xs">完課率</div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-sm">運用遊戲化學習機制與活躍社群互動，顯著提升學員學習成效與整體滿意度</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 統計數據 - 權威展示 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-16 border border-slate-200/50 shadow-xl">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                    累積服務成果
                  </h3>
                  <p className="text-xl text-slate-600 font-light">用真實數據證明我們的專業實力與服務價值</p>
                </div>

                <div className="grid md:grid-cols-4 gap-12">
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-300">200+</div>
                    <div className="text-slate-600 font-medium">成功服務品牌</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-300">75%</div>
                    <div className="text-slate-600 font-medium">平均留存提升</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-300">3.2x</div>
                    <div className="text-slate-600 font-medium">價值增長倍數</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-all duration-300">12h</div>
                    <div className="text-slate-600 font-medium">快速響應時間</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section - 專業權威 */}
        <div id="about" className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Left Content */}
              <div className="space-y-10">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
                    <span className="text-slate-600 font-medium text-sm">ABOUT BICOME</span>
                  </div>
                  <h2 className="text-5xl font-black leading-tight mb-8">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    台灣用戶營運
                  </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    領導者
                  </span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Bicome 致力於透過用戶營運、忠誠計劃、社群營運三大核心服務，
                    協助品牌與用戶建立深度用戶關係，實現品牌的永續經營與價值最大化。
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <i className="ri-lightbulb-line text-slate-700 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">創新驅動思維</h3>
                      <p className="text-slate-600 leading-relaxed">結合最新AI數據科學與深度用戶心理學，創造突破性的營運策略與解決方案</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <i className="ri-team-line text-slate-700 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">頂尖專業團隊</h3>
                      <p className="text-slate-600 leading-relaxed">擁有豐富實戰經驗的用戶營運專家團隊，深度了解市場特性與消費行為</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-200/50 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <i className="ri-trophy-line text-slate-700 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-300">卓越服務成果</h3>
                      <p className="text-slate-600 leading-relaxed">已成功協助 200+ 品牌實現用戶價值最大化，建立市場領先的長期競爭優勢</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image - 專業團隊展示 */}
              <div className="relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <img
                      src="https://readdy.ai/api/search-image?query=Professional%20diverse%20business%20team%20collaboration%20in%20modern%20Taiwan%20corporate%20headquarters%2C%20sophisticated%20conference%20room%20with%20contemporary%20design%20and%20natural%20lighting%2C%20executive%20meeting%20with%20advanced%20data%20analytics%20displays%20on%20premium%20monitors%2C%20elegant%20corporate%20atmosphere%20with%20refined%20interior%20design%20and%20collaborative%20workspace%20environment&width=600&height=400&seq=bicome-team-executive-2024&orientation=landscape"
                      alt="Bicome 專業團隊"
                      className="relative w-full h-80 object-cover rounded-3xl shadow-2xl border border-slate-200/50 group-hover:shadow-3xl transition-all duration-500"
                      loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - 優雅升級 */}
        <div className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-slate-200/50 mb-6">
                <span className="text-slate-600 font-medium text-sm">GET STARTED</span>
              </div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
                開啟品牌成長新篇章
              </h2>
              <p className="text-xl text-slate-600 font-light">讓 Bicome 成為您最信賴的用戶營運夥伴，攜手創造品牌的無限價值與可能</p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden">
                <div className="grid lg:grid-cols-5">

                  {/* Left - Contact Info */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                    </div>

                    <div className="relative space-y-10">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">立即開始合作</h3>
                        <p className="text-slate-300 leading-relaxed">
                          我們的專業團隊隨時準備為您量身打造最適合的用戶營運解決方案
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                            <i className="ri-phone-line text-white text-lg"></i>
                          </div>
                          <div>
                            <div className="font-semibold">專業諮詢</div>
                            <div className="text-slate-300 text-sm">立即預約免費策略分析</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 group">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                            <i className="ri-mail-line text-white text-lg"></i>
                          </div>
                          <div>
                            <div className="font-semibold">bd@bicome.cc</div>
                            <div className="text-slate-300 text-sm">專業團隊快速回覆</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-white/10">
                        <div className="text-slate-300 mb-4 font-medium text-sm">追蹤我們的最新動態</div>
                        <div className="flex space-x-3">
                          <button
                              onClick={() => handleSocialClick('line')}
                              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                              title="Line 官方帳號"
                          >
                            <i className="ri-chat-3-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
                          </button>
                          <button
                              onClick={() => handleSocialClick('lineoa')}
                              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                              title="Line 客服"
                          >
                            <i className="ri-customer-service-2-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
                          </button>
                          <button
                              onClick={() => handleSocialClick('tiktok')}
                              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                              title="TikTok 頻道"
                          >
                            <i className="ri-tiktok-line text-lg group-hover:scale-110 transition-transform duration-300"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Contact Form */}
                  <div className="lg:col-span-3 p-12">
                    <form onSubmit={handleContactSubmit} data-readdy-form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-slate-900 font-semibold mb-3 text-sm">您的姓名 *</label>
                          <input
                              type="text"
                              name="name"
                              required
                              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-900 transition-all duration-300 placeholder-slate-500 text-sm"
                              placeholder="請輸入您的姓名"
                          />
                        </div>

                        <div>
                          <label className="block text-slate-900 font-semibold mb-3 text-sm">聯絡電話</label>
                          <input
                              type="tel"
                              name="phone"
                              className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-900 transition-all duration-300 placeholder-slate-500 text-sm"
                              placeholder="請輸入聯絡電話"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-900 font-semibold mb-3 text-sm">電子郵件 *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-900 transition-all duration-300 placeholder-slate-500 text-sm"
                            placeholder="請輸入電子郵件"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-900 font-semibold mb-3 text-sm">公司名稱</label>
                        <input
                            type="text"
                            name="company"
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-900 transition-all duration-300 placeholder-slate-500 text-sm"
                            placeholder="請輸入公司名稱"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-900 font-semibold mb-3 text-sm">最感興趣的服務</label>
                        <select
                            name="service"
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-900 pr-8 transition-all duration-300 text-sm"
                        >
                          <option value="">請選擇服務項目</option>
                          <option value="用戶營運">用戶營運</option>
                          <option value="忠誠計劃">忠誠計劃</option>
                          <option value="社群營運">社群營運</option>
                          <option value="全方位解決方案">全方位解決方案</option>
                          <option value="其他需求">其他需求</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-900 font-semibold mb-3 text-sm">需求描述</label>
                        <textarea
                            name="message"
                            maxLength={500}
                            rows={4}
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none text-slate-900 transition-all duration-300 placeholder-slate-500 text-sm"
                            placeholder="請詳細描述您的需求與期望目標，我們將為您量身打造最適合的解決方案..."
                        ></textarea>
                        <div className="text-xs text-slate-500 mt-2">最多 500 字元</div>
                      </div>

                      <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white py-4 px-8 rounded-xl font-semibold whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        立即開始合作之旅
                      </button>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - 強化號召 */}
        <div className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-8 text-center">
            <div className="text-white space-y-10">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
                準備好讓品牌價值突破極限了嗎？
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
                加入 200+ 成功品牌的卓越行列，開啟您的用戶營運轉型新篇章，<br className="hidden lg:block" />
                讓每一位用戶都成為品牌最堅實的支持者
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">

                <button
                    // 使用 'as HTMLElement' 向 TypeScript 保證該元素具備 click() 方法
                    onClick={() =>
                        (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()
                    }
                    className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                >
                  立即預約免費策略諮詢
                </button>

                <button
                    onClick={() => document.querySelector('form')?.scrollIntoView({behavior: 'smooth'})}
                    className="group relative border-2 border-white/50 hover:border-white text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer backdrop-blur-sm transform hover:-translate-y-0.5"
                >
                  <span className="relative">發送詳細需求規劃</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - 專業完善 */}
        <footer className="relative bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="grid md:grid-cols-4 gap-16 mb-16">

              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-8">
                  <img
                      src="https://static.readdy.ai/image/b2dbfa5c4fa9886922c19710ac4fc101/50bc65c791a21dcf044a54e5b294b29c.png"
                      alt="Bicome Logo"
                      className="w-12 h-12 object-contain mr-4"
                  />
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Bicome
                    </div>
                    <div className="text-slate-600 font-medium text-sm">用戶忠誠營運專家</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-md">
                  透過用戶營運、忠誠計劃、社群營運三大核心服務，
                  協助品牌實現用戶價值最大化與品牌永續經營
                </p>
                <div className="flex space-x-3">
                  <button
                      onClick={() => handleSocialClick('line')}
                      className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-200/50 shadow-sm group"
                      title="Line 官方社群"
                  >
                    <i className="ri-chat-3-line text-slate-600 group-hover:scale-110 transition-transform duration-300"></i>
                  </button>
                  <button
                      onClick={() => handleSocialClick('lineoa')}
                      className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-200/50 shadow-sm group"
                      title="Line 客服中心"
                  >
                    <i className="ri-customer-service-2-line text-slate-600 group-hover:scale-110 transition-transform duration-300"></i>
                  </button>
                  <button
                      onClick={() => handleSocialClick('tiktok')}
                      className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-slate-200/50 shadow-sm group"
                      title="TikTok 官方頻道"
                  >
                    <i className="ri-tiktok-line text-slate-600 group-hover:scale-110 transition-transform duration-300"></i>
                  </button>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-slate-900">核心服務</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="hover:text-slate-900 transition-colors cursor-pointer">用戶營運策略</li>
                  <li className="hover:text-slate-900 transition-colors cursor-pointer">忠誠計劃設計</li>
                  <li className="hover:text-slate-900 transition-colors cursor-pointer">社群營運管理</li>
                  <li className="hover:text-slate-900 transition-colors cursor-pointer">數據分析洞察</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-6 text-slate-900">聯繫資訊</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center space-x-3">
                    <i className="ri-mail-line text-slate-500"></i>
                    <span>bd@bicome.cc</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-time-line text-slate-500"></i>
                    <span>專業服務</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 mb-4 md:mb-0 text-sm">
                © 2025 Bicome. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}