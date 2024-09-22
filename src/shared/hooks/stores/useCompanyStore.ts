import { create } from "zustand";

export const useCompanyStore = create<Company.CompanyStore>((set) => ({
  id: "",
  name: "로그인이 필요합니다.",
  setCompany: (data) => {
    set(() => ({ id: data.id, name: data.name }));
  },
}));
