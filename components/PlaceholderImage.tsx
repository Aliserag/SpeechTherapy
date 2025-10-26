interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  category?: 'hero' | 'profile' | 'service' | 'testimonial' | 'general';
  className?: string;
}

export function PlaceholderImage({
  width,
  height,
  text,
  category = 'general',
  className = ''
}: PlaceholderImageProps) {
  // Color schemes based on category
  const colorSchemes = {
    hero: { bg: 'from-teal-400 to-blue-500', text: 'text-white' },
    profile: { bg: 'from-purple-400 to-pink-400', text: 'text-white' },
    service: { bg: 'from-blue-400 to-cyan-400', text: 'text-white' },
    testimonial: { bg: 'from-amber-300 to-orange-400', text: 'text-white' },
    general: { bg: 'from-gray-300 to-gray-400', text: 'text-gray-700' },
  };

  const scheme = colorSchemes[category];
  const displayText = text || `${width}×${height}`;

  return (
    <div
      className={`relative bg-gradient-to-br ${scheme.bg} flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: '100%', paddingBottom: `${(height / width) * 100}%` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-center ${scheme.text} font-semibold opacity-50`}>
          <svg
            className="mx-auto mb-2"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <p className="text-sm">{displayText}</p>
        </div>
      </div>
    </div>
  );
}

// Alternative: Use actual placeholder service URLs
export function getPlaceholderUrl(width: number, height: number, text?: string): string {
  const encodedText = text ? encodeURIComponent(text) : `${width}x${height}`;
  return `https://placehold.co/${width}x${height}/0ea5e9/white?text=${encodedText}`;
}
