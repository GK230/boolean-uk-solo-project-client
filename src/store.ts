import create from "zustand";

export type SignupForm = {
  email: string;
  username: string;
  avatar: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  avatar: string;
  totalCredits: Number;
  purchasese?: Purchase[];
  Items?: Item[];
  reviews?: Review[];
};

export type Purchase = {
  id: number;
  userId: number;
  date: string;
  credits: number;
  image: string;
  itemId: number;
};

export type Item = {
  id: number;
  userId: number;
  credits: number;
  image: string;
  title: string;
  description: string;
  itemTypes: string[];
  brand: string;
  review?: string;
};

export type Review = {
  id: number;
  userId: number;
  itemId: number;
  review: string;
};

type Store = {
  createUser: (data: SignupForm) => void;
  users: User[];
};

const useStore = create<Store>((set, get) => ({
  users: [],

  createUser: (data) => {
    fetch("http://localhost:3030/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((newUser) => set({ users: [...get().users, newUser] }));
  },
}));

export default useStore;
