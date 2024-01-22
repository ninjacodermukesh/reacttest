export interface UserData {
  id: number;
  userName: string;
  fullName: string;
}

export interface UserState {
  users: UserData[];
  selectedUser: any;
}
