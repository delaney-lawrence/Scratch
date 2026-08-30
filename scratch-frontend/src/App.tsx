import './App.css'
import { StoryProvider } from './context/StoryContext'
import { StoriesPage } from './pages/StoriesPage'

function App() {
  return (
    <div>
    <h2>Scratch</h2>
    <StoryProvider>
      <StoriesPage />
    </StoryProvider>
    </div>
  )
}

export default App
