import type { NextApiRequest, NextApiResponse } from "next";
import { learningItemList } from "@/data/items";
import { LearnApiItems } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LearnApiItems>
) {
  res.status(200).json({
    learnapi: "1.0.0-rfc-0",
    items: learningItemList,
  });
}
