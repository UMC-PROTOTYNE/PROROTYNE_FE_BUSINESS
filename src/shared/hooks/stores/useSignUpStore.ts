import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useSignUpStore = create<Company.SignUpStore>()(
  immer((set, get) => ({
    //State
    username: "",
    password: "",
    name: "",
    regNumber: "",
    phone: "",
    email: "",
    address: "",
    category: "",
    size: "",
    status: "대기",

    setUserAllInfo: (value) => {
      set((state) => {
        for (const key in value) {
          if (value[key as keyof typeof value]) {
            state[key as keyof typeof state] = value[
              key as keyof typeof value
            ] as never;
          }
        }
      });
    },

    getUserAllInfo: () => ({
      username: get().username,
      password: get().password,
      name: get().name,
      regNumber: get().regNumber,
      phone: get().phone,
      email: get().email,
      address: get().address,
      category: get().category,
      size: get().size,
      status: get().status,
    }),

    setUsername: (value) => {
      set(() => ({ username: value }));
    },
    setPassword: (value) => {
      set(() => ({ password: value }));
    },
    setName: (value) => {
      set(() => ({ name: value }));
    },
    setRegNumber: (value) => {
      set(() => ({ regNumber: value }));
    },
    setPhone: (value) => {
      set(() => ({ phone: value }));
    },
    setEmail: (value) => {
      set(() => ({ email: value }));
    },
    setAddress: (value) => {
      set(() => ({ address: value }));
    },
    setCategory: (value) => {
      set(() => ({ category: value }));
    },
    setSize: (value) => {
      set(() => ({ size: value }));
    },
    setState: (value) => {
      set(() => ({ status: value }));
    },
  }))
);
