import * as firebase from 'firebase';
import 'firebase/firestore';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { categoriesLoaded, categoriesLoadedError, craftsLoaded, craftsLoadedError } from '../App/actions';
import { LOAD_CATEGORIES, LOAD_CRAFTS } from '../App/constants';

const firestore = firebase.firestore();
const CONFIG = firestore.collection('crisp').doc('config');
const CRAFTS = firestore.collection('crafts');

export function* getCategories() {
    console.log("GET CATEGORIES");
    yield CONFIG.get().then(doc => {
        if (!doc.exists) {
            console.log("NO DOC CONF");
            put(categoriesLoadedError('No such document'));
        } else {
            console.log(doc.data());
            put(categoriesLoaded(doc.data().categories));
        }
    }).catch(err => {
        put(categoriesLoadedError(err));
    });
}

export function* getCrafts() {
    console.log("GET CRAFTS");
    yield CRAFTS.get().then(snapshot => {
        let docs = [];
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            docs.push({...doc.data(), ["id"]: doc.id});
        });
        put(craftsLoaded(docs));
    }).catch(err => {
        put(craftsLoadedError(err));
    });
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