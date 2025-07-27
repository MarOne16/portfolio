import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Home Page</h1>
            <p className="text-lg text-gray-700">
                Welcome to our website! We are excited to have you here. Explore our services and learn more about what we offer.
            </p>
            <div className="mt-6 w-96">
                <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-800">Service 1: Web Development</li>
                    <li className="text-gray-800">Service 2: Mobile App Development</li>
                    <li className="text-gray-800">Service 3: Cloud Solutions</li>
                    <li className="text-gray-800">Service 4: Data Analytics</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Page;
