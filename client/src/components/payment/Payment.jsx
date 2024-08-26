import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const SubscribeButton = ({ planType, planID, userID }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/payment/subscribe', {
        _id: "66002750654573f14f538ef9",
        planType: "TRIAL",
        planID: "price_1OzuYDCP79PNi6t6Ctk07LU8",
      });
      const { client_secret } = response.data;
      redirectToCheckout(client_secret);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const redirectToCheckout = async (clientSecret) => {
    const stripe = await loadStripe('pk_test_51O8bTnCP79PNi6t63LX568vGxYNILEUD0qc5ayUKJHm2xQ5sYzXOeiOvIATkMSTQSqfeRUePjzstsT8TtuCTkB3U000GxB1XEc');
    const { error } = await stripe.redirectToCheckout({
      sessionId: clientSecret,
    });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSubscribe} disabled={loading}>
        Subscribe
      </button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default SubscribeButton;
