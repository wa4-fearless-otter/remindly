import { createStore, Store } from '@blue-tomato/use-retext';

interface Reminder {
  minute?: number;
  hour?: number;
  dotm?: number;
  month?: number;
  dotw?: number;
}

const reminder: Reminder = {
  minute: 0,
};

const [Store, useStore] = createStore({
  state: {
    reminders: [reminder],
  },
  reducer: {
    setSearchTerm: (state, payload) => ({ ...state, searchTerm: payload }),
    sideMenu: {
      toggle: state => ({ ...state, isOpen: !state.reminders }),
    },
  },
});

export default Store;
export { useStore };
