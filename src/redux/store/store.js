import { configureStore } from '@reduxjs/toolkit';
import LoggedInPerson from '../Features/LoggedInPerson/LoggedInPerson'
export const store = configureStore({
  reducer: {
    person:LoggedInPerson
  },
});