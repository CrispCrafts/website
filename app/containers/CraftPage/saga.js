import * as firebase from 'firebase';
import 'firebase/firestore';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { craftLoaded, craftLoadedError } from './actions';
import { LOAD_CRAFT } from './constants';
import { makeSelectCraftId } from './selectors';

const firestore = firebase.firestore();
const CRAFTS = firestore.collection('crafts');

const craft = (craftId) => new Promise((resolve, reject) => {
    CRAFTS.doc(craftId).get().then(doc => {
        resolve(doc);
    }).catch(err => {
        reject(err);
    });
});

export function* getCraft() {
    const id = yield select(makeSelectCraftId());
    const craftDoc = yield craft(id);
    if (craftDoc.exists) {
        yield put(craftLoaded(craftDoc.data()));
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
