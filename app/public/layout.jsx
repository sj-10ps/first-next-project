
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { MessageCountProvider } from "@/context/messageCountContext"
const MainLayout = ({children}) => {
  return (
     <>
     <MessageCountProvider>
        
            <Navbar/>
            {children}
             <Footer/>
             </MessageCountProvider>
   </>
  )
}

export default MainLayout