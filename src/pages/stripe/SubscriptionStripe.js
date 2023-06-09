import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const SubscriptionStripe = () => {
    const params = new URLSearchParams(window.location.search);
    const duration = params.get("duration");
    const zone_id = params.get("zone_id");
    const status = params.get("status");
    const payment_token = params.get("payment_token");
    const notify = (alert) => {
        toast.error(alert, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    const confirm = (alert) => {
        toast.success(alert, {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    useEffect(() => {
        if (status === "accepted") {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:3000/api/v1/payment/subscriptions/', {
                        method: 'POST',
                        body: JSON.stringify({
                            duration: duration,
                            zone_id: zone_id,
                            payment_token: payment_token
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            token: `session_token=${localStorage.getItem('session_token')}`,
                        },
                    });
                    const data = await response.json();
                    if (data[0] === 200) {
                        confirm("Congratulations you purchased subscription succesfully");
                        setTimeout(function () {
                            window.location.href = 'http://localhost:5000/subscription';
                        }, 2501);
                    }
                    else {
                        notify(data[1]);
                        setTimeout(function () {
                            window.location.href = 'http://localhost:5000/subscription';
                        }, 2501);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
        else {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://localhost:3000/stripe/cancel', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            token: `session_token=${localStorage.getItem('session_token')}`,
                        },
                    });
                    const data = await response.json();
                    notify("error has occured while purchasing your subscription");
                    setTimeout(function () {
                        window.location.href = 'http://localhost:5000/subscription';
                    }, 2501);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();

        }
    }, []);

    return (
        <>
            <ToastContainer />
        </>
    );
};

export default SubscriptionStripe;
