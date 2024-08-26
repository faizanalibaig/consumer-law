import React from 'react'
import Form from './Form'
import InquiryPhoto from '../../public/ThumbnailTemplate/INQUIRY DOCUMENT_page-0001.jpg'

function InquiryDocument() {
  return (
    <div>
       <Form heading={'Inquiry Document'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/inquiry-document/fill-form'} imageLink={InquiryPhoto}/>
    </div>
  )
}

export default InquiryDocument
