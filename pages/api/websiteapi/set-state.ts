import type { NextApiRequest, NextApiResponse } from "next";
import { setLearningState } from "@/data/state";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("1");

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  console.log("2");

  const authHeaderStrings = req.headers.authorization?.split(" ");
  let userLearningKey =
    (authHeaderStrings &&
      authHeaderStrings.length > 1 &&
      authHeaderStrings[1]) ||
    null;

  console.log("3", req.body);

  const payload = req.body;

  console.log("4");

  try {
    userLearningKey = await setLearningState(
      userLearningKey,
      payload.itemId,
      payload.itemStepId,
      payload.value
    );
    console.log("5.1");
  } catch (e) {
    console.log("error", e);
    res.status(500).send({
      message: "Failed to alter learning state due to an internal error",
    });
    console.log("5.2");
    return;
  }

  console.log("6");

  res.status(200).json({
    success: true,
    userLearningKey,
  });
  return;
}
