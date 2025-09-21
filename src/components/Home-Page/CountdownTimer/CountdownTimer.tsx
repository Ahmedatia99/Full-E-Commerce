import { useState, useEffect } from "react";
import type {
  CountdownTimerProps,
  CountdownValues,
} from "./CountdownTimer.types";
import "./CountdownTimer.styles.css";

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * CountdownTimer - A countdown timer component that displays days, hours, minutes, and seconds
 *
 * @param props - Component props
 * @returns JSX element
 *
 * @example
 * ```tsx
 * // Basic usage
 * <CountdownTimer
 *   targetDate={new Date('2024-12-31T23:59:59')}
 * />
 *
 * // With completion callback
 * <CountdownTimer
 *   targetDate={new Date('2024-12-31T23:59:59')}
 *   onComplete={() => console.log('Countdown finished!')}
 * />
 * ```
 */
function CountdownTimer({
  targetDate,
  onComplete,
  className = "",
  showSeparator = true,
}: CountdownTimerProps) {
  // ========================================================================
  // STATE
  // ========================================================================

  const [countdown, setCountdown] = useState<CountdownValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });

  // ========================================================================
  // EFFECTS
  // ========================================================================

  useEffect(() => {
    const calculateCountdown = (): CountdownValues => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
        total: difference,
      };
    };

    // Initial calculation
    setCountdown(calculateCountdown());

    // Update every second
    const interval = setInterval(() => {
      const newCountdown = calculateCountdown();
      setCountdown(newCountdown);

      // Check if countdown is complete
      if (newCountdown.total <= 0) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  // ========================================================================
  // HELPER FUNCTIONS
  // ========================================================================

  /**
   * Formats a number with leading zero if needed
   */
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className={`countdown-timer text-white ${className}`}>
      {/* Days */}
      <div className="countdown-unit">
        <span className="countdown-label">Days</span>
        <span className="countdown-value">{formatNumber(countdown.days)}</span>
      </div>

      {/* Separator */}
      <span className="countdown-separator">:</span>

      {/* Hours */}
      <div className="countdown-unit">
        <span className="countdown-label">Hours</span>
        <span className="countdown-value">{formatNumber(countdown.hours)}</span>
      </div>

      {/* Separator */}
      <span className="countdown-separator">:</span>

      {/* Minutes */}
      <div className="countdown-unit">
        <span className="countdown-label">Minutes</span>
        <span className="countdown-value">
          {formatNumber(countdown.minutes)}
        </span>
      </div>

      {/* Separator */}
      <span className="countdown-separator">:</span>

      {/* Seconds */}
      <div className="countdown-unit">
        <span className="countdown-label">Seconds</span>
        <span className="countdown-value">
          {formatNumber(countdown.seconds)}
        </span>
      </div>

      {/* Optional separator line */}
      {showSeparator && <div className="countdown-separator-line" />}
    </div>
  );
}

// ============================================================================
// EXPORT
// ============================================================================

CountdownTimer.displayName = "CountdownTimer";

export default CountdownTimer;
