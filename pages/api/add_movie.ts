import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { title, movieType, description, videoUrl, thumbnailUrl, genre, duration } = req.body;

    const movie = await prismadb.movie.create({
      data: {
        title,
        movieType,
        description,
        videoUrl,
        thumbnailUrl,
        genre,
        duration
      }
    })

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}