'use client';

import { useState } from 'react';

export default function GoldenPipsAlerts() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 50);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  const telegramLink = 'https://t.me/Goldenpipsalert918';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">GP</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Golden Pips</span>
            </div>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                    Golden Pips
                  </span>
                  <br />
                  Alerts
                </h1>
                <p className="text-xl text-slate-300">
                  Professional Trading Signals & Market Alerts
                </p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed">
                Get real-time, accurate trading signals directly to your phone. Our expert analysts provide daily market insights and profitable trading opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Join Our Telegram Channel
                </a>
                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-200">
                  Learn More
                </button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-yellow-400">10K+</p>
                  <p className="text-slate-400">Active Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">98%</p>
                  <p className="text-slate-400">Win Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">24/7</p>
                  <p className="text-slate-400">Signals</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl"></div>
                <svg viewBox="0 0 300 400" className="w-full h-auto relative z-10" xmlns="http://www.w3.org/2000/svg">
                  <rect x="60" y="240" width="20" height="80" fill="#D4AF37" />
                  <rect x="100" y="200" width="20" height="120" fill="#D4AF37" />
                  <rect x="140" y="160" width="20" height="160" fill="#D4AF37" />
                  <rect x="180" y="120" width="20" height="200" fill="#D4AF37" />
                  <line x1="50" y1="280" x2="220" y2="80" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" />
                  <polygon points="220,80 200,100 220,120" fill="#D4AF37" />
                  <text x="150" y="340" fontSize="36" fontWeight="bold" fill="#D4AF37" textAnchor="middle" fontFamily="Arial, sans-serif">
                    GOLDEN
                  </text>
                  <text x="150" y="375" fontSize="36" fontWeight="bold" fill="#D4AF37" textAnchor="middle" fontFamily="Arial, sans-serif">
                    PIPS
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-yellow-400">Golden Pips?</span>
            </h2>
            <p className="text-xl text-slate-300">
              Industry-leading trading signals with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 border border-yellow-400/20 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Real-Time Alerts</h3>
              <p className="text-slate-300">Get instant notifications of trading opportunities as they occur</p>
            </div>

            <div className="bg-slate-700/50 border border-yellow-400/20 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Expert Analysis</h3>
              <p className="text-slate-300">Detailed market analysis from professional traders</p>
            </div>

            <div className="bg-slate-700/50 border border-yellow-400/20 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">High Accuracy</h3>
              <p className="text-slate-300">98% win rate with precise entry and exit points</p>
            </div>

            <div className="bg-slate-700/50 border border-yellow-400/20 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Secure & Reliable</h3>
              <p className="text-slate-300">Premium channel with verified signals</p>
            </div>

            <div className="bg-slate-700/50 border border-yellow-400/20 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Easy Access</h3>
              <p className="text-slate-300">Receive signals on Telegram anytime, anywhere</p>
            </div>

            <div className="bg-slate-700/50 border border-yellow-400/20 hover:border-yellow-400/50 rounded-lg p-6 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Profit Growth</h3>
              <p className="text-slate-300">Consistent returns with risk management</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="text-yellow-400">Works</span>
            </h2>
            <p className="text-xl text-slate-300">Get started in just 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Join Channel</h3>
              <p className="text-slate-300">Click the button and join our Telegram channel</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Receive Signals</h3>
              <p className="text-slate-300">Get real-time trading signals with detailed analysis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow
