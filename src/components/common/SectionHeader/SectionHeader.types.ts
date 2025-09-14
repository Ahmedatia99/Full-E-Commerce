// ============================================================================
// SECTION HEADER TYPES
// ============================================================================

/**
 * Props for the SectionHeader component
 * 
 * @interface SectionHeaderProps
 */
export interface SectionHeaderProps {
  /** The label text to display */
  label?: string;
  /** The main title text to display */
  title?: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** Position of the button relative to the content */
  buttonPosition?: 'inline' | 'below';
  /** Style variant for the button */
  buttonStyle?: 'default' | 'outline';
  /** Whether to show the accent bar */
  showAccentBar?: boolean;
  /** Size variant for the label */
  labelStyle?: 'large' | 'small';
  /** Text to display on the button */
  buttonText?: string;
  /** Callback function when button is clicked */
  onButtonClick?: () => void;
  /** Callback function for previous navigation */
  onPrevious?: () => void;
  /** Callback function for next navigation */
  onNext?: () => void;

  canNext?: boolean;
  canPrev?: boolean;
  /** Target date for countdown timer */
  countdownTarget?: Date;
  /** Callback when countdown reaches zero */
  onCountdownComplete?: () => void;
}

// ============================================================================
// CONFIGURATION TYPES
// ============================================================================

/**
 * Configuration object for section headers - extends SectionHeaderProps
 * but makes label required since all configs need a label
 * 
 * @interface SectionConfig
 */
export interface SectionConfig extends Omit<SectionHeaderProps, 'label'> {
  /** The label text - required for configurations */
  label: string;
}

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Predefined section configurations for common use cases
 * 
 * @constant SECTION_CONFIGS
 */
export const SECTION_CONFIGS: Record<string, SectionConfig> = {
  CASE_1: {
    label: 'Today\'s',
    title: 'Flash Sales',
    showAccentBar: true,
    // countdownTarget will be provided in App.tsx
  },
  CASE_2: {
    label: 'Categories',
    title: 'Browse By Category',
    showAccentBar: true,
  },
  CASE_3: {
    label: 'This Month',
    title: 'Best Selling Products',
    showAccentBar: true,
    buttonText: 'View All',
    buttonPosition: 'below',
  },
  CASE_4: {
    label: 'Our Products',
    title: 'Explore Our Products',
    showAccentBar: true,
  },
  CASE_5: {
    label: 'Featured',
    title: 'New Arrival',
    showAccentBar: true,
  },
  CASE_6: {
    label: 'Wishtlist (4)',
    showAccentBar: false,
    labelStyle: 'large',
    buttonPosition: 'inline',
    buttonStyle: 'outline',
    buttonText: 'Move All To Bag',
  },
  CASE_7: {
    label: 'Just For You',
    showAccentBar: false,
    labelStyle: 'large',
    buttonPosition: 'inline',
    buttonStyle: 'outline',
    buttonText: 'See All',
  },
  CASE_8: {
    label: 'Flash Sale',
    title: 'Limited Time Offer',
    showAccentBar: true,
    labelStyle: 'small',
    buttonText: 'Shop Now',
    buttonPosition: 'below',
    // countdownTarget will be provided in App.tsx
  },
} as const;

/**
 * Type representing the keys of SECTION_CONFIGS
 * 
 * @type SectionType
 */
export type SectionType = keyof typeof SECTION_CONFIGS;