import * as firebase from 'firebase';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { categoriesLoaded, categoriesLoadingError } from 'containers/App/actions';

const CONFIG = firebase.firestore().collection('crafts').doc('config');

export default function* getCategories() {
    CONFIG.get().then(doc => {
        if (!doc.exists('categories')) {
            yield put(categoriesLoadedError('No such document'));
        } else {
            console.log(doc.data());
            yield put(categoriesLoaded(doc.data().categories));
        }
    }).catch(err => {
        yield put(categoriesLoadedError(err));
    });
}