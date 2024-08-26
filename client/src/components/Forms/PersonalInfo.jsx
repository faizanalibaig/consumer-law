import React from 'react'
import Form from './Form'
import PersonalThumbnail from '../../public/ThumbnailTemplate/PERSONAL INFORMATION DOCUMENT_page-0001.jpg'

function PersonalInfo() {
  return (
    <div>
       <Form heading={'Personal Information Document'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/personal-information/fill-form'} imageLink={PersonalThumbnail}/>
    </div>
  )
}

export default PersonalInfo