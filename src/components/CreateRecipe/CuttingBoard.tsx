import React from 'react'

import Input from '../Input'


const CuttingBoard: React.FC = () => {
  return (
    <div className='board w-70'>
      <Input
        placeholder='my-placeholder'
        type='text'
        name='name'
        label='Name'
      />
    </div>
  )
}

export default CuttingBoard