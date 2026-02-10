import "@/assets/css/global.css"
import 'photoswipe/dist/photoswipe.css'
import AuthProvider from "@/components/AuthProvider"
import { ToastContainer } from "react-toastify"
const MainLayout = ({children}) => {
  return (
    <AuthProvider>
    <html lang="en" className="smooth-scroll">
        <body >
            {children}
            <ToastContainer/>
        </body>
    </html>
    </AuthProvider>
  )
}

export default MainLayout