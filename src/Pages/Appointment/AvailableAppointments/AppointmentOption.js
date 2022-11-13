import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    // console.log(option); 
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white font-semibold">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;