import * as firebase from 'firebase';
import 'firebase/firestore';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { categoriesLoaded, categoriesLoadedError, craftsLoaded, craftsLoadedError } from '../App/actions';
import { LOAD_CATEGORIES, LOAD_CRAFTS } from '../App/constants';
import { makeSelectCategory } from '../App/selectors';

const firestore = firebase.firestore();

const CONFIG = firestore.collection('crisp').doc('config');
const CRAFTS = firestore.collection('crafts').orderBy('created', 'desc');

const categories = () => new Promise((resolve, reject) => {
    CONFIG.get().then(doc => {
        resolve(doc);
    }).catch(err => {
        reject(err);
    });
});

const crafts = () => new Promise((resolve, reject) => {
    CRAFTS.get().then(snapshot => {
        let docs = [];
        snapshot.forEach(doc => {
            //console.log(doc.id, '=>', doc.data());
            docs.push({...doc.data(), ["id"]: doc.id});
        });
        resolve(docs);
    }).catch(err => {
        reject(err);
    });
});

export function* getCategories() {
    const confDoc = yield categories();

    if (!confDoc.exists) {
        yield put(categoriesError('categories do not exist'));
    } else {
        yield put(categoriesLoaded(confDoc.data()['categories']));
    }
}

export function* getCrafts() {

    const receivedCrafts = yield crafts();

    if (!receivedCrafts) {
        yield put(craftsLoadedError("No crafts"));
    } else {
        yield put(craftsLoaded(receivedCrafts));
    }
}

export default function* crispData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield [
    takeLatest(LOAD_CATEGORIES, getCategories),
    takeLatest(LOAD_CRAFTS, getCrafts),
  ];
}
