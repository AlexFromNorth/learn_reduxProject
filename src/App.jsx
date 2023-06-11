
import './index.css'
import RecipeItem from './recipe-item/RecipeItem'

function App() {

  return (
    <div>
      <RecipeItem recipe={{
        id: 1,
        name: 'Лазанья',
      }}/>
      <RecipeItem recipe={{
        id: 2,
        name: 'Пирог',
      }}/>
      <RecipeItem recipe={{
        id: 3,
        name: 'Борщ',
      }}/>
    </div>
  )
}

export default App
