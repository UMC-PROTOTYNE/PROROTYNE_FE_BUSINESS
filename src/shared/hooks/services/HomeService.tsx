import { AxiosResponse } from "axios";

import { API, getAccess } from "@/shared";

export const HomeService = () => {

  const products = async () => {
    const {
        data: {
          result: products,
        },
      } = (await API.get("/products", {
        headers: {
          "Authorization": getAccess(),
        }
      })) as AxiosResponse<Company.ProductsResDto>;
      return products;
    };

    const events = async () => {
        const {
            data: {
                result: events,
            },
        } = (await API.get("/events", {
        headers: {
            "Authorization": getAccess(),
        }
        })) as AxiosResponse<Company.EventsResDto>;
      return events;
    };
  return { products, events };

};
