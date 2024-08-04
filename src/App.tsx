import React from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.scss'

import RecipeBoard from './components/recipeBoard/RecipeBoard'
import TopBar from './components/topBar/TopBar'
import Ingredients from './components/ingredients/Ingredients'
// import Login from './components/login/Login'


const App: React.FC = () => (
  <DndProvider backend={HTML5Backend}>
    <div className='app--container'>
      <TopBar />
      <div className='mainboard'>
        {/* <Login /> */}
        <RecipeBoard />
        <Ingredients />
      </div>
    </div>
  </DndProvider>
)

export default App