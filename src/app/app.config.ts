import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"mile-9f0ed","appId":"1:1030817982044:web:f73d9efa4c45fe2acb6899","storageBucket":"mile-9f0ed.appspot.com","apiKey":"AIzaSyC-Ib0RiLX_8XWhUvQHwnXFkIvOYt6itA8","authDomain":"mile-9f0ed.firebaseapp.com","messagingSenderId":"1030817982044"})), provideFirestore(() => getFirestore())]
};
