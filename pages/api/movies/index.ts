import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req);

    if(req.query.film === "" || req.query.series === ""){
      const movies = await prismadb.movie.findMany({orderBy: {
          title: "desc",
        },
        where: {
          movieType: req.query.film === "" ? false : true
        }
      });
      return res.status(200).json(movies);

    } else {

      const movies = await prismadb.movie.findMany({orderBy: {
        title: "desc",
      }
      });

      return res.status(200).json(movies);

    }

    

    
  } catch (error) {
    console.log({ error })
    return res.status(500).end();
  }
}
