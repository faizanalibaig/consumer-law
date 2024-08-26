import React from 'react'
import Form from './Form'
import PersonalThumbnail from '../../public/ThumbnailTemplate/PERSONAL INFORMATION DOCUMENT_page-0001.jpg'
import AccountsPhoto from '../../public/ThumbnailTemplate/ACCOUNTS DOCUMENT_page-0001.jpg'

function AccountsDocument() {
  return (
    <div>
       <Form heading={'Accounts Document'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/accounts-document/fill-form'} imageLink={AccountsPhoto}/>
    </div>
  )
}

export default AccountsDocument



