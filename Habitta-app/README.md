# Habitta – Personal Progress Tracker

## Use own self : https://aakashpuri786.github.io/Habitta-app/ 
## Or: https://htmlpreview.github.io/?https://github.com/Aakashpuri786/10-useful-projects/blob/main/Habitta-app/index.html
// go to this website and do the task here and complete the task for own development 
## Folder Structure
- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `service-worker.js`
- `icons/icon.svg`

## Run Locally (Laptop)
1. Open a terminal in this folder.
2. Start a local server:
   - `python -m http.server 5173`
3. Open the app in your browser:
   - `http://localhost:5173`

## Install to Android Home Screen (Recommended)
Service workers need a secure context. The easiest way is to serve the app from your phone so it runs on `localhost`.

1. Install **Termux** (free) from F-Droid.
2. Copy the project folder to your phone storage.
3. In Termux:
   - `pkg install python`
   - `cd /sdcard/<your-folder>/Habitta-app`
   - `python -m http.server 5173`
4. On your phone, open Chrome and visit:
   - `http://localhost:5173`
5. Wait for the app to fully load once (this caches offline assets).
6. Tap the Chrome menu (three dots) and select **Add to Home screen**.

## Alternative (If you want to load from laptop)
If you open the app from `http://<laptop-ip>:5173`, the service worker will not register because it is not HTTPS. To fix that, use any free HTTPS static host (GitHub Pages, Netlify, etc.) for the one-time install, then the app works offline.

## Offline Use
- After the first secure load, the app works offline.
- All data is stored locally in `localStorage` on your device.

## Notes
- Chart.js is loaded once from a CDN and cached by the service worker.
- To remove or reset all data, clear the browser site data for this app.
