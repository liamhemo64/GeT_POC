@echo off
echo 🚀 Launching Pixel 9 Emulator...
start "" "C:\Users\Li-am Hemo\AppData\Local\Android\Sdk\emulator\emulator.exe" -avd Pixel_9_Pro

echo ⏳ Waiting for emulator to initialize...
timeout /t 10

echo 📱 Starting Local Development Server...
:: You do NOT need the --android flag anymore because the custom app handles it natively
call npx expo start --clear
