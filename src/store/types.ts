import type { store } from ".";

// this will give the types of the states
export type RootState = ReturnType<typeof store.getState>;

// this will give the types of the dispatches
export type AppDispatch = typeof store.dispatch;
