import { put, takeEvery, all } from "redux-saga/effects";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync({ value }) {
  yield delay(1000);
  yield put({ type: "INCREMENT", value });
  yield delay(1000);
  yield put({ type: "DECREMENT", value: 3 });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
