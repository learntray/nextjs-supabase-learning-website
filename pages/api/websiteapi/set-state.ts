import type { NextApiRequest, NextApiResponse } from "next";
import { setLearningState } from "@/data/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const authHeaderStrings = req.headers.authorization?.split(" ");
  let userLearningKey =
    (authHeaderStrings &&
      authHeaderStrings.length > 1 &&
      authHeaderStrings[1]) ||
    null;

  const payload = req.body;

  try {
    userLearningKey = await setLearningState(
      userLearningKey,
      payload.itemId,
      payload.itemStepId,
      payload.value
    );
  } catch (e) {
    res.status(500).send({
      message: "Failed to alter learning state due to an internal error",
    });
    return;
  }

  res.status(200).json({
    success: true,
    userLearningKey,
  });
  return;
}
