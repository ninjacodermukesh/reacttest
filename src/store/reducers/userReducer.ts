import { UserState } from '../../types/types';
import { userActions, } from '../actions/actionTypes';
import userListData from "../../userMockData.json";


const getInitialState = (): UserState => ({
  users: userListData,
});

export const userReducer = (state: UserState = getInitialState(), action: any): UserState => {
  switch (action.type) {
    
      case userActions.CREATE_USER:
      return {
        ...state,
        users: [...state.users,action.payload],
      };


      case userActions.EDIT_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
  
      case userActions.DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user !== action.payload),
        };

    default:
      return state;
  }
};
