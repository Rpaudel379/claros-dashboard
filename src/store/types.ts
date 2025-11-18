import type { store } from ".";

// this will give the types of the states
export type RootState = ReturnType<typeof store.getState>;

// this will give the types of the dispatches
export type AppDispatch = typeof store.dispatch;

export type ItemState = {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
};

export type DashboardState = {
  items: ItemState[];
  loading: boolean;
  error: string | null;
};

export type FilterState = {
  query: string;
  filter: string;
};

export type PaginationState = {
  page: number;
  total: number;
};
