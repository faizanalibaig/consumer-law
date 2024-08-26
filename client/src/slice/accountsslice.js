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
    account: "",
    disputeReasonInBulletList: "",
  };


const accountsslice= createSlice({
    name:"accountsslice",
    initialState,
    reducers:{
      firstname: (state, action) => {
        state.firstName = action.payload.firstName;
      },           
       middlename: (state, action)=>{
         state.middleName=action.payload.middleName
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
       account:(state, action)=>{
        state.account=action.payload.account
      },
      disputeReasonInBulletList:(state, action)=>{
       state.disputeReasonInBulletList=action.payload.disputeReasonInBulletList
      }
    }
})

export const {firstname, middlename,lastname,number,date, city, address, state, postalcode, dob, account, disputeReasonInBulletList }= accountsslice.actions
export default accountsslice.reducer
