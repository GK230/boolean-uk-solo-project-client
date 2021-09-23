import create from "zustand";

let baseUrl = "http://localhost:3030";

export type UserCreds = {
  id: number;
  username: string;
  password: string;
};

export type SignupForm = {
  email: string;
  username: string;
  avatar: string;
  password: string;
};

export type SwapForm = {
  itemImages: string;
  title: string;
  description: string;
  itemType: string[];
  brand: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
  // password: string;
  avatar: string;
  totalCredits: Number;
  purchase?: Purchase[];
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
  users: User[];
  items: Item[];
  loggedUser: User;
  setLoggedUser: (arg: User) => void;
  createUser: (data: SignupForm) => void;
  addItem: (data: SwapForm) => void;
  getValidateCurrToken: () => void;
}

const useStore = create<Store>((set, get) => ({
  users: [],
  items: [],
  loggedUser: {
    id: 0,
    email: "",
    username: "",
    avatar: "",
    totalCredits: 0,
    purchase: [],
    items: [],
    reviews: []
  },
	setLoggedUser: (loggedUser) => set({ loggedUser: loggedUser }),
  
  

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
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((newItem) => set({ items: [...get().items, newItem] }));
  },
  getValidateCurrToken: () => {
    fetch(`${baseUrl}/validate-token`, {
      credentials: "include",
    })
      .then(resp => resp.json())
      .then(userToken => {
        set({ loggedUser: userToken })
      })
  },
  
}));

export default useStore;
