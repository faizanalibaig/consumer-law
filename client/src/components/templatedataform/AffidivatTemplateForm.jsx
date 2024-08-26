import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

   import { firstname, 
        middlename, 
        lastname, 
        number, 
        date, 
        city, 
        address,
        state,
        postalcode,
        sign,
        dob,
        timeataddress,
        dateidentitytheftstarted,
        todayscurrentdate,
        amountspentfixingcredit,
        MyName, 
        day, 
        month, 
        year, 
        before, 
        notarypublic, 
        nameTyped, 
        commissionexpires,
        licensenumber } from '../../slice/affidivatslice';

const AffidivatTemplate = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    number: '',
    date: '',
    state:'',
    postalcode:'',
    sign:'',
    dob:'',
    timeataddress:'',
    dateidentitytheftstarted:'',
    amountspentfixingcredit:'',
    licensenumber:'',
    MyName:'', day:'', month:'', year:'', before:'', notarypublic:'', nameTyped:'', commissionexpires:''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    number: '',
    date: '',
    state:'',
    postalcode:'',
    sign:'',
    dob:'',
    timeataddress:'',
    dateidentitytheftstarted:'',
    amountspentfixingcredit:'',
    licensenumber:'',
    MyName:'', day:'', month:'', year:'', before:'', notarypublic:'', nameTyped:'', commissionexpires:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? '' : `${name} is required`,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((value) => value);

    if (isValid) {
      dispatch(firstname({ firstName: formData.firstName }));
      dispatch(middlename({ middleName: formData.middleName }));
      dispatch(lastname({ lastName: formData.lastName }));
      dispatch(address({ address: formData.address }));
      dispatch(city({ city: formData.city }));
      dispatch(number({ number: formData.number }));
      dispatch(date({ date: formData.date }));
      dispatch(state({ state: formData.state }));
      dispatch(postalcode({ postalcode: formData.postalcode })); 
      dispatch(sign({ sign: formData.sign }));      
      dispatch(dob({ dob: formData.dob })); 

      dispatch(timeataddress({ timeataddress: formData.timeataddress }));
      dispatch(dateidentitytheftstarted({ dateidentitytheftstarted: formData.dateidentitytheftstarted })); 
      dispatch(amountspentfixingcredit({ amountspentfixingcredit: formData.amountspentfixingcredit }));    
      
      dispatch(MyName({ MyName: formData.MyName }));
      dispatch(day({ day: formData.day })); 
      dispatch(month({ month: formData.month }));      
      dispatch(year({ year: formData.year })); 
      dispatch(before({ before: formData.before }));
      dispatch(notarypublic({ notarypublic: formData.notarypublic })); 
      dispatch(nameTyped({ nameTyped: formData.nameTyped }));      
      dispatch(commissionexpires({ commissionexpires: formData.commissionexpires }));    
      dispatch(licensenumber({ licensenumber: formData.licensenumber }));    

      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        city: '',
        number: '',
        date: '',
        state:'',
        postalcode:'',
        dob:'',
        timeataddress:'',
        dateidentitytheftstarted:'',
        amountspentfixingcredit:'',
        licensenumber:'',
        MyName:'', day:'', month:'', year:'', before:'', notarypublic:'', nameTyped:'', commissionexpires:''
      });

      setErrors({
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        city: '',
        number: '',
        date: '',
        state:'',
        postalcode:'',
        dob:'',
        timeataddress:'',
        dateidentitytheftstarted:'',
        amountspentfixingcredit:'',
       licensenumber:'',
       MyName:'', day:'', month:'', year:'', before:'', notarypublic:'', nameTyped:'', commissionexpires:''
      });
   
      navigate('/form/template/affidivat-template')
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...Object.entries(formData).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value ? '' : `${key} is required`,
          }),
          {}
        ),
      }));
    }
  };

  return (
    <div className='h-auto flex flex-col items-center'>
      <section className='px-5 sm:px-0 sm:pt-10 lg:pt-0'>
        <h1 className='text-[28px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-bold py-5 sm:py-10 sm:px-[120px] lg:px-[150px] xl:px-[300px] sm:text-center'>Fill Out The Form For Identity Theft Affidivat</h1>
      </section>
      <section className='flex flex-col sm:gap-5 w-[90%] lg:w-[80%]'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-3 py-3'>
            <div className='flex flex-col gap-2'>
             <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.firstName && <span className='text-red-500'>{errors.firstName}</span>}
            </div>
            <div className='flex flex-col gap-2'>
             <input
              type='text'
              name='middleName'
              placeholder='Middle Name'
              value={formData.middleName}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.middleName && <span className='text-red-500'>{errors.middleName}</span>}
            </div>
            <div className='flex flex-col gap-2'>
             <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.lastName && <span className='text-red-500'>{errors.lastName}</span>} 
            </div>
            
           
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='address'
              placeholder='Address'
              value={formData.address}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.address && <span className='text-red-500'>{errors.address}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='city'
              placeholder='City'
              value={formData.city}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.city && <span className='text-red-500'>{errors.city}</span>}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='state'
              placeholder='State'
              value={formData.state}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.state && <span className='text-red-500'>{errors.state}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='number'
              name='postalcode'
              placeholder='Postal Code'
              value={formData.postalcode}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.postalcode && <span className='text-red-500'>{errors.postalcode}</span>}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='number'
              name='number'
              placeholder='SS Number'
              value={formData.number}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.number && <span className='text-red-500'>{errors.number}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='number'
              name='licensenumber'
              placeholder='License Number'
              value={formData.licensenumber}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
              />
            {errors.licensenumber && <span className='text-red-500'>{errors.licensenumber}</span>}
              </div>
            
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='timeataddress'
              placeholder='Time Since At This Address'
              value={formData.timeataddress}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.timeataddress && <span className='text-red-500'>{errors.timeataddress}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='date'
              name='dateidentitytheftstarted'
              placeholder='Date Identity Theft Started'
              value={formData.dateidentitytheftstarted}
              max={new Date().toISOString().split('T')[0]} 
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
              <span className='px-2'>date identity theft started</span>
            {errors.dateidentitytheftstarted && <span className='text-red-500'>{errors.dateidentitytheftstarted}</span>}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          {/* <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='todayscurrentdate'
              placeholder='Todays Current Date'
              value={formData.todayscurrentdate}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.todayscurrentdate && <span className='text-red-500'>{errors.todayscurrentdate}</span>}
            </div> */}
            <div className='flex flex-col gap-2'>
            <input
              type='date'
              name='date'
              placeholder='Todays Date'
              value={formData.date}
              max={new Date().toISOString().split('T')[0]} 
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            <span className='px-2'>today's date</span>
            {errors.date && <span className='text-red-500'>{errors.date}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='amountspentfixingcredit'
              placeholder='Amount Spent Fixing Credit'
              value={formData.amountspentfixingcredit}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.amountspentfixingcredit && <span className='text-red-500'>{errors.amountspentfixingcredit}</span>}
            </div>
          </div>

          <div className='grid grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='sign'
              placeholder='Signature'
              value={formData.sign}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.sign && <span className='text-red-500'>{errors.sign}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='date'
              name='dob'
              placeholder='Date of Birth'
              value={formData.dob}
              max={new Date().toISOString().split('T')[0]}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            <span className='px-2'>date of birth</span>
            {errors.dob && <span className='text-red-500'>{errors.dob}</span>}
            </div>
          </div>

          <section className='my-10 py-10  border-2 border-black/20 px-5 rounded-[12px] text-lg'>
            <p>
            I, <input type="text" name='MyName' value={formData.MyName} onChange={handleChange} required placeholder='____________________________________' className='outline-none'/>. a Notary Public, do hereby certify that on this  <input type="text"  name='day' value={formData.day} onChange={handleChange} required  placeholder='__________________' className='outline-none'/> day of <input type="text"  name='month' value={formData.month} onChange={handleChange} required  placeholder=' ___________________' className='outline-none'/>, 20 <input type="text"  name='year' value={formData.year} onChange={handleChange} required  placeholder=' __________________' className='outline-none'/>, personally appeared before me <input type="text"   name='before' value={formData.before} onChange={handleChange} required  placeholder=' ____________________________' className='outline-none'/>, known to me to be the person whose name is subscribed to the foregoing
           instrument ,and swore and acknowledged to me that he executed the same for the purpose and in the capacity therein expressed, and that the statements contained therein are true and correct.
           <br/>
           <br/>
           <br/>
           <span >Notary Public, State of <input type="text" name='notarypublic' 
           value={formData.notarypublic} onChange={handleChange} required  placeholder=' __________________________________________' className='outline-none'/></span>
           <br/>
           <br/>
           <br/>
           <span>Name, Typed or Printed: <input type="text"  name='nameTyped' value={formData.nameTyped} onChange={handleChange} required  placeholder=' __________________________________________' className='outline-none'/></span>
           <br/>
           <br/>
           <br/>
           <span>My Commission Expires: <input type="text" name='commissionexpires' 
           value={formData.commissionexpires} onChange={handleChange} required  placeholder='  __________________________________________' className='outline-none'/></span>
            </p>
          </section>


          <div className='mb-20 py-8 sm:mb-0 sm:pt-14 flex justify-center'>
          <button onClick={handleSubmit} 
           className='bg-[#5586FF] w-full lg:w-auto lg:px-40 py-4 rounded-[30px] text-lg text-white 
           font-medium' >Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AffidivatTemplate;
