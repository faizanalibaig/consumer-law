import React from 'react'
import Form from './Form'

import CollectionPhoto from "../../public/ThumbnailTemplate/COLLECTION DOCUMENT_page-0001.jpg"

function CollectionDocument() {
  return (
    <div>
       <Form heading={'Collection Document'} des={'Use our Lease Agreement to rent out your residential property.'} link={'/form/collection-document/fill-form'} imageLink={CollectionPhoto}/>
    </div>
  )
}

export default CollectionDocument

