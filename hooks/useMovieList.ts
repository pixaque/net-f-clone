import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useMovies = (film?: string, series?: string) => {
  const { data, error, isLoading } = useSwr(film ? `/api/movies?&${film}` : series ? `/api/movies?&${series}` :  '/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading
  }
};

export default useMovies;
