import "@/assets/css/global.css"

const MainLayout = ({children}) => {
  return (
    <html lang="en" className="smooth-scroll">
        <body >
            {children}
        </body>
    </html>
  )
}

export default MainLayout