import { API } from "@/shared";

export const ReviewService = () => {
  const getReviews = async (
    const {
      data: { result },
    }= (await API.get("/login", {
      username: username,
      password: password,
    })) as AxiosResponse<Company.SignInResDto>;
  ) => {};
  const getReview = async () => {};
  return { getReviews, getReview };
};
