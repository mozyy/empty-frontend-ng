import { InjectionToken } from '@angular/core';

interface AppConfig {
  grpcHost: string
}

export const EMPTY_DI_CONFIG: AppConfig = {
  grpcHost: 'http://localhost:50052/i/api',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
