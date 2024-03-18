import React, { useState } from 'react'
import Profile from '../Profile/Profile'
import Upgrade from '../Upgrade/Upgrade'
import Topup from '../Topup Credit/Topup'

const ProfileRouting = () => {

    const [step, setstep] = useState(1)
    return (
        <div>
            { step === 1 && <Profile setstep = {setstep} /> }
            { step === 2 && <Upgrade setstep = {setstep} /> }
            { step === 3 && <Topup setstep = {setstep} /> }
        </div>
    )
}

export default ProfileRouting