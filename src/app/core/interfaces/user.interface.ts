export interface AppUser {
  uid?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  profileViews: number;
  plan: {
    name: userPlan;
    price: number;
  };
  emailVerified?: boolean;
};

type userPlan = 'Free' | 'Pro' | 'Premium'

export interface LoginUser {
  email: string;
  password: string;
}
