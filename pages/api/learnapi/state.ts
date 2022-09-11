import type { NextApiRequest, NextApiResponse } from "next";
import { getEveryLearningState, getLearningState } from "@/data/state";
import { LearnApiState } from "@/types";

// You should return only learning state for authorised user based on the token obtained in Authorization HTTP header.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LearnApiState>
) {
  const userLearningKey = req.headers.authorization?.split(" ")[1] || null;

  if (userLearningKey) {
    res.status(200).json({
      learnapi: "1.0.0-rfc-0",
      state: await getLearningState(userLearningKey),
    });

    return;
  }

  // It returnes state for all users, for testing purposes.
  // You may want to change following to return only learning state for authorised user.

  res.status(200).json({
    learnapi: "1.0.0-rfc-0",
    state: await getEveryLearningState(),
  });
}
