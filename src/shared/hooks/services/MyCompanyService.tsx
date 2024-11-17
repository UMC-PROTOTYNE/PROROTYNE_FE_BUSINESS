import { AxiosResponse } from "axios";
import { API, getAccess } from "@/shared";

export const MyCompanyService = () => {

    const myCompany = async () => {
        const {
            data: {
                result: myCompany,
            },
        } = (await API.get("/my", {
            headers: {
                "Authorization": getAccess(),
            }
        })) as AxiosResponse<Company.MyCompanyResDto>;
        return myCompany;
    }
  return { myCompany };

};
