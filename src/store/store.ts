import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";

import { comments } from "api/comments";

export const store = configureStore({
  reducer: {
    [comments.reducerPath]: comments.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(comments.middleware).concat(logger),
});
setupListeners(store.dispatch);

