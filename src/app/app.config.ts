import { InjectionToken } from '@angular/core';

export interface AppConfig {
  grpcHost: string
}

const APP_DI_CONFIG: AppConfig = {
  grpcHost: 'http://localhost:50052/i/api',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const AppConfigProvider = { provide: APP_CONFIG, useValue: APP_DI_CONFIG };
