import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center m-5 px-6 py-4 bg-black shadow-md'>
            <div className="text-xl font-bold">Source Thread</div>
            <ul className="flex space-x-6 text-gray-700 font-medium">
                <li>Tech</li>
                <li>Travel</li>
                <li>Life</li>
                <li className="text-blue-600 font-semibold">Blog</li>
                <li>Help</li>
                <li>Login</li>
                <li>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Sign up
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;