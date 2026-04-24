import React from 'react';
import logo from '../../assets/logo.jpg'; // Adjust the path as necessary

const EagleEyeLoader = ({ 
  size = 120, 
  variant = 'default', 
  showText = true,
  text = 'Loading...',
  theme = 'dark' 
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
  };

  const logoContainerStyle = {
    position: 'relative',
    width: `${size}px`,
    height: `${size}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent'
  };

  const logoStyle = {
    width: `${size * 0.95}px`,
    height: `${size * 0.95}px`,
    objectFit: 'contain',
    borderRadius: '18%',
    zIndex: 2,
    position: 'relative',
    filter: theme === 'dark' ? 'drop-shadow(0 0 16px #fb923c88) brightness(1.1) contrast(1.2)' : 'drop-shadow(0 0 16px #3b82f688) brightness(0.95)',
    animation: 'logoFloat 4s ease-in-out infinite alternate'
  };

  const elegantRingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${size * 0.92}px`,
    height: `${size * 0.92}px`,
    borderRadius: '50%',
    border: theme === 'dark' ? '3px solid rgba(251,146,60,0.45)' : '3px solid rgba(59,130,246,0.45)',
    boxShadow: theme === 'dark' ? '0 0 32px 4px #fb923c33' : '0 0 32px 4px #3b82f633',
    animation: 'elegantRingSpin 2.5s linear infinite',
    zIndex: 1
  };

  const glowStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${size * 0.85}px`,
    height: `${size * 0.85}px`,
    borderRadius: '50%',
    background: theme === 'dark'
      ? 'radial-gradient(circle, rgba(251,146,60,0.18) 0%, transparent 70%)'
      : 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
    filter: theme === 'dark' ? 'blur(2px)' : 'blur(1.5px)',
    animation: 'glowPulse 3.5s ease-in-out infinite alternate',
    zIndex: 0
  };
  const textStyle = {
    color: theme === 'dark' ? '#f3f4f6' : '#374151',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    animation: 'textBlink 3s ease-in-out infinite'
  };

  const dotsStyle = {
    color: theme === 'dark' ? '#f97316' : '#3b82f6',
    fontSize: '18px',
    fontWeight: 'bold',
    animation: 'dotsAnimation 3s infinite'
  };

  return (
    <>
      <style>
        {`          @keyframes logoFloat {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-8px); }
          }

          @keyframes pulseRing {
            0% {
              transform: translate(-50%, -50%) scale(0.8);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0;
            }
          }

          @keyframes scannerRotate {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }

          @keyframes glowPulse {
            0% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.1); }
          }

          @keyframes textBlink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.7; }
          }

          @keyframes dotsAnimation {
            0%, 20% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }

          @keyframes radarSweep {
            0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 1; }
            100% { transform: translate(-50%, -50%) rotate(360deg); opacity: 0.3; }
          }

          @keyframes beepEffect {
            0%, 90% { transform: scale(1); }
            95% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      
      <div style={containerStyle}>
        <div 
          style={logoContainerStyle}
          className="beep-container"
          onAnimationIteration={() => {
            // Simulate beep sound effect visually
            if (variant === 'radar') {
              const container = document.querySelector('.beep-container');
              if (container) {
                container.style.animation = 'beepEffect 0.1s ease-out';
                setTimeout(() => {
                  container.style.animation = '';
                }, 100);
              }
            }
          }}
        >

          {/* Glow effect */}
          <div style={glowStyle}></div>



          {/* Logo */}
          <img
            src={logo}
            alt="EagleEye Logo"
            style={logoStyle}
          />
        </div>        {showText && (
          <div style={textStyle}>
            {text}
            <span style={dotsStyle}>
              <span style={{ animationDelay: '0s' }}>.</span>
              <span style={{ animationDelay: '0.5s' }}>.</span>
              <span style={{ animationDelay: '1s' }}>.</span>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default EagleEyeLoader;
