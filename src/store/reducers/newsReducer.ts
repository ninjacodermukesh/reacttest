import { NewsState } from "../../types/newsTypes";
import { newsActions } from "../actionTypes";

const getInitialState = (): NewsState => ({
  news: [],
});

export const newsReducer = (
  state: NewsState = getInitialState(),
  action: any
): NewsState => {
  switch (action.type) {
    case newsActions.GET_NEWS_LIST:
      return {
        ...state,
        news: action.payload,
      };

    default:
      return state;
  }
};
