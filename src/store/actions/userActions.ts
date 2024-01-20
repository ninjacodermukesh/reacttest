import { UserData } from "../../types/types";
import { userActions } from "./actionTypes";

export const doCreateUser = (payload: UserData) => {
  return async (dispatch: any) => {
    return dispatch({
      type: userActions.CREATE_USER,
      payload: payload,
      status:200,
      success:true
    });
  };
};

export const doEditUser = (payload: UserData) => {
  return async (dispatch: any) => {
   return dispatch({
      type: userActions.EDIT_USER,
      payload: payload,
      status:200,
      success:true
    });
  };
};

export const doDeleteUser = (userDetails: UserData) => {
  return async (dispatch: any) => {
    return dispatch({
      type: userActions.DELETE_USER,
      payload: userDetails,
      status:200,
      success:true
    });
  };
};

