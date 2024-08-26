import React from 'react'
import Form from './Form'
import BankruptcyPhoto from '../../public/ThumbnailTemplate/BANKRUPTCY DOCUMENT_page-0001.jpg'

function BankruptcyDocument() {
  return (
    <div>
       <Form heading={'BankRuptcy Document'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/bankruptcy-document/fill-form'} imageLink={BankruptcyPhoto}/>
    </div>
  )
}

export default BankruptcyDocument


