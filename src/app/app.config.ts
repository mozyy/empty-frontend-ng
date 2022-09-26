import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export interface AppConfig {
  grpcHost: string
}

const APP_DI_CONFIG: AppConfig = {
  grpcHost: environment.grpcHost,
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const AppConfigProvider = { provide: APP_CONFIG, useValue: APP_DI_CONFIG };
