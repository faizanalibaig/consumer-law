import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstName:"",
    middleName:"",
    lastName:"",
    address:"",
    city:"",
    number:"",
    state:"",
    sign:"",
    postalcode:"",
    dob:'',
}

const identitytheftslice= createSlice({
    name:"identifyTheftLetter",
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
       state: (state, action)=>{
         state.state=action.payload.state
       },
       postalcode: (state, action)=>{
         state.postalcode=action.payload.postalcode
       },
       dob: (state, action)=>{
         state.dob=action.payload.dob
       },
       sign: (state, action)=>{
         state.sign=action.payload.sign
       }
    }
})

export const {firstname, middlename,lastname,number, city, address, state, postalcode, dob, sign}= identitytheftslice.actions
export default identitytheftslice.reducer