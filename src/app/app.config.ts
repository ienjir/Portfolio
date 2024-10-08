import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Import the routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  // Use the imported routes
    provideClientHydration(),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'de', 'es', 'fr'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    })
  ]
};
