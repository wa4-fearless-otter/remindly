export const count = {
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment: (state, payload) => state + payload
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    incrementAsync: async (payload, rootState) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    }
  })
}
