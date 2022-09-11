import type { NextApiRequest, NextApiResponse } from "next";
import { getLearningState } from "@/data/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  const authHeaderStrings = req.headers.authorization?.split(" ");
  let userLearningKey =
    (authHeaderStrings &&
      authHeaderStrings.length > 1 &&
      authHeaderStrings[1]) ||
    null;

  if (!userLearningKey) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  let learningState;
  try {
    learningState = await getLearningState(userLearningKey);
  } catch (e) {
    res.status(500).send({
      message: "Failed to return learning state due to an internal error",
    });
    return;
  }

  res.status(200).json({
    success: true,
    learningState,
  });
  return;
}
