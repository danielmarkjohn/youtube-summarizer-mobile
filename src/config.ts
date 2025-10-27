// WebView Configuration
export const config = {
  // URL of the web app to load in the WebView
  // Change this to your production URL when deploying
  webAppUrl: import.meta.env.VITE_WEB_APP_URL || 'http://172.24.48.1:3000',
  
  // Splash screen minimum display time (ms)
  minSplashDuration: 1000,
  
  // App name displayed on splash screen
  appName: 'YouTube Summarizer',
};

