import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import postSage from "./post";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSage)]);
}
