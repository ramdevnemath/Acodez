import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

function CreateStock() {

    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        quantity: '',
        date: '',
        status: 'Available'
    })

    const handleSubmit =(e)=> {
        e.preventDefault()
        const response = axios.post('http://localhost:3000/api/add-stock', formData)
    }

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className="border-b border-gray-900/10 pb-12 p-5">
                    <h2 className="font-semibold leading-7 text-gray-900 text-2xl">Create Stock</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label for="product-id" className="block text-sm font-medium leading-6 text-gray-900">Product ID</label>
                            <div className="mt-2">
                                <input type="number" name="product-id" id="product-id" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label for="product-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                            <div className="mt-2">
                                <input type="text" name="product-name" id="product-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label for="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                            <div className="mt-2">
                                <input id="quantity" name="quantity" type="number" autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label for="date" className="block text-sm font-medium leading-6 text-gray-900">Stock Date</label>
                            <div className="mt-2">
                                <input type="date" name="date" id="date" autocomplete="address-level2" className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label for="status" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                            <div className="mt-2">
                                <select id="status" name="status" autocomplete="status-type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                    <option>Available</option>
                                    <option>Out of stock</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-start gap-x-6 ml-6">
                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form >
        </>
    )
}

export default CreateStock