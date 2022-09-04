import type { NextApiRequest, NextApiResponse } from "next";
import { getLearningState } from "../../../data/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  let userLearningKey = req.headers.authorization?.split(" ")[1] || null;

  if (!userLearningKey) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  const learningState = await getLearningState(userLearningKey);

  res.status(200).json({
    success: true,
    learningState,
  });
}
