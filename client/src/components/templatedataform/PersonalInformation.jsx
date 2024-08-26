import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

   import { firstname, middlename,lastname,number, city, address, state, postalcode, sign, dob, personalinformation, employerinformation, currentdate } from '../../slice/personalinfoslice';

const AffidivatTemplate = () => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
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
  });
  const [errors, setErrors] = useState({
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
      dispatch(state({ state: formData.state }));
      dispatch(postalcode({ postalcode: formData.postalcode })); 
      dispatch(sign({ sign: formData.sign }));      
      dispatch(dob({ dob: formData.dob }));
      dispatch(personalinformation({ personalinformation: formData.personalinformation }));      
      dispatch(employerinformation({ employerinformation: formData.employerinformation }));   
      dispatch(currentdate({ currentdate: formData.currentdate })); 

      setFormData({
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
      });

      setErrors({
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
      });
   
      navigate('/form/template/personal-information-document')
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
        <h1 className='text-[28px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-bold py-5 sm:py-10 sm:px-[120px] lg:px-[150px] xl:px-[300px] sm:text-center'>Fill Out The Form For Personal Information Document</h1>
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
              type='text'
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
              type='text'
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
              type='date'
              name='currentdate'
              placeholder='Current Date'
              value={formData.currentdate}
              max={new Date().toISOString().split('T')[0]} 
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required />
             <span className='px-2'>Today's date</span>
            {errors.currentdate && <span className='text-red-500'>{errors.currentdate}</span>}
            </div>
          </div>
          

          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
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
              required/>
              <span className='px-2'>date of birth</span>
            {errors.dob && <span className='text-red-500'>{errors.dob}</span>}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='personalinformation'
              placeholder='Personal Information'
              value={formData.personalinformation}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.personalinformation && <span className='text-red-500'>{errors.personalinformation}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='employerinformation'
              placeholder='Employer Information'
              value={formData.employerinformation}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.employerinformation && <span className='text-red-500'>{errors.employerinformation}</span>}
            </div>
            
          </div>

          <div className='mb-20 py-8 sm:mb-0 sm:pt-14 flex justify-center'>
          <button onClick={handleSubmit} 
           className='bg-[#5586FF] w-full lg:w-auto lg:px-40 py-4 rounded-[30px] text-lg text-white 
           font-medium' >Submit</button>
           {console.log('affividat')}
          </div>
        </form>
      </section>
    </div>
  );
};

export default AffidivatTemplate;
