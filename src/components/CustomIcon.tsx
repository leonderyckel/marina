interface CustomIconProps {
  type: string;
  size?: number;
  className?: string;
}

const CustomIcon = ({ type, size = 48, className = "" }: CustomIconProps) => {
  const iconProps = {
    width: size,
    height: size,
    fill: "currentColor",
    className: className
  };

  switch (type) {
    case 'house':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      );
    case 'bed':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM19 7h-8v7H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-9c0-2.21-1.79-4-4-4z"/>
        </svg>
      );
    case 'map-pin':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      );
    case 'activity':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M22 12c0-5.54-4.46-10-10-10S2 6.46 2 12s4.46 10 10 10 10-4.46 10-10zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      );
    case 'bath':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3-4V6.18C19 4.98 18.02 4 16.82 4H15l1.41-1.41c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L12.41 4 9.83 1.41C9.44 1.02 8.81 1.02 8.42 1.41c-.39.39-.39 1.02 0 1.41L9.83 4H8.18C6.98 4 6 4.98 6 6.18V12H4v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-2z"/>
        </svg>
      );
    default:
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
};

export default CustomIcon;