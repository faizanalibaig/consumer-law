import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    city: "",
    number: "",
    state: "",
    postalcode: "",
    dob: "",
    disputedPersonalInformation: "",
    disputedPersonalInformationInstruction: "",
    disputedAccounts: "",
    disputedAccountsInstruction: "",
    disputedinquiries:"",
    disputedinquiresinstruction:""
  };


const allpurposecreditslice= createSlice({
    name:"allpurposecreditslice",
    initialState,
    reducers:{
      firstname: (state, action) => {
        state.firstName = action.payload.firstName;
        console.log(state.firstName)
      },           
       middlename: (state, action)=>{
         state.middleName=action.payload.middleName
         console.log(state.middleName)
       },
       lastname: (state, action)=>{
        state.lastName=action.payload.lastName
       },
       address:(state, action)=>{
         state.address=action.payload.address
       },
       city:(state, action)=>{
         state.city=action.payload.city
       },
       number: (state, action)=>{
         state.number=action.payload.number
       },
       date: (state, action)=>{
         state.date=action.payload.date
       },
       state: (state, action)=>{
         state.state=action.payload.state
       },
       postalcode: (state, action)=>{
         state.postalcode=action.payload.postalcode
       },
       dob: (state, action)=>{
         state.dob=action.payload.dob
       },
       disputedPersonalInformation:(state, action)=>{
        state.disputedPersonalInformation=action.payload.disputedPersonalInformation
      },
      disputedPersonalInformationInstruction:(state, action)=>{
       state.disputedPersonalInformationInstruction=action.payload.disputedPersonalInformationInstruction
      },
      disputedAccounts:(state, action)=>{
      state.disputedAccounts=action.payload.disputedAccounts
      },
      disputedAccountsInstruction:(state, action)=>{
     state.disputedAccountsInstruction=action.payload.disputedAccountsInstruction
     }, 
     disputedinquiries:(state, action)=>{
     state.disputedinquiries=action.payload.disputedinquiries
     },
     disputedinquiresinstruction:(state, action)=>{
    state.disputedinquiresinstruction=action.payload.disputedinquiresinstruction
    }
    }
})

export const {firstname, middlename,lastname,number,date, city, address, state, postalcode, dob,disputedPersonalInformation, disputedPersonalInformationInstruction, disputedAccounts, disputedAccountsInstruction, disputedinquiries, disputedinquiresinstruction }= allpurposecreditslice.actions
export default allpurposecreditslice.reducer
