import { isSsr } from "../utils";

export const getUserLearningKey = () => {
  return isSsr ? null : localStorage.getItem("userLearningKey");
};

export const setUserLearningKey = (userLearningKey: string) => {
  !isSsr && localStorage.setItem("userLearningKey", userLearningKey);
};
