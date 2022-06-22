// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  production:false,
  firebase: {
    projectId: 'parkingsystem-946bf',
    appId: '1:41429715745:web:b32bf1a7f76257dd66cc60',
    storageBucket: 'parkingsystem-946bf.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCnSmV9JgTKpkDsOM_AG1o7dX6wlCKDTjo',
    authDomain: 'parkingsystem-946bf.firebaseapp.com',
    messagingSenderId: '41429715745',
    measurementId: 'G-478F9R7XY7',
  }
};

