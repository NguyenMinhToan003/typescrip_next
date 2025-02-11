import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { CustomCredentialsSignin } from './utils/error'
import axiosInstance from './utils/axios'
import { IUser } from './types/next-auth'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        try{
          const res = await axiosInstance.post<IBackendRes<User>>('/auth/login', {
            email: credentials.email,
            password: credentials.password,
          })
          const user = res.data.data as User
          return user
        }
        catch(error){
          const { data } = (error as any).response
          throw new CustomCredentialsSignin<string>(data?.data, data?.message, data?.statusCode)
        }
      },
    }),
  ],
  pages:{
    signIn: '/auth/login',
  },
    //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
  callbacks: {
      jwt({ token, user }) {
        if (user) {
          token.user = user.user
          token.accessToken = user.accessToken
        }
        return token
      },
      session({ session, token }) {
        (session.user as IUser) = token.user
        session.accessToken = token.accessToken
        return session
    },
      authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
    },
})