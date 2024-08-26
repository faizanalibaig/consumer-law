import React from 'react'

import PaymentHeader from '../components/payment/PaymentHeader'
import PaymentFooter from '../components/payment/PaymentFooter'
// import ChoosePlan from '../components/payment/ChoosePlan'

const Payment = () => {
  return (
    <div>
      <PaymentHeader/>
        {/* <ChoosePlan/> */}
      <PaymentFooter/>
    </div>
  )
}

export default Payment
