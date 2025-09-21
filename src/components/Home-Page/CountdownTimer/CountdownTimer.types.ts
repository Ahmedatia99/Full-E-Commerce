// ============================================================================
// COUNTDOWN TIMER TYPES
// ============================================================================

/**
 * Props for the CountdownTimer component
 * 
 * @interface CountdownTimerProps
 */
export interface CountdownTimerProps {
  /** Target date/time to countdown to */
  targetDate: Date;
  /** Optional callback when countdown reaches zero */
  onComplete?: () => void;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether to show the dotted line separator */
  showSeparator?: boolean;
}

/**
 * Countdown time values
 * 
 * @interface CountdownValues
 */
export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number; // Total milliseconds remaining
}
