export interface AnimatedHighlighterProps {
  /** The text to highlight */
  text: string;
  /** Highlight color (default: '#6ca0dc') */
  color?: string;
  /** Font size (default: '30px') */
  fontSize?: string;
  /** Additional CSS class name */
  className?: string;
  /** Whether to show the highlighter icon during animation (default: true) */
  showIcon?: boolean;
  /** Highlight opacity (default: 0.3) */
  highlightOpacity?: number;
  /** Animation duration in seconds (default: 1.5) */
  duration?: number;
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number;
  /** Whether to replay animation on hover (default: false) */
  replayOnHover?: boolean;
}
