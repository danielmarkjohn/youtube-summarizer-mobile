# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Start Your Web App
Make sure your YouTube Summarizer web app is running on `http://localhost:3000`

```bash
# In your web app directory
npm start
# or
npm run dev
```

### Step 2: Start the Shell App
In this directory, run:

```bash
npm run dev
```

### Step 3: Test the Features
The shell app will open in your browser. Test these features:

- ✅ **Splash Screen** - You'll see it while loading
- ✅ **WebView** - Your app loads inside
- ✅ **Pull-to-Refresh** - Swipe down to reload
- ✅ **Navigation** - Use back/forward buttons
- ✅ **Offline Mode** - Disconnect internet to see offline page

## 📱 Test on Mobile

### iOS Simulator
```bash
npm run build
npx cap add ios
npx cap sync
npx cap open ios
```

### Android Emulator
```bash
npm run build
npx cap add android
npx cap sync
npx cap open android
```

## ⚙️ Configuration

### Change the URL
Edit `.env` file (create if it doesn't exist):

```bash
VITE_WEB_APP_URL=http://localhost:3000
```

Or edit `src/config.ts` directly:

```typescript
export const config = {
  webAppUrl: 'http://localhost:3000',
  appName: 'YouTube Summarizer',
};
```

### For Production
Create `.env.production`:

```bash
VITE_WEB_APP_URL=https://your-production-url.com
```

## 🎨 Customize

### App Name
Edit `src/config.ts`:
```typescript
appName: 'Your App Name'
```

### Splash Screen Colors
Edit `src/components/SplashScreen.css`:
```css
.splash-screen {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

### Remove Navigation Buttons
In `src/pages/Home.tsx`, delete lines 152-175 (the Navigation Controls section)

## 🐛 Troubleshooting

### WebView shows blank screen
- ✅ Check your web app is running on the configured URL
- ✅ Check browser console for errors
- ✅ Verify URL in `.env` or `src/config.ts`

### Pull-to-refresh not working
- ✅ Only works on mobile devices/emulators
- ✅ Try on actual device or use browser dev tools mobile mode

### Offline page not showing
- ✅ Actually disconnect from internet (don't just stop the server)
- ✅ Check browser console for network errors

## 📚 More Information

- **Full Setup Guide**: See `WEBVIEW_SETUP.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`

## 🎯 What This Does

This shell app:
1. Wraps your web app in a native container
2. Adds native-like features (splash, offline, pull-to-refresh)
3. Helps avoid app store review issues
4. Allows you to update your web app without app store approval

## 🔄 Development Workflow

1. Develop your main app as a web app
2. Test in this shell app
3. Deploy web app to production
4. Update shell app URL to production
5. Build and submit to app stores
6. Future updates: Just update your web app!

## ✨ Next Steps

1. Test all features locally
2. Customize branding (colors, app name)
3. Test on real devices
4. Deploy web app to production
5. Build native apps for iOS/Android
6. Submit to app stores

---

**Need Help?** Check the detailed documentation in `WEBVIEW_SETUP.md`

