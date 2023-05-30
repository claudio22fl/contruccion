'use client'

import { NextApiRequest, NextApiResponse } from 'next'

const handels = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200)
     return res.json({hola: 'mundo'})
}

export default handels
