import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Login, All, Main, AdminMain, CreateSovolar
} from '../pages'


const RoutesWrapper = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />





                <Route path='/admin' element={<Login />} />
                <Route path='/admin/main' element={<AdminMain />} />
                <Route path='/admin/sovolar/create' element={<CreateSovolar />} />

                



                <Route path='*' element={<All />} />


            </Routes>
        </div>
    )
}

export default RoutesWrapper