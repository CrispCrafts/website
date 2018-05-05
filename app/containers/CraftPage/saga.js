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
