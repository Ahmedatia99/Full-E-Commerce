import React, { forwardRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SectionHeaderProps } from './SectionHeader.types';
import './SectionHeader.styles.css';

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ 
    label, 
    title, 
    className = '',
    ariaLabel,
    ...props
  }, ref) => {
    return (
      <div 
        ref={ref}
        className={`section-header ${className}`} 
        aria-label={ariaLabel}
      >
        {/* Label */}
        <div className="section-header__label-container">
          <div className="section-header__accent-bar" aria-hidden="true" />
          <span className="section-header__label">{label}</span>
        </div>
        
        {/* Title and Controls */}
        <div className="section-header__main">
          <h2 className="section-header__title">{title}</h2>
          
          <div className="section-header__controls">
            {/* View All Button */}
            {'onViewAll' in props && props.showViewAll && (
              <button
                type="button"
                onClick={props.onViewAll}
                className="section-header__view-all-btn"
                aria-label={`View all ${title.toLowerCase()}`}
              >
                View All
              </button>
            )}
            
            {/* Navigation Arrows */}
            {'onPrevious' in props && props.showNavigation && (
              <div 
                className="section-header__navigation" 
                role="group" 
                aria-label="Navigation controls"
              >
                <button
                  type="button"
                  onClick={props.onPrevious}
                  className="section-header__nav-btn"
                  aria-label="Previous"
                >
                  <ChevronLeft className="section-header__nav-icon" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={props.onNext}
                  className="section-header__nav-btn" 
                  aria-label="Next"
                >
                  <ChevronRight className="section-header__nav-icon" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;