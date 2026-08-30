

export interface Character {
  id: number
  name: string
  description: string
}

export interface Chapter {
  id: number
  title: string
  content: string
}

export interface Setting {
  id: number
  name: string
  description: string
}

export interface Theme {
  id: number
  name: string
  description: string
}

export interface Story {
  id: number
  title: string
  description: string
  characters: Character[]
  chapters: Chapter[]
  settings: Setting[]
  themes: Theme[]
  expandedSections: {
    characters: boolean
    chapters: boolean
    settings: boolean
    themes: boolean
  }
}