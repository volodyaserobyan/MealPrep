import React from 'react'

import './SelectPlansComplete.scss'

class SelectPlansComplete extends React.Component {

    render() {
        return (
            <section className="Complete">
                <h1>Checkout</h1>
                <div className="Complete-Cont">
                    <div className="Complete-Cont-Shipping">
                        <div className="Complete-Cont-Shipping-Address">
                            <div className="Complete-Cont-Shipping-Address-Title">
                                <h1>1. Shipping Address</h1>
                            </div>
                            <div className="Complete-Cont-Shipping-Address-Form">
                                <div className="Complete-Cont-Shipping-Address-Form-Name">
                                    <div>
                                        <p>First Name *</p>
                                        <input type='text' />
                                    </div>
                                    <div>
                                        <p>Last Name *</p>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className="Complete-Cont-Shipping-Address-Form-1">
                                    <p>Address *</p>
                                    <input type='text' />
                                </div>
                                <div className="Complete-Cont-Shipping-Address-Form-1">
                                    <p>App, Suite</p>
                                    <input type='text' />
                                </div>
                                <div className="Complete-Cont-Shipping-Address-Form-city">
                                    <div>
                                        <p>City *</p>
                                        <input type='text' />
                                    </div>
                                    <div>
                                        <p>State *</p>
                                        <input type='text' />
                                    </div>
                                    <div>
                                        <p>Zip *</p>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className="Complete-Cont-Shipping-Address-Form-1">
                                    <p>Phone *</p>
                                    <input type='text' />
                                </div>
                            </div>
                        </div>
                        <div className="Complete-Cont-Shipping-Payment">
                            <div className="Complete-Cont-Shipping-Payment-Title">
                                <h1>2. Payment Info</h1>
                            </div>
                            <div className="Complete-Cont-Shipping-Payment-Card">
                                <div className="Complete-Cont-Shipping-Payment-Card-1">
                                    <p>Card Number *</p>
                                    <input type='text' />
                                </div>
                                <div className="Complete-Cont-Shipping-Payment-Card-2">
                                    <p>Date *</p>
                                    <input type='text' />
                                </div>
                                <div className="Complete-Cont-Shipping-Payment-Card-2">
                                    <p>CVC *</p>
                                    <input type='text' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Complete-Cont-Plan">
                        <div className="Complete-Cont-Plan-Info">
                            <div className="Complete-Cont-Plan-Info-Title">
                                <h1>Your Plan</h1>
                            </div>
                            <div className="Complete-Cont-Plan-Info-Content">
                                <div>
                                    <p>First Delivery</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>Weekly Delivery Days</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="Complete-Cont-Plan-Summary">
                            <div className="Complete-Cont-Plan-Summary-Title">
                                <h1>Order Summary</h1>
                            </div>
                            <div className="Complete-Cont-Plan-Summary-Content">
                                <div>
                                    <p>12 Meal Plan</p>
                                    <p>$200.00</p>
                                </div>
                                <div>
                                    <p>Shipping</p>
                                    <p>$0.00</p>
                                </div>
                                <div>
                                    <h1> Order Tota</h1>
                                    <h1>$200.00</h1>
                                </div>
                                <button>Place your order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SelectPlansComplete