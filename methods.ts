import { getUserLearningKey, setUserLearningKey } from "./data/localStorage";
import { LearningItemState } from "./types";
import { envVars } from "./utils";

export const completeLearningStepState = async (
  guideId: string,
  guideChapterId: string,
  done: boolean
) => {
  const result = await fetch(`https://${envVars.appUrl}/websiteapi/set-state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getUserLearningKey()}`,
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
      authorization: `Bearer ${getUserLearningKey()}`,
    },
  });

  const data = (await result.json())?.learningState as LearningItemState[];

  return data;
};
