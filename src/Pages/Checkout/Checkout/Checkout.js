import React from 'react';
const Checkout = () => {
    return (
        <div className='container'>
            <h2>Your Subjects:  </h2>
            <div>
                <form>
                    <input type="text" name="name" id="" placeholder='Your Full Name' />
                    <br />
                    <br />
                    <input className='w-50' type="email" name="email" id="" placeholder='Email Address' />
                    <br />
                    <br />
                    <input className='w-50' type="number" name="phone" id="" placeholder='Your Phone Number' />
                    <br />
                    <br />
                    <input className='w-50' type="text" name="address" id="" placeholder='Your Address' />
                    <br />
                    <br />
                    <input
                        className='w-50 mx-auto btn btn-info mt-2'
                        type="submit"
                        value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;