import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstName:"",
    middleName:"",
    lastName:"",
    address:"",
    city:"",
    number:"",
    state:"",
    postalcode:"",
    sign:"",
    dob:'',
    personalinformation:'',
    employerinformation:'',
    currentdate:''
}

const personalinfoslice= createSlice({
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
       sign: (state, action)=>{
         state.sign=action.payload.sign
       },
       dob: (state, action)=>{
         state.dob=action.payload.dob
       },
       personalinformation: (state, action)=>{
         state.personalinformation=action.payload.personalinformation
       },
       employerinformation: (state, action)=>{
         state.employerinformation=action.payload.employerinformation
       },
       currentdate: (state, action)=>{
         state.currentdate=action.payload.currentdate
       }
    
    
    }
})

export const {firstname, middlename,lastname,number, city, address, state, postalcode, sign, dob, personalinformation, employerinformation, currentdate}= personalinfoslice.actions
export default personalinfoslice.reducer