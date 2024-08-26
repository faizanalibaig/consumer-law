import React from 'react'
import Form from './Form'
import PersonalThumbnail from '../../public/ThumbnailTemplate/PERSONAL INFORMATION DOCUMENT_page-0001.jpg'
import AllPurposePhoto from '../../public/ThumbnailTemplate/ALL PURPOSE CREDIT DOCUMENT_page-0001.jpg'

function AllPurposeDocument() {
  return (
    <div>
       <Form heading={'All Purpose Credit Document'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/all-purpose-credit-document/fill-form'} imageLink={AllPurposePhoto}/>
    </div>
  )
}

export default AllPurposeDocument




