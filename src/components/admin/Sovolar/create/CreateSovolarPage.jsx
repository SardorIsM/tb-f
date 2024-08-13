import React, { useState } from 'react'

const CreateSovolarPage = () => {

    const [info, setInfo] = useState([])

    const sovolQoshish = async (e) => {
        e.preventDefault()

        let { sovol, birinchi, ikkinchi, uchinchi, tortinchi, otvet } = e.target

        setInfo((prevArray) => [...prevArray, { "sovol": sovol.value, "birinchi": birinchi.value, "ikkinchi": ikkinchi.value, "uchinchi": uchinchi.value, "tortinchi": tortinchi.value, "otvet": otvet.value }])
    }

    return (
        <div>
            <form>
                <p>Sovolar temasi:</p>
                <input type="text" placeholder='tema' />
            </form>
            <form onSubmit={(e) => sovolQoshish(e)}>
                <p>Sovol:</p>
                <input type="text" name='sovol' />
                <p>Birinchi jovop:</p>
                <input type="text" name='birinchi' />
                <p>Ikkinchi jovop:</p>
                <input type="text" name='ikkinchi' />
                <p>Uchinchi jovop:</p>
                <input type="text" name='uchinchi' />
                <p>Tortinchi jovop:</p>
                <input type="text" name='tortinchi' />
                <p>Tori jovop:</p>
                <select id="otvet">
                    <option >Birinchi jovop</option>
                    <option >Ikkinchi jovop</option>
                    <option >Uchinchi jovop</option>
                    <option >Tortinchi jovop</option>
                </select>
                <button>Qoshish</button>
            </form>
            <div>
                {
                    info?.map((inf, index) => <div key={index}>
                        <p>{index + 1}. {inf.sovol}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default CreateSovolarPage