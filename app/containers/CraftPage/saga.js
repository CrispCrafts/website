import * as firebase from 'firebase';
import { makeSelectLocation } from 'containers/App/selectors';
import { craftLoaded, craftLoadedError } from './selectors';

export function* getCraft() {
    // Select username from store
    const location = yield select(makeSelectLocation());
    
    firebase.firestore().collection('crafts').doc(location.match.params.craft)
        .get()
        .then(snapshot => {
            // console.log(snapshot);
            yield put(craftLoaded(craft));
            /*snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            });*/
        })
        .catch(err => {
            console.log(err);
            yield put(craftLoadedError(err));
        });
}
