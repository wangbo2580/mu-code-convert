import { ImageResponse } from 'next/og';

export const ogImageConfig = {
  runtime: 'edge' as const,
  size: {
    width: 1200,
    height: 630,
  },
  contentType: 'image/png' as const,
};

interface ToolOGImageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function generateToolOGImage({ title, description, icon }: ToolOGImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          {/* Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
            }}
          >
            {icon}
          </div>

          {/* Tool Title */}
          <div
            style={{
              display: 'flex',
              fontSize: '56px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #ffffff 0%, #e4e4e7 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-1px',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              color: '#a1a1aa',
              maxWidth: '700px',
              textAlign: 'center',
            }}
          >
            {description}
          </div>

          {/* Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '24px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: '600',
              }}
            >
              CodeConvert
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageConfig.size,
    }
  );
}
