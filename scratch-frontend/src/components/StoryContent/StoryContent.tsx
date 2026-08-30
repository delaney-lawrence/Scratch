import { useState } from 'react'
import { useStory } from '../../context/StoryContext'
import './StoryContent.css'

type StorySection = 'characters' | 'chapters' | 'settings' | 'themes'

type StorySectionState = Record<StorySection, boolean>

export default function StoryContent() {
  const { story, setStory } = useStory()
  const [expanded, setExpanded] = useState<StorySectionState>({
    characters: true,
    chapters: true,
    settings: true,
    themes: true
  })

  const toggleSection = (section: StorySection) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const addItem = (section: StorySection) => {
    const newItem = {
      id: Date.now(),
      name: 'New Item',
      title: 'New Item',
      description: ''
    }

    const sectionItems = story[section]
    setStory({
      ...story,
      [section]: [...sectionItems, newItem]
    })
  }

  const Section = ({ title, section, items }: { title: string; section: StorySection; items: Array<{ id: number; name?: string; title?: string; description?: string }> }) => (
    <div className="story-section">
      <button
        className="section-toggle"
        onClick={() => toggleSection(section)}
      >
        <span className={`arrow ${expanded[section] ? 'open' : ''}`}>▶</span>
        <h3>{title} ({items.length})</h3>
      </button>

      {expanded[section] && (
        <div className="section-content">
          {items.length === 0 ? (
            <p className="empty-message">No {title.toLowerCase()} yet</p>
          ) : (
            <ul className="items-list">
              {items.map((item) => (
                <li key={item.id} className="item">
                  <strong>{item.name || item.title}</strong>
                  {item.description && <p>{item.description}</p>}
                </li>
              ))}
            </ul>
          )}
          <button className="add-btn" onClick={() => addItem(section)}>
            + Add {title.slice(0, -1)}
          </button>
        </div>
      )}
    </div>
  )

  return (
    <div className="story-content">
      <h2>Story Content</h2>
      <div className="sections">
        <Section title="Characters" section="characters" items={story.characters} />
        <Section title="Chapters" section="chapters" items={story.chapters} />
        <Section title="Settings" section="settings" items={story.settings} />
        <Section title="Themes" section="themes" items={story.themes} />
      </div>
    </div>
  )
}
