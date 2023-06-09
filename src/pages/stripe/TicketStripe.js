import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketStripe = () => {
    const params = new URLSearchParams(window.location.search);
    const origin = params.get("routeOrigin");
    const start_time = params.get("start_time");
    const destination = params.get("routeDestination");
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
                    const response = await fetch('http://localhost:3000/api/v1/payment/ticket/', {
                        method: 'POST',
                        body: JSON.stringify({
                            origin: origin,
                            start_time: start_time,
                            destination:destination,
                            payment_token: payment_token
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                            token: `session_token=${localStorage.getItem('session_token')}`,
                        },
                    });
                    const data = await response.json();
                    if (data[0] === 200) {
                        confirm("Congratulations you purchased ticket succesfully");
                        setTimeout(function () {
                            window.location.href = 'http://localhost:5000/tickets';
                        }, 2501);
                    }
                    else {
                        notify(data[1]);
                        setTimeout(function () {
                            window.location.href = 'http://localhost:5000/tickets';
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
                    notify("error has occured while purchasing your ticket");
                    setTimeout(function () {
                        window.location.href = 'http://localhost:5000/tickets';
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

export default TicketStripe;
