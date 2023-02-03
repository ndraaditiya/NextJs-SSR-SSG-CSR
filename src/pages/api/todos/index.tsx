import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  code: number,
  data: Array<Object>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch('https://calm-plum-jaguar-tutu.cyclic.app/todos')
    .then((res) => res.json())
    .then((data) => {
      const { code, data: todos } = data
      res.json({
        code,
        data: todos
      })
    })
}