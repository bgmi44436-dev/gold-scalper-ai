Gold Scalper AI V2 — Android-friendly static web app

Files:
- index.html: app interface and tools
- manifest.json: installable web app metadata
- sw.js: minimal service worker

How to publish using GitHub mobile website:
1. Open your repository: https://github.com/bgmi4436-dev/gold-scalper-ai
2. Open index.html, tap pencil/Edit, select all old content, paste the new index.html content from this package, and commit changes.
3. For manifest.json and sw.js, replace their contents with the files in this package and commit.
4. Wait a minute, then refresh https://bgmi4436-dev.github.io/gold-scalper-ai/

Limitations:
- TradingView widgets are external embeds and do not expose raw candle data to this app.
- No automatic raw market feed, automatic BUY/SELL engine, live MCX/USD-INR quote integration, or background alert server is connected.
- Local price alerts work only after you manually enter/update the current price while the page is open.
- This is a prototype, not financial advice. Validate prices, contract sizing, and all calculations before trading.
