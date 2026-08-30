
type StoryToggleProps = {
  label: string
  enabled?: boolean
  onToggle?: () => void
}

export default function StoryToggle({
  label,
  enabled = false,
  onToggle
}: StoryToggleProps) {
  return (
    <button
      type="button"
      className="story-toggle"
      aria-pressed={enabled}
      onClick={onToggle}
    >
      {label}
    </button>
  )
}
