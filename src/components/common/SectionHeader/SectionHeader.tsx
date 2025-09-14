import { type ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "../CountdownTimer";
import type { SectionHeaderProps } from "./SectionHeader.types";
import "./SectionHeader.styles.css";

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * SectionHeader - A flexible section header component with customizable layouts
 *
 * @param props - Component props
 * @returns JSX element
 *
 * @example
 * ```tsx
 * // Basic usage
 * <SectionHeader
 *   label="Categories"
 *   title="Browse By Category"
 * />
 *
 * // With inline button
 * <SectionHeader
 *   label="Wishlist"
 *   title=""
 *   buttonPosition="inline"
 *   onButtonClick={() => console.log('clicked')}
 * />
 *
 * // With navigation
 * <SectionHeader
 *   label="Today's"
 *   title="Flash Sales"
 *   showNavigation={true}
 *   onPrevious={() => console.log('prev')}
 *   onNext={() => console.log('next')}
 * />
 * ```
 */
function SectionHeader({
  label,
  title,
  className,
  buttonPosition,
  buttonStyle,
  showAccentBar,
  labelStyle,
  buttonText,
  onButtonClick,
  onPrevious,
  onNext,
  canNext,
  canPrev,
  countdownTarget,
  onCountdownComplete,
}: SectionHeaderProps) {
  // ========================================================================
  // DEFAULT VALUES
  // ========================================================================

  const finalClassName = className || "";
  const finalButtonPosition = buttonPosition || "below";
  const finalButtonStyle = buttonStyle || "default";
  const finalShowAccentBar = showAccentBar !== false; // Default to true
  const finalLabelStyle = labelStyle || "small";
  const finalButtonText = buttonText || "View All";

  // ========================================================================
  // VALIDATION
  // ========================================================================

  // Validate required props
  if (!label && !title) {
    throw new Error("SectionHeader: Either label or title must be provided");
  }

  // Validate navigation props - both or neither, not just one
  if ((onPrevious && !onNext) || (!onPrevious && onNext)) {
    throw new Error(
      "SectionHeader: Navigation requires both onPrevious and onNext handlers, or neither"
    );
  }

  // Validate countdown props - countdown requires title
  if (countdownTarget && !title) {
    throw new Error(
      "SectionHeader: countdownTarget requires a title to be provided"
    );
  }

  // ========================================================================
  // RENDER FUNCTIONS
  // ========================================================================

  /**
   * Renders the controls section (button and/or navigation)
   * @returns JSX element with controls
   */
  const renderControls = (): ReactElement => (
    <div className="section-header__controls">
      {/* Action Button */}
      {onButtonClick && (
        <Button
          onClick={onButtonClick}
          variant={finalButtonStyle === "outline" ? "secondary" : "default"}
          size="default"
        >
          {finalButtonText}
        </Button>
      )}

      {/* Navigation Arrows */}
      {onPrevious && onNext && (
        <div className="section-header__navigation">
          <button
            type="button"
            onClick={onPrevious}
            disabled={canPrev}
            className="section-header__nav-btn"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={canNext}
            className="section-header__nav-btn"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );

  // ========================================================================
  // COMPUTED VALUES
  // ========================================================================

  /**
   * Dynamic classes for label container based on button position and title presence
   * @returns CSS class string
   */
  const labelContainerClasses: string = [
    "section-header__label-container",
    finalButtonPosition === "inline"
      ? "section-header__label-container--with-inline-controls"
      : "",
    title ? "section-header__label-container--with-title" : "",
  ]
    .filter(Boolean)
    .join(" ");

  /**
   * Dynamic classes for label based on style variant
   * @returns CSS class string
   */
  const labelClasses: string = `section-header__label section-header__label--${finalLabelStyle}`;

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className={`section-header ${finalClassName}`}>
      {/* Label Section */}
      <div className={labelContainerClasses}>
        <div className="section-header__content-wrapper">
          <div className="section-header__label-wrapper">
            {finalShowAccentBar && (
              <div className="section-header__accent-bar" />
            )}
            {label && <span className={labelClasses}>{label}</span>}
          </div>
          {finalButtonPosition === "inline" && renderControls()}
        </div>
      </div>

      {/* Title and Controls Section */}
      {title && (
        <div className="section-header__main">
          <div className="section-header__title-container">
            <h2 className="section-header__title">{title}</h2>
            {countdownTarget && (
              <CountdownTimer
                targetDate={countdownTarget}
                onComplete={onCountdownComplete}
                className="section-header__countdown"
                showSeparator={false}
              />
            )}
          </div>
          {finalButtonPosition === "below" && renderControls()}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// EXPORT
// ============================================================================

// Add displayName for better React DevTools debugging
SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
