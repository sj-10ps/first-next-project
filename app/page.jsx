import Footer from '@/components/Footer'
import Link from 'next/link'
import { redirect } from 'next/navigation'


const Homepage = () => {
  
  return (
    <div>
       {redirect('/public')}
    </div>
  )
}

export default Homepage