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
    add: (state) => {
      state.push({
        cronJob: "",
        type: 0
      });

      return state;
    }
  }
});
