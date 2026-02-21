interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  className?: string;
}

const PlaceholderImage = ({ width, height, text, className = '' }: PlaceholderImageProps) => {
  return (
    <div 
      className={`bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-medium ${className}`}
      style={{ width: `${width}px`, height: `${height}px`, minHeight: `${height}px` }}
    >
      <div className="text-center p-4">
        <div className="text-4xl mb-2">🏖️</div>
        <p className="text-sm">{text}</p>
        <p className="text-xs opacity-75 mt-1">{width} x {height}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage;