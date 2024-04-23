// app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpBackend, HttpClient } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: HttpClient,
      useFactory: (backend: HttpBackend) => {
        return new HttpClient(backend);
      },
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
