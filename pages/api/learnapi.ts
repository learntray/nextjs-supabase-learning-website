import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  learnapi: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    learnapi: "1.0.0-rfc-0",
  });
}
