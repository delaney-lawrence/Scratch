import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Story } from '../types/types';

interface StoryContextType {
  story: Story
  setStory: (story: Story) => void
}

const StoryContext = createContext<StoryContextType | null>(null)

const initialStory: Story = {
  id: 1,
  title: 'Untitled Story',
  description: 'A new story',
  characters: [],
  chapters: [],
  settings: [],
  themes: [],
  expandedSections: {
    characters: true,
    chapters: true,
    settings: true,
    themes: true
  }
}

export function StoryProvider({ children }: { children: ReactNode }) {
  const [story, setStory] = useState<Story>(initialStory)

  return (
    <StoryContext.Provider value={{ story, setStory }}>
      {children}
    </StoryContext.Provider>
  )
}

export function useStory() {
  const context = useContext(StoryContext)
  if (!context) {
    throw new Error('useStory must be used within StoryProvider')
  }
  return context
}