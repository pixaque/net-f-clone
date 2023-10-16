import axios from 'axios';
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import useMovieList from '@/hooks/useMovieList';

import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { Checkbox, Stack, Button } from '@chakra-ui/react'


export async function getServerSideProps(context: NextPageContext) {
  
  const session = await getSession(context);

  console.log(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const AddMovie = () => {
  const { data: movies = [], isLoading } = useMovieList();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [movieType, setMovieType] = useState(true);
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnailUrl, setThumbUrl] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');

  const addMovie = useCallback(async () => {
    try {
      await axios.post('/api/add_movie', {
         title,
         movieType,
         description, 
         videoUrl, 
         thumbnailUrl,
         genre,
         duration
      })
      .then(function (response) {
        console.log(response);
        movies.push(response?.data);
        router.push('/newpopular');
      }).catch(function (error) {
        console.log(error);
      });
      
    } catch (error) {
        console.log(error);
    }
  }, [title, movieType, description, videoUrl, thumbnailUrl, genre, duration]);

  return (

    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <Navbar />
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-2xl mb-8 font-semibold">
              Add Movie
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                id="title"
                type="text"
                label="Movie Title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)} 
              />
              <div className='text-white'>
                <Checkbox 
                  id='movieType' 
                  defaultChecked
                  //onChange={(e: any) => setMovieType(e.target.checked.toString())} >
                  onChange={(e: any) => setMovieType(e.target.checked)} >
                    Series
                </Checkbox>
              </div>
              <Textarea
                id="description"
                cols={3}
                rows={2}
                label="Enter some details of movie"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)} 
              />
              <Input
                id="videoUrl"
                type="videoUrl"
                label="Add Movie URL"
                value={videoUrl}
                onChange={(e: any) => setVideoUrl(e.target.value)} 
              />
              <Input
                id="thumbnailUrl"
                type="thumbnailUrl"
                label="Add Movie Thumbnail"
                value={thumbnailUrl}
                onChange={(e: any) => setThumbUrl(e.target.value)} 
              />
              <Input
                id="genre"
                type="genre"
                label="Add Genere (Action, Thriller, Series, Darama)"
                value={genre}
                onChange={(e: any) => setGenre(e.target.value)} 
              />
              <Input
                id="duration"
                type="duration"
                label="Estimated Duration"
                value={duration}
                onChange={(e: any) => setDuration(e.target.value)} 
              />
              
            </div>
            
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <Button 
                colorScheme='green'
                className='p-2 bg-white text-lg rounded-md'
                size='lg'
                onClick={() => addMovie() }
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AddMovie;
