GOLD SCALPER AI — ANDROID PERSONAL PROTOTYPE

WHAT THIS VERSION DOES
- Responsive dark UI designed for Android.
- Embeds TradingView XAU/USD chart and indicator summary.
- Timeframe buttons: 1m, 3m, 5m, 15m, 30m, 1h, 4h, 1D.
- Manual rule-based signal panel (you enter indicator readings; no fabricated automated signal).
- Risk/reward calculator.

IMPORTANT LIMITATIONS
- This is a web app prototype, not a compiled Android APK.
- TradingView embed requires internet and may show a broker-specific quote.
- It does not currently have an independent raw market-data API.
- Automatic signals, live USD/INR numeric quote, MCX live quote and background alerts require suitable licensed market-data/API integrations and testing.
- No trading signal is guaranteed accurate.

HOW TO OPEN ON ANDROID
1. Extract this ZIP on your phone.
2. To use it as a web app, these files need to be hosted on a static HTTPS host. Opening index.html directly may show the chart, but PWA install/service worker won't work reliably from a local file.
3. Open the hosted HTTPS address in Chrome.
4. Chrome menu (three dots) > Add to Home screen / Install app if offered.

NEXT DEVELOPMENT STAGE
Connect an approved live data provider that supports XAU/USD candles, USD/INR and MCX Gold, then calculate EMA/RSI/MACD and signals from raw candle data. Never enter API secrets in a public client-side app.
