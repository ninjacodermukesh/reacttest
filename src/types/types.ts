import { NewsState } from "./newsTypes";
import { UserState } from "./userTypes";
export interface RootState {
  users: UserState;
  news: NewsState;
}
