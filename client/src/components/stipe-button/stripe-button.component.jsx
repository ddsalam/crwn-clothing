import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IKSfaGnZseeSghFaTDIoSkeTaqmNNZALTzkU8rGT1uMHBYOrPSf8llpEgVdbvEJAj9QmaY3p5w7IsBAn5QNNgUq00mD5HktTT';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesfull');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
