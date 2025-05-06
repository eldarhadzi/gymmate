import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'


import {
  loadStripe
} from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// checkout form
const CheckoutForm = ({ clientSecret, onSuccess, closeModal }) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (result.error) {
      toast.error(result.error.message)
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        toast.success('Payment successful!')
        onSuccess()
      }
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Complete Your Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-full">
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
                  },
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-3 bg-primary text-white font-bold rounded-md hover:bg-hover transition duration-300"
          >
            Confirm Payment
          </button>
        </form>
        <button
          onClick={closeModal}
          className="w-full mt-2 py-3 border border-stone-500 text-gray-600 rounded-md hover:bg-red-700 hover:text-white transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  )
}


const MyAppointments = () => {

  const { backendUrl, token, getTrainersData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {

      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
        
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {

    try {

      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}})
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getTrainersData()
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  const [stripeClientSecret, setStripeClientSecret] = useState(null);
  const [showStripeForm, setShowStripeForm] = useState(false);
  
  const appointmentStripePay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/create-payment-intent',
        { appointmentId },
        { headers: { token } }
      );
  
      if (data.success) {
        setStripeClientSecret(data.clientSecret);
        setShowStripeForm(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("Stripe payment failed");
    }
  };
  


  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  },[token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>

      {showStripeForm && stripeClientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            clientSecret={stripeClientSecret}
            onSuccess={() => {
              setShowStripeForm(false);
              getUserAppointments();
            }}
            closeModal={() => {
              setShowStripeForm(false);
            }}
          />
        </Elements>
      )}

      <div>
        {
          appointments.map((item, index) => (
            <div className='grid grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div className="w-40 h-40 flex items-center justify-center bg-indigo-50 rounded-md overflow-hidden">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={item.trainerData.image}
                  alt=""
                />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.trainerData.name}</p>
                <p>
                  {
                    Array.isArray(item.trainerData.speciality)
                      ? item.trainerData.speciality.join(' | ')
                      : item.trainerData.speciality
                  }
                </p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.trainerData.address.line1}</p>
                <p className='text-xs'>{item.trainerData.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-zinc-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} |  {item.slotTime} </p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                {!item.cancelled && !item.isCompleted && item.payment && <button className='sm:min-w-48 py-2 border rounded text text-stone-500 bg-indigo-50'>Paid</button>}
                {!item.cancelled && !item.isCompleted && !item.payment && <button onClick={()=>appointmentStripePay(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
                {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-700 hover:text-white transition-all duration-300'>Cancel Appointment</button>}
                {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
                {item.isCompleted && <button className='min-w-48 py-2 border border-primary rounded text-primary'>Completed</button>}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
