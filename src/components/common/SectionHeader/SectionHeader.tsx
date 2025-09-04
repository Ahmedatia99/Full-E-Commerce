import React, { forwardRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SectionHeaderProps } from "./SectionHeader.types";
import "./SectionHeader.styles.css";

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ label, title, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`section-header ${className}`}>
        {/* Label */}
        <div className="section-header__label-container">
          <div className="section-header__accent-bar" />
          <span className="section-header__label">{label}</span>
        </div>

        {/* Title and Controls */}
        <div className="section-header__main">
          <h2 className="section-header__title">{title}</h2>

          <div className="section-header__controls">
            {/* View All Button - Uses existing Button component */}
            {"onViewAll" in props && props.showViewAll && (
              <Button
                onClick={props.onViewAll}
                variant="default"
                size="default"
              >
                View All
              </Button>
            )}

            {/* Navigation Arrows */}
            {"onPrevious" in props && props.showNavigation && (
              <div className="section-header__navigation">
                <button
                  type="button"
                  onClick={props.onPrevious}
                  className="section-header__nav-btn"
                >
                  <ChevronLeft className="section-header__nav-icon" />
                </button>
                <button
                  type="button"
                  onClick={props.onNext}
                  className="section-header__nav-btn"
                >
                  <ChevronRight className="section-header__nav-icon" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
