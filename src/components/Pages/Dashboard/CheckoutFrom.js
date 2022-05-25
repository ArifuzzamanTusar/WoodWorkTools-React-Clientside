
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import fetchApi from '../../../interceptor';



const CheckoutFrom = ({ order }) => {

    const [cardSuccess, setCardSuccess] = useState('');
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, totalPrice: price, status } = order;

    useEffect(() => {
        fetchApi.post('/create-payment-intent', { price }).then(res => setClientSecret(res.data.clientSecret))
    }, [])

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setCardSuccess('');

        // confirm card payment
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.name,
                        email: order.emai
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setCardSuccess('');
        } else {
            // store database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            const { data } = fetchApi.put(`/order/${_id}`, payment)

            setCardError('');
            setTransactionId(paymentIntent.id);
            setCardSuccess('Congrats. Your Payment is completed.')
        }
    }

    return (
        <>
            {
                status === 'due' ? <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button disabled={!stripe || !clientSecret} className='btn btn-success my-3' type="submit">
                        Pay
                    </button>
                </form>
                    :
                    <h2 className='text-2xl text-primary font-bold'>Product Payment Already done</h2>
            }

            {
                cardSuccess && <div className="my-2 text-green-500">
                    <p>Success: {cardSuccess}</p>
                    <p>Your transaction ID: <span className="bg-success text-white p-2">{transactionId}</span></p>

                </div>
            }
            {
                cardError && <p className="bg-red-500 text-white rounded p-3">Error: {cardError}</p>
            }
        </>
    );
};

export default CheckoutFrom;