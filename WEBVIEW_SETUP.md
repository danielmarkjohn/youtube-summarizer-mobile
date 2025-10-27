# WebView Shell App Setup

This is a shell app that loads your YouTube Summarizer web app inside a WebView. This approach helps avoid app store review issues by keeping the main functionality in a web app.

## Features

✅ **Full-Screen WebView** - Loads your web app seamlessly  
✅ **Splash Screen** - Beautiful loading screen while the app loads  
✅ **Offline Detection** - Shows a "No Internet" page when offline  
✅ **Pull-to-Refresh** - Swipe down to reload the app (Android)  
✅ **Navigation Controls** - Back/Forward buttons for in-app navigation  
✅ **Auto-Reconnect** - Automatically reloads when connection is restored  
✅ **Configurable URL** - Easy to switch between dev and production URLs

## Configuration

### Setting the Web App URL

You can configure the URL in two ways:

#### 1. Environment Variable (Recommended for Production)

Create a `.env` file in the root directory:

```bash
VITE_WEB_APP_URL=https://your-production-url.com
```

For different environments:
- `.env.development` - Development URL
- `.env.production` - Production URL

#### 2. Direct Configuration

Edit `src/config.ts`:

```typescript
export const config = {
  webAppUrl: 'http://localhost:3000', // Change this URL
  appName: 'YouTube Summarizer',
};
```

## Development

1. **Start your web app** on `http://localhost:3000` (or your configured URL)

2. **Start the shell app**:
   ```bash
   npm run dev
   ```

3. The shell app will load your web app in a WebView

## Building for Mobile

### iOS

1. Add iOS platform:
   ```bash
   npx cap add ios
   ```

2. Build the app:
   ```bash
   npm run build
   npx cap sync
   ```

3. Open in Xcode:
   ```bash
   npx cap open ios
   ```

### Android

1. Add Android platform:
   ```bash
   npx cap add android
   ```

2. Build the app:
   ```bash
   npm run build
   npx cap sync
   ```

3. Open in Android Studio:
   ```bash
   npx cap open android
   ```

## Components

### SplashScreen
- Displays while the WebView is loading
- Shows app name and loading spinner
- Customizable in `src/components/SplashScreen.tsx`

### OfflinePage
- Displays when there's no internet connection
- Shows retry button
- Automatically retries when connection is restored

### Navigation Controls
- Back button (bottom-left)
- Forward button (bottom-right)
- Only visible when WebView is loaded
- Disabled when navigation is not possible

## Customization

### Change App Name

Edit `src/config.ts`:
```typescript
appName: 'Your App Name'
```

### Change Splash Screen Colors

Edit `src/components/SplashScreen.css`:
```css
.splash-screen {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Disable Navigation Controls

In `src/pages/Home.tsx`, remove or comment out the navigation FABs section.

### Change Pull-to-Refresh Behavior

Edit the `handleRefresh` function in `src/pages/Home.tsx`.

## Troubleshooting

### WebView not loading

1. Check that your web app is running on the configured URL
2. Check browser console for CORS errors
3. Verify the URL in `.env` or `src/config.ts`

### Pull-to-refresh not working

- Pull-to-refresh only works on mobile devices and some browsers
- Test on an actual device or emulator

### Navigation buttons not working

- Navigation state detection may be limited by CORS policies
- The back button tracks history length
- Forward detection is limited in iframes

### Offline detection not working

- Make sure your device/browser supports the `navigator.onLine` API
- Test by actually disconnecting from the internet

## Production Deployment

1. Set production URL in `.env.production`:
   ```bash
   VITE_WEB_APP_URL=https://your-production-url.com
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Sync with native platforms:
   ```bash
   npx cap sync
   ```

4. Build native apps in Xcode/Android Studio

## Security Considerations

- The iframe has limited permissions by default
- Add only necessary permissions in the `allow` attribute
- Consider implementing CSP (Content Security Policy)
- Use HTTPS in production

## Notes

- This is a wrapper app - the main logic stays in your web app
- Updates to your web app don't require app store updates
- Make sure your web app is mobile-responsive
- Test thoroughly on both iOS and Android devices

