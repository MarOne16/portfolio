import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700">
                We would love to hear from you! Please reach out with any questions or feedback.
            </p>
            <form className="mt-6 w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded" required></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Message</button>
            </form>
            
        </div>
    );
}

export default Page;
