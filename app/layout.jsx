import "@/assets/css/global.css"
import Navbar from "@/components/Navbar"
const MainLayout = ({children}) => {
  return (
    <html lang="en" className="smooth-scroll">
        <body>
            <Navbar/>
            {children}
        </body>
    </html>
  )
}

export default MainLayout