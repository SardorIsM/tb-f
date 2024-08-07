import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Login, All, Main
} from '../pages'


const RoutesWrapper = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />





                <Route path='/admin' element={<Login />} />

                



                <Route path='*' element={<All />} />


            </Routes>
        </div>
    )
}

export default RoutesWrapper