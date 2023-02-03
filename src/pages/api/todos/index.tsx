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
      res.json({
        code: 200,
        data: data.data
      })
    })
  // res.json({
  //   code: 200,
  //   data: [
  //     { id: 1, name: 'ndr' },
  //     { id: 2, name: 'ndr' }
  //   ]
  // })
}