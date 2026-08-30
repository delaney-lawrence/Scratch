
import React, { useState } from 'react'
import { useStory } from '../context/StoryContext'
import StoryContent from '../components/StoryContent/StoryContent'
import StoryBuilder from '../components/StoryBuilder/StoryBuilder'
import '../styles/StoriesPage.css'

export function StoriesPage() {
  const { story, setStory } = useStory()
  const [storyTitle, setStoryTitle] = useState(story.title)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setStoryTitle(newTitle)
    setStory({
      ...story,
      title: newTitle
    })
  }

  return (
    <div className="stories-page">
      <div className="stories-header">
        <h2>Build out your story</h2>
        <div className="story-selector">
          <label>Story: </label>
          <input
            type="text"
            value={storyTitle}
            onChange={handleTitleChange}
            placeholder="Enter story title"
            className="story-title-input"
          />
        </div>
      </div>

      <div className="stories-container">
        <div className="story-content-panel">
          <StoryContent />
        </div>
        <div className="story-builder-panel">
          <StoryBuilder />
        </div>
      </div>
    </div>
  )
}