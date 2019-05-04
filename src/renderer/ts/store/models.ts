// import { createModel } from "@rematch/core";

const initState = [
  {
    cronJob: "",
    type: 0
  }
]

// Doesn't work with createModel yet https://github.com/rematch/rematch/issues/601
export const cronJobs = /*createModel<typeof initState>*/({
  state: initState,
  reducers: {
    add: state => [
      ...state,
      {
        cronJob: "",
        type: 0
      }
    ],
    set: (
      state,
      payload: {
        index: number,
        value: typeof initState[0]
      }
    ) => {
      state[payload.index] = payload.value;

      return [ ...state ];
    },
    remove: (state, index: number) => [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ]
  }
});
