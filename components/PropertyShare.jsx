
import React from 'react'
import { FacebookShareButton,TwitterShareButton ,WhatsappShareButton,EmailShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon} from 'react-share'

const PropertyShare = ({data}) => {
    const shareurl=`${process.env.NEXT_PUBLIC_DOMAIN}/public/properties/${data._id}`
  return (
    <div className='bg-white p-2 shadow-lg'>
        <h2 className='text-lg font-bold text-center mb-2'>Share The Property</h2>
      <div className='flex flex-row gap-2 justify-center'>
       <FacebookShareButton
        url={shareurl}
        quote={data.name}
        hashtag={`#${data.type} for rent`}

       >
        <FacebookIcon size={40} round={true}/>
       </FacebookShareButton>

       <TwitterShareButton url={shareurl} title={data.name} hashtags={[`${data.type} for rent`]}>
           <TwitterIcon size={40} round={true}/>
       </TwitterShareButton>

        <WhatsappShareButton url={shareurl} title={data.name} separator='\n'>
           <WhatsappIcon size={40} round={true}/>
       </WhatsappShareButton>

       <EmailShareButton url={shareurl} subject={data.name} body={`check out the property ${shareurl}`}>
                  <EmailIcon size={40} round={true}/>
       </EmailShareButton>
      </div>
    </div>
  )
}

export default PropertyShare




 