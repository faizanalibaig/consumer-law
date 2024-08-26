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
    disputedInquiries: "",
    disputedInquiriesDate: "",
    disputedInquiriesReason: "",
    disputeInquiriesInstructions: "",
  };

// dispatch(inquiryslice.actions.setField({ field: "firstName", value: "John" }));

const inquiryslice= createSlice({
    name:"inquiryslice",
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
       disputedInquiries:(state, action)=>{
        state.disputedInquiries=action.payload.disputedInquiries
      },
      disputedInquiriesDate:(state, action)=>{
       state.disputedInquiriesDate=action.payload.disputedInquiriesDate
      },
      disputedInquiriesReason:(state, action)=>{
      state.disputedInquiriesReason=action.payload.disputedInquiriesReason
      },
      disputeInquiriesInstructions:(state, action)=>{
     state.disputeInquiriesInstructions=action.payload.disputeInquiriesInstructions
     }
    }
})

export const {firstname, middlename,lastname,number,date, city, address, state, postalcode, dob, disputedInquiries, disputedInquiriesDate, disputedInquiriesReason, disputeInquiriesInstructions}= inquiryslice.actions
export default inquiryslice.reducer
