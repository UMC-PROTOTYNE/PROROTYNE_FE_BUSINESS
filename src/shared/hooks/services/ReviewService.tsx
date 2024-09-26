import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { API } from "@/shared";

export const ReviewService = () => {
  const URI = "/review";
  let onPenalty = false;

  const useGetReviews = (id: string) => {
    return useQuery({
      queryKey: ["reviews", id],
      queryFn: async () => {
        const { data } = (await API.get(
          `${URI}/${id}`
        )) as AxiosResponse<Review.GetReviewsResDto>;

        return data;
      },
      enabled: !!id,
    });
  };

  const useGetReview = (investmentId: string, userId: string) => {
    return useQuery({
      queryKey: ["reviews", investmentId, userId, onPenalty],
      queryFn: async () => {
        const { data } = (await API.get(
          `${URI}/${investmentId}/${userId}`
        )) as AxiosResponse<Review.GetReviewResDto>;

        return data;
      },
      enabled: !!investmentId || !!userId,
    });
  };

  const grantPenalty = async (investmentId: string, userId: string) => {
    const { data } = (await API.patch(
      `${URI}/${investmentId}/${userId}`
    )) as AxiosResponse<Review.GetReviewResDto>;

    onPenalty = true;

    return data;
  };

  return { useGetReviews, useGetReview, grantPenalty };
};
