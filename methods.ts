import { getUserLearningKey, setUserLearningKey } from "./data/localStorage";
import { LearningItemState } from "./types";

const getAuthHeaders = () => {
  const userLearningKey = getUserLearningKey();
  const authHeaders: HeadersInit = userLearningKey
    ? { authorization: `Bearer ${userLearningKey}` }
    : {};

  return authHeaders;
};

export const completeLearningStepState = async (
  guideId: string,
  guideChapterId: string,
  done: boolean
) => {
  const result = await fetch(`/websiteapi/set-state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify({
      itemId: guideId,
      itemStepId: guideChapterId,
      value: done,
    }),
  });

  const data = await result.json();

  setUserLearningKey(data.userLearningKey);
};

export const getLearningState = async () => {
  const result = await fetch(`/websiteapi/get-state`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  const data = (await result.json())?.learningState as LearningItemState[];

  return data;
};
