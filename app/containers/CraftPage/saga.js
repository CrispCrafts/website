import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { craftLoaded, craftLoadedError } from './actions';
import { LOAD_CRAFT } from './constants';
import { makeSelectCraftId } from './selectors';


const firestore = firebase.firestore();
const STORAGE = firebase.storage().ref();
const CRAFTS = firestore.collection('crafts');

const craft = (craftId) => new Promise((resolve, reject) => {
    CRAFTS.doc(craftId).get().then(doc => {
        resolve(doc);
    }).catch(err => {
        reject(err);
    });
});

const writeup = (craftId) => new Promise((resolve, reject) => {
    STORAGE.child(`${craftId}/writeup.md`).getDownloadURL().then(url => {
        console.log("FOUND IT");
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.onload = function(event) {
            var blob = xhr.responseText;
            resolve(blob);
        };
        xhr.open('GET', url, true);
        xhr.send();
    }).catch(err => {
        switch (err.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              console.log("FILE DOES NOT EXIST");
              resolve({});
              break;
            case 'storage/unauthorized':
                console.log("UNAUTH");
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
                console.log("CANCELED");
              // User canceled the upload
              break;
            case 'storage/unknown':
                console.log("UNKNOWN");
              // Unknown error occurred, inspect the server response
              break;
            default: {            
                console.log("ERR", err);
                reject({err});
            }

        }
    });
});

export function* getCraft() {
    const id = yield select(makeSelectCraftId());
    const craftDoc = yield craft(id);
    if (craftDoc.exists) {
        const w = yield writeup(id);

        const c = {
            ...craftDoc.data(),
            writeup: w
        };

        yield put(craftLoaded(c));
    } else {
        yield put(craftLoadedError(craftDoc));
    }
}

export default function* craftDetail() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield [
    takeLatest(LOAD_CRAFT, getCraft),
  ];
}

/*
import * as firebase from 'firebase';
import 'firebase/firestore';
import { makeSelectLocation } from 'containers/App/selectors';
import { craftLoaded, craftLoadedError } from './selectors';
import { LOAD_CRAFT } from './constants';

const CRAFTS = firebase.firestore().collection('crafts');

const craft = (craftId) => new Promise((resolve, reject) => {
    CRAFTS.doc(craftId).get().then(doc => {
        resolve(doc);
    }).catch(err => {
        reject(err);
    });
});

export function* getCraft() {
    // Select username from store
    const location = yield select(makeSelectLocation());
    
    const c = yield craft(location.match.params.craft);
    if (c) {
        yield put(craftLoaded(c));
    } else {
        yield put(craftLoadedError(c));
    }
}

export defualt function* craftDetail() {
    yield [
        takeLatest(LOAD_CRAFT, getCraft),
    ];
}
*/
