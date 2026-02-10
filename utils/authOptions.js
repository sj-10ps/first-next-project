import connectDB from '@/config/config'
import User from '@/models/User'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt:'consent',
                    access_type:'offline',
                    response_type:'code'
                }
            }
        })
    ],
    callbacks:{
        //invoked on successfull signin
        async signIn({ profile }){
          //1.connect to database
          await connectDB()
          //2.check if user already exists
           const userExists=await User.findOne({email:profile.email})
        
          //3.if not add user to database
            if(!userExists){
            const username=profile.name.slice(0,20)
            await User.create({
                email:profile.email,
                username,
                image:profile.picture
            })
          }
          //4.return true to allow the signin
          return true
        },
        async session({session}){
            //1.get the user from the database,
            const user=await User.findOne({email:session.user.email})
            //2.assign userId to the session,
            session.user.id=user._id.toString()
            //3.return session
            return session
        }
    }
}