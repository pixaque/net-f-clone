import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from '@/libs/prismadb';

import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;


const serverAuth = async (req: NextApiRequest) => {

    const token = await getToken({ req, secret })
    console.log("JSON Web Token", token)

    //const session = await getSession({ req });
   // console.log("Session: ", session);

    if (!token?.email) {
      throw new Error('Not signed in');
    }
    
    const currentUser = await prismadb.user.findUnique({
      where: {
        email: token?.email,
      }
    });
    
    if (!currentUser) {
      throw new Error('Not signed in');
    }
  
    console.log(currentUser)
  
    return { currentUser };
  
  /*
  const session = {
    user: {
      name: 'pixaque',
      email: 'pixaque@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/5223617?v=4'
    },
    expires: '2023-11-03T03:31:16.636Z'
  };
  */
  
}

export default serverAuth;
