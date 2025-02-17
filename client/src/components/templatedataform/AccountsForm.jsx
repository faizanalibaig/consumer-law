import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { firstname, middlename, lastname, number, dob, state, city, postalcode, address, account, disputeReasonInBulletList } from '../../slice/accountsslice';


const AccountsForm = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const [formData, setFormData] = useState({
  firstname: '',
  middlename:'',
  lastname:'',
  state: '',
  postalcode: '',
  city: '',
  address: '',
  number:'',
  dob:'',
  account:'',
  disputeReasonInBulletList:''
 });

 const [errors, setErrors] = useState({
  firstname: '',
  middlename:'',
  lastname:'',
  state: '',
  postalcode: '',
  city: '',
  address: '',
  number:'',
  dob:'',
  account:'',
  disputeReasonInBulletList:''
});

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
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
    e.preventDefault();
    dispatch(firstname({ firstName: formData.firstname }));
    dispatch(middlename({ middleName: formData.middlename }));
    dispatch(lastname({ lastName: formData.lastname }));

    dispatch(city({ city: formData.city }));
    dispatch(state({ state: formData.state }));
    dispatch(postalcode({ postalcode: formData.postalcode }));
    dispatch(dob({ dob: formData.dob }));
    dispatch(number({ number: formData.number }));


    dispatch(account({ account: formData.account }));
    dispatch(disputeReasonInBulletList({ disputeReasonInBulletList: formData.disputeReasonInBulletList }));

    console.log('Form submitted successfully');
    navigate('/form/template/account-document')}
    else{
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
     <h1 className='text-[28px] sm:text-[38px] lg:text-[45px] xl:text-[50px] font-bold py-5 sm:py-10 sm:px-[120px] lg:px-[150px] xl:px-[300px] sm:text-center'>Fill Out The Form For Accounts Document</h1>
   </section>
   <section className='flex flex-col sm:gap-5 w-[90%] lg:w-[80%]'>      <form onSubmit={handleSubmit}>
   <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-3 py-3'>
            <div className='flex flex-col gap-2'>
             <input
              type='text'
              name='firstname'
              placeholder='First Name'
              value={formData.firstname}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
            />
            {errors.firstname && <span className='text-red-500'>{errors.firstname}</span>}
            </div>
            <div className='flex flex-col gap-2'>
             <input
              type='text'
              name='middlename'
              placeholder='Middle Name'
              value={formData.middlename}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
              />
            {errors.middlename && <span className='text-red-500'>{errors.middlename}</span>}
            </div>
            <div className='flex flex-col gap-2'>
             <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              value={formData.lastname}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
              />
            {errors.lastname && <span className='text-red-500'>{errors.lastname}</span>} 
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


          <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-3 py-5'>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='account'
              placeholder='Account'
              value={formData.account}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
              />
            {errors.account && <span className='text-red-500'>{errors.account}</span>}
            </div>
            <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='disputeReasonInBulletList'
              placeholder='Dispute Reason In Bullet List'
              value={formData.disputeReasonInBulletList}
              onChange={handleChange}
              className='h-[60px] border-2 border-black/20 px-5 text-lg rounded-[12px]'
              required
              />
            {errors.disputeReasonInBulletList && <span className='text-red-500'>{errors.disputeReasonInBulletList}</span>}
            </div>
          </div>
       
          <div className='mb-20 py-8 sm:mb-0 sm:pt-14 flex justify-center'>
          <button type='submit' className='bg-[#5586FF] w-full lg:w-auto lg:px-40 py-4 rounded-[30px] text-lg text-white font-medium'>Submit</button>

           </div>
        
      </form>
      </section>  
    </div>
 );
};

export default AccountsForm;
