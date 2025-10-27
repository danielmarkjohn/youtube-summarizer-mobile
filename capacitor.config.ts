import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'youtube-summarizer-mobile',
  webDir: 'dist',
  server: {
    // Enable live reload during development
    url: 'https://youtube-summarizer-rahuls360.vercel.app',
    cleartext: true
  }
};

export default config;


