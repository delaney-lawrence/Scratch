import React, { useState } from 'react'
import './ChatInterface.css'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'Hi, I\'m your story agent! Let me know how I can help, or I can suggest some areas of improvement. For example, I can help point out contradictions in characters, help imagine detail to vague settings, or help you plot story beats'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate assistant response (placeholder for future API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'That\'s a great idea! [This will be connected to your Python backend soon]'
      }
      setMessages(prev => [...prev, assistantMessage])
      setLoading(false)
    }, 500)
  }

  return (
    <div className="chat-interface">
      <div className="messages-container">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.role}`}>
            <div className="message-content">
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="message assistant">
            <div className="message-content typing">...</div>
          </div>
        )}
      </div>

      <form className="input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Help me build my story..."
          disabled={loading}
          className="chat-input"
        />
        <button type="submit" disabled={loading} className="send-btn">
          Send
        </button>
      </form>
    </div>
  )
}
