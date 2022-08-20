import { isSsr } from "../utils";

export const getUserLearningId = () => {
  return isSsr ? null : localStorage.getItem("userLearningId");
};
