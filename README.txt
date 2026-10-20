Gold Scalper AI V3 — Android/GitHub Pages prototype

What changed:
- Removed Entry/SL/TP calculator.
- Uses Binance public spot klines for PAXGUSDT (if endpoint accessible from user's network).
- Timeframes: 1m, 3m, 5m, 15m.
- Custom canvas candlestick chart with rule-based BUY/SELL markers.
- EMA 9/20 + RSI + closed candle breakout/breakdown checks.
- Automatic recent swing support/resistance.
- FAST and CONFIRMED modes; confirmed mode checks 5m trend.
- Optional browser notifications while page is open.

Important:
- PAXG/USDT is tokenized gold, not broker XAU/USD. It can diverge in price/candles/liquidity.
- Rules are illustrative and unbacktested; no guaranteed accuracy and no trade execution.
- Public API/network access may be unavailable or restricted in some regions.
- Keep app open for refresh/notifications. Background notifications are not guaranteed.
- This frontend contains no API secret.
- After uploading all 3 files to the GitHub Pages repo, hard-refresh the site. If data shows Offline, test the endpoint or network availability.
