import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Dashboard from './Dashboard/Dashboard'
import Login from './login/Login'
import Register from './Register/Register'

function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </main>

        </>
    )
}

export default Layout