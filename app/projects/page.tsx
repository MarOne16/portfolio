import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-gray-700">
                Here are some of our recent projects showcasing our expertise and innovation.
            </p>
            <div className="mt-6 w-96">
                <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-800">Project 1: Innovative Web Application Development</li>
                    <li className="text-gray-800">Project 2: Mobile App for Enhanced User Experience</li>
                    <li className="text-gray-800">Project 3: Cloud Solutions for Scalable Infrastructure</li>
                    <li className="text-gray-800">Project 4: Data Analytics Platform for Business Insights</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Page;
