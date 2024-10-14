import React from 'react'

import { useHistory } from 'react-router-dom'


const MainMenu: React.FC = () => {
    const history = useHistory()

    const parts = [
        {
            option: 'Create',
            onClick: () => history.push('/create/')
        },
        {
            option: 'My Recipes',
            onClick: () => history.push('/my-recipes/')
        },
        {
            option: 'Ingredients',
            onClick: () => history.push('/ingredients/')
        }
    ]

    return (
        <div className='main-menu'>
            <div className='clickable'>
                Logo
            </div>
            {
                parts.map((part) => (
                    <div
                        className='clickable'
                        onClick={part.onClick}
                    >
                        {part.option}
                    </div>
                ))
            }
            <div className='clickable'>
                Profile
            </div>
        </div>
    )
}

export default MainMenu