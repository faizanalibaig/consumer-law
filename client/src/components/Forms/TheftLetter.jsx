import React from 'react'
import Form from './Form'
import TheftThumbnail from '../../public/ThumbnailTemplate/IDENTITY THEFT LETTER FCRA _page-0001.jpg'

function TheftLetter() {
  return (
    <div>
      <Form heading={'Identity Theft Letter FCRA'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/theft-letter/fill-form'} imageLink={TheftThumbnail}/>
    </div>
  )
}

export default TheftLetter