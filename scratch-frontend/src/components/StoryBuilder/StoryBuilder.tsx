import ChatInterface from './ChatInterface'
import './StoryBuilder.css'

export default function StoryBuilder() {
  return (
    <div className="story-builder">
      <h2>Story Builder</h2>
      <h3>Chat with your agent about your book</h3>
      <ChatInterface />
    </div>
  )
}
