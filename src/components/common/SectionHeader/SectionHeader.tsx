import { type ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "../../Home-Page/CountdownTimer/CountdownTimer";
import type { SectionHeaderProps } from "./SectionHeader.types";
import "./SectionHeader.styles.css";
import type { Swiper as SwiperType } from "swiper";

import type { RefObject } from "react";

// Props for SectionHeader with optional swiperRef for navigation
interface SectionHeaderWithSwiperProps extends SectionHeaderProps {
  swiperRef?: RefObject<SwiperType | null>;
}

// Main SectionHeader component
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
  swiperRef,
}: SectionHeaderWithSwiperProps) {
  // Default values for props
  const finalClassName = className || "";
  const finalButtonPosition = buttonPosition || "below";
  const finalButtonStyle = buttonStyle || "default";
  const finalShowAccentBar = showAccentBar !== false;
  const finalLabelStyle = labelStyle || "small";
  const finalButtonText = buttonText || "View All";

  // Ensure at least label or title is provided
  if (!label && !title)
    throw new Error("SectionHeader: Either label or title must be provided");

  // Render navigation and button controls
  const renderControls = (): ReactElement => (
    <div className="section-header__controls ">
      {/* Main button */}
      {onButtonClick && (
        <Button
          onClick={onButtonClick}
          variant={finalButtonStyle === "outline" ? "secondary" : "default"}
          size="default"
        >
          {finalButtonText}
        </Button>
      )}
      {/* Navigation buttons for swiper or custom handlers */}
      {(onPrevious || swiperRef) && (onNext || swiperRef) && (
        <div className="section-header__navigation">
          <button
            type="button"
            onClick={onPrevious || (() => swiperRef?.current?.slidePrev())}
            disabled={canPrev}
            className="section-header__nav-btn hover rtl:rotate-180 ltr:rotate-0 tranform hover:scale-120 transition duration-300"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={onNext || (() => swiperRef?.current?.slideNext())}
            disabled={canNext}
            className="section-header__nav-btn hover tranform hover:scale-120 rtl:rotate-180 ltr:rotate-0 transition duration-300"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );

  // Classes for label container
  const labelContainerClasses: string = [
    "section-header__label-container",
    finalButtonPosition === "inline"
      ? "section-header__label-container--with-inline-controls"
      : "",
    title ? "section-header__label-container--with-title" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Classes for label
  const labelClasses: string = `section-header__label section-header__label--${finalLabelStyle}`;

  // Render component
  return (
    <div className={`section-header ${finalClassName}`}>
      <div className={labelContainerClasses}>
        <div className="section-header__content-wrapper ">
          <div className="section-header__label-wrapper">
            {/* Accent bar */}
            {finalShowAccentBar && (
              <div className="section-header__accent-bar" />
            )}
            {/* Label */}
            {label && (
              <span
                className={`${labelClasses} ${
                  document.dir === "rtl" ? "" : "pr-2"
                } `}
              >
                {label}
              </span>
            )}{" "}
          </div>
          {/* Inline controls */}
          {finalButtonPosition === "inline" && renderControls()}
        </div>
      </div>
      {/* Title and countdown */}
      <h2 className="section-header__title mb-5 sm:hidden">{title}</h2>

      {title && (
        <div className="section-header__main">
          <div className="section-header__title-container ">
            <h2 className="section-header__title hidden sm:block">{title}</h2>
            {/* Countdown timer */}
            {countdownTarget && (
              <CountdownTimer
                targetDate={countdownTarget}
                onComplete={onCountdownComplete}
                className="section-header__countdown"
                showSeparator={false}
              />
            )}
          </div>
          {/* Controls below title */}
          {finalButtonPosition === "below" && renderControls()}
        </div>
      )}
    </div>
  );
}

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
