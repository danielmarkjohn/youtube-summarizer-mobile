# 1. Install Android Studio
# Download from: https://developer.android.com/studio

# 2. Install Android SDK and create AVD (Android Virtual Device)
# - Open Android Studio
# - Go to Tools > AVD Manager
# - Create Virtual Device
# - Choose a device (e.g., Pixel 4)
# - Download system image (API 30+)
# - Start the emulator

# 3. Add Android platform to your Ionic project
npx cap add android

# 4. Build and sync
npm run build
npx cap sync

# 5. Run on emulator
npx cap run android