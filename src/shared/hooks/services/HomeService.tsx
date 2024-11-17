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

    const deleteProduct = async (productId: number) => {
      console.log(productId);
        const data = (await API.delete(`/products/${productId}`, {
            headers: {
                "Authorization": getAccess(),
            },
        })) as AxiosResponse<Company.DeleteProductResDto>;
        return data;
    }
    
    const deleteInvestment = async (investmentId: number) => {
        const data = (await API.delete(`/events/${investmentId}`, {
            headers: {
                "Authorization": getAccess(),
            },
        })) as AxiosResponse<Company.DeleteInvestmentResDto>;
        return data;
    }
  return { products, events, deleteProduct, deleteInvestment };

};
