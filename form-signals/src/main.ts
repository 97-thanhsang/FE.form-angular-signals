import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
if (environment.prod) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[importProvidersFrom(BrowserModule)]
})
  .catch((err) => console.error(err));
