import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d8ce768802b44008acb026ad219a0cbb',
  appName: 'visionary-ui-mock',
  webDir: 'dist',
  server: {
    url: 'https://d8ce7688-02b4-4008-acb0-26ad219a0cbb.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Haptics: {
      enable: true
    }
  }
};

export default config;