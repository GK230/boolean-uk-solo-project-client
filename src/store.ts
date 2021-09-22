import create from "zustand";

let baseUrl = "http://localhost:3030";

export type SignupForm = {
  email: string;
  username: string;
  avatar: string;
  password: string;
};

export type SwapForm = {
  itemImage: string;
  title: string;
  description: string;
  itemType: string;
  brand: string;
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
  addItem: (data: SwapForm) => void;
  items: Item[];
};

const useStore = create<Store>((set, get) => ({
  users: [],
  items: [],

  createUser: (data) => {
    fetch(`${baseUrl}/user`, {
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
  addItem: (data) => {
    fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((newItem) => set({ items: [...get().items, newItem] }));
  },
}));

export default useStore;
