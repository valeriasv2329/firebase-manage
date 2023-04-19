import admin from 'firebase-admin';
import appRoot from 'app-root-path';

const serviceAccountPath = appRoot.resolve('./serviceAccountKey.json');
const app = admin.initializeApp({credential: admin.credential.cert(serviceAccountPath)});

export const firestore = admin.firestore(app);