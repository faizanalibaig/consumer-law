import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstName:"",
    middleName:"",
    lastName:"",
    address:"",
    city:"",
    number:"",
    date:"",
    licensenumber:'',
    state:"",
    postalcode:"",
    sign:"",
    dob:'',
    timeataddress:'',
    dateidentitytheftstarted:'',
    todayscurrentdate:'',
    amountspentfixingcredit:'',
    MyName:'',
    day:'',
    month:'',
    year:'',
    before:'',
    notarypublic:'',
    nameTyped:'',
    commissionexpires:''
}

const affidivatSlice= createSlice({
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
       date: (state, action)=>{
         state.date=action.payload.date
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
       timeataddress:(state, action)=>{
        state.timeataddress=action.payload.timeataddress
      },
      dateidentitytheftstarted:(state, action)=>{
       state.dateidentitytheftstarted=action.payload.dateidentitytheftstarted
      },
      todayscurrentdate:(state, action)=>{
      state.todayscurrentdate=action.payload.todayscurrentdate
      },
      amountspentfixingcredit:(state, action)=>{
     state.amountspentfixingcredit=action.payload.amountspentfixingcredit
     },
     MyName:(state, action)=>{
    state.MyName=action.payload.MyName
    },
    day:(state, action)=>{
   state.day=action.payload.day
   },
   month:(state, action)=>{
  state.month=action.payload.month
  },
  year:(state, action)=>{
 state.year=action.payload.year
 },
 before:(state, action)=>{
state.before=action.payload.before
},
notarypublic:(state, action)=>{
state.notarypublic=action.payload.notarypublic
},
nameTyped:(state, action)=>{
state.nameTyped=action.payload.nameTyped
},
commissionexpires:(state, action)=>{
state.commissionexpires=action.payload.commissionexpires
},
licensenumber:(state, action)=>{
state.licensenumber=action.payload.licensenumber
}
    }
})

export const {firstname, middlename,lastname,number,date, city, address, state, postalcode, sign, dob, timeataddress, dateidentitytheftstarted, todayscurrentdate, amountspentfixingcredit, MyName, day, month, year, before, notarypublic, nameTyped, commissionexpires, licensenumber}= affidivatSlice.actions
export default affidivatSlice.reducer