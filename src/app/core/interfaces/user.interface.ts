export interface AppUser {
  uid?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  profileViews: number;
};

export interface LoginUser {
  email: string;
  password: string;
}
