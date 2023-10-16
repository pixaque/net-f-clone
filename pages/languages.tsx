import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import Navbar from '@/components/Navbar';

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

const Languages = () => {

    return (
      <>
      <Navbar />
      <div className="pt-20 pb-40">
        
      
      <div className="px-4 md:px-12 mt-4 space-y-8">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Browse By Languages</p>
            <div className="grid grid-cols-4 gap-2 text-white">
                Nothing found...
            </div>
        </div>
        </div>

    </div>
    </>
    );
  }
  
  export default Languages;
