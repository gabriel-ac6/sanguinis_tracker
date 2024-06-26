import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule),
  ],
};

bootstrapApplication(AppComponent, updatedAppConfig)
  .catch((err) => console.error(err));
