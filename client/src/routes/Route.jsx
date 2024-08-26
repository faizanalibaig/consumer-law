import Home from '../app/Home.jsx'

import Layout from "../Layouts/Layout.jsx"
import RootLaytout from '../Layouts/RootLaytout.jsx'

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignIn from '../app/auth/SignIn.jsx'
import Signup from '../app/auth/Signup.jsx'

import AuthLayout from '../Layouts/AuthLayout.jsx'
import Payment from '../app/Payment.jsx'
import AffidivatTemplate from '../components/templatedataform/AffidivatTemplateForm.jsx'
import Template3Export from '../components/exporttemplates/templatexport/Template3.jsx'
import Template2Export from '../components/exporttemplates/templatexport/Template2.jsx'
import IdentityTheftTemplate from '../components/templatedataform/IdentityTheftTemplate.jsx'
import PersonalInformation from '../components/templatedataform/PersonalInformation.jsx'
import Template1Export from '../components/exporttemplates/templatexport/Template1.jsx'

import {BankruptcyDocument, AccountsDocument, AllPurposeDocument, CollectionDocument, InquiryDocument, TheftAffidavit, PersonalInfo, TheftLetter} from '../components/Forms/index.js'
import InquiryForm from '../components/templatedataform/InquiryForm.jsx'
import BankruptcyForm from '../components/templatedataform/BankruptcyForm.jsx'
import CollectionDocForm from '../components/templatedataform/CollectionDocForm.jsx'
import AllPurposeForm from '../components/templatedataform/AllPurposeForm.jsx'
import AccountsForm from '../components/templatedataform/AccountsForm.jsx'
import Template4Export from '../components/exporttemplates/templatexport/Template4Export.jsx'
import Template5Export from '../components/exporttemplates/templatexport/Template5Export.jsx'
import Template6Export from '../components/exporttemplates/templatexport/Template6Export.jsx'
import Template7Export from '../components/exporttemplates/templatexport/Template7Export.jsx'
import Template8Export from '../components/exporttemplates/templatexport/Template8Export.jsx'

 export const router= createBrowserRouter(
  createRoutesFromElements(
   <Route path='' element={<RootLaytout/>}>
   <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='form'>
       
       {/* templates creation routes */}
        <Route path='theft-letter' element={<TheftLetter/>}/>
        <Route path='personal-information' element={<PersonalInfo/>}/>
        <Route path='theft-affidavit' element={<TheftAffidavit/>}/>
        <Route path='inquiry-document' element={<InquiryDocument/>}/>
        <Route path='collection-document' element={<CollectionDocument/>}/>
        <Route path='bankruptcy-document' element={<BankruptcyDocument/>}/>
        <Route path='all-purpose-credit-document' element={<AllPurposeDocument/>}/>
        <Route path='accounts-document' element={<AccountsDocument/>}/>

        {/* Theft Letter Form */}
        <Route path='theft-letter'>
           <Route path='fill-form' element={<IdentityTheftTemplate/>}/>
        </Route>
        
        {/* Personal Information Form */}
        <Route path='personal-information'>
           <Route path='fill-form' element={<PersonalInformation/>}/>
        </Route>

         {/* Theft Affidavit Form */}
        <Route path='theft-affidavit' >
           <Route path='fill-form' element={<AffidivatTemplate/>}/>
        </Route>

        {/* Inquiry Document Form */}
        <Route path='inquiry-document' >
           <Route path='fill-form' element={<InquiryForm/>}/>
        </Route>

        {/* Collection Document */}
        <Route path='collection-document' >
           <Route path='fill-form' element={<CollectionDocForm/>}/>
        </Route>

        {/* Bankruptcy Document Form */}
        <Route path='bankruptcy-document' >
           <Route path='fill-form' element={<BankruptcyForm/>}/>
        </Route>

        {/* All Purpose Credit Document */}
        <Route path='all-purpose-credit-document' >
           <Route path='fill-form' element={<AllPurposeForm/>}/>
        </Route>

         {/* Accounts Document */}
         <Route path='accounts-document' >
           <Route path='fill-form' element={<AccountsForm/>}/>
        </Route>

          {/* Export Final Page Routes */}
        <Route path='template'>
           <Route path='affidivat-template' element={<Template3Export/>}></Route>
           <Route path='identity-theft-letter' element={<Template2Export/>}></Route>
           <Route path='personal-information-document' element={<Template1Export/>}></Route>
           <Route path='inquiry-document' element={<Template4Export/>}></Route>
           <Route path='collection-document' element={<Template5Export/>}></Route>
           <Route path='bankruptcy-document' element={<Template6Export/>}></Route>
           <Route path='all-purpose-credit-document' element={<Template7Export/>}></Route>
           <Route path='account-document' element={<Template8Export/>}></Route>

        </Route>

     </Route>
     
   </Route>
   <Route path='payment' element={<Payment/>}></Route>
   <Route path='auth' element={<AuthLayout/>}>
     <Route path='login' element={<SignIn/>}/>
     <Route path='signup' element={<Signup/>}/>
   </Route>
  </Route>))

   


      