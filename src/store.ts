import create from "zustand";

const baseUrl = process.env.REACT_APP_API_URL 

// export const baseUrl = "http://localhost:3030";

export type UserCreds = {
  id: number;
  username: string;
  password: string;
};

export type SignupForm = {
  email: string;
  username: string;
  password: string;
};

export type SwapForm = {
  title: string;
  description: string;
  itemType: string[];
  brand: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
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
  setLoggedUser: (user: User) => void;
  items: Item[];
  userItems: Item[];
  loggedUser: User;
  setUserItems: (items: Item[]) => void;
  setItems: (items: Item[]) => void;
  createUser: (data: SignupForm) => void;
  addItem: (data: SwapForm) => void;
  getValidateCurrToken: () => void;
  logout: () => void;
  getAllItems: () => void;
  getUserItems: (id: number) => void;
};

const useStore = create<Store>((set, get) => ({
  users: [],
  items: [],
  setItems: (items) => set({ items: items }),

  userItems: [],
  setUserItems: (userItems) => set({ userItems: userItems }),

  loggedUser: {
    id: 0,
    email: "",
    username: "",
    avatar: "",
    totalCredits: 0,
    purchase: [],
    items: [],
    reviews: [],
  },
  setLoggedUser: (loggedUser) => set({ loggedUser: loggedUser }),

  createUser: (data) => {
    fetch(`${baseUrl}/signup`, {
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
      .then((resp) => resp.json())
      .then((userToken) => {
        set({ loggedUser: userToken });
      });
  },

  logout: () => {
    fetch(`${baseUrl}/logout`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Failed to logout");
        }
      })
      .then((data) => {
        console.log(data);
        setLoggedUser(null);
      })
      .catch((error) => console.error(error));
  },
  getAllItems: () => {
    fetch(`${baseUrl}/items`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((items) => {
        set({ items: items });
      });
  },
  getUserItems: (id: number) => {
    fetch(`${baseUrl}/items/${id}`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((userItems) => {
        console.log(userItems)
        set({ userItems: userItems.data });
      });
  },
}));

export default useStore;
function setLoggedUser(arg0: null) {
  throw new Error("Function not implemented.");
}
