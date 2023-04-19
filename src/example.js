import {firestore} from './utils/firebase.js';
import {writeTxt} from './utils/writeTxt.js';

const data = {};

const collection = await firestore.collection('collection').get();
collection.forEach(doc => data[doc.id] = doc.data());

await writeTxt('collection', data);