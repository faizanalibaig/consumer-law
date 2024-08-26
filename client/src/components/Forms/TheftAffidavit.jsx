import React from 'react'
import Form from './Form'
import AffidavitThumbnail from '../../public/ThumbnailTemplate/IDENTITY THEFT AFFIDAVIT_page-0001.jpg'

function TheftAffidavit() {
  return (
    <div>
         <Form heading={'Identity Theft Affidavit'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/theft-affidavit/fill-form'} imageLink={AffidavitThumbnail}/>
    </div>
  )
}

export default TheftAffidavit