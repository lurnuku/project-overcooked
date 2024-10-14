import React from 'react'

import MainMenu from '../MainMenu'
import CuttingBoard from './CuttingBoard'
import IngredientsBoard from './IngredientsBoard'


const CreateOverview: React.FC = () => {
    return (
        <div className='app-container'>
            <MainMenu />
            <div className='creation-container'>
                <CuttingBoard />
                <IngredientsBoard />
            </div>
        </div>
    )
}

export default CreateOverview