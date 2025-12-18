import React from 'react';

const GameLoadingScreen = () => {
  return (
    <div className="initial-loading-screen">
      <div className="loading-content">
        {/* Animated running character */}
        <div className="character-container">
          <div className="character running">
            <div className="char-head">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="char-body"></div>
            <div className="char-arm arm-left"></div>
            <div className="char-arm arm-right"></div>
            <div className="char-leg leg-left"></div>
            <div className="char-leg leg-right"></div>
          </div>
          {/* Ground line */}
          <div className="ground-line"></div>
        </div>

        {/* Game icons floating around */}
        <div className="floating-icons">
          <svg className="icon icon-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          <svg className="icon icon-2" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <svg className="icon icon-3" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"/>
          </svg>
          <svg className="icon icon-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/>
          </svg>
        </div>

        <div className="loading-logo">
          <h1>SteamUp!</h1>
          <p>Your Ultimate Game Discovery Platform</p>
        </div>

        {/* Game controller loading spinner */}
        <div className="controller-spinner">
          <div className="controller">
            <div className="controller-body">
              <div className="d-pad">
                <div className="d-btn up"></div>
                <div className="d-btn right"></div>
                <div className="d-btn down"></div>
                <div className="d-btn left"></div>
                <div className="d-center"></div>
              </div>
              <div className="buttons">
                <div className="btn-circle btn-a"></div>
                <div className="btn-circle btn-b"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="loading-text">
          <span className="text-content">Loading your gaming universe</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
            <div className="progress-glow"></div>
          </div>
        </div>

        {/* Particle effects */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .initial-loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .loading-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        /* Running Character Animation */
        .character-container {
          margin-bottom: 40px;
          position: relative;
          height: 120px;
        }

        .character {
          position: relative;
          width: 60px;
          height: 80px;
          margin: 0 auto;
          animation: run 2s linear infinite;
        }

        .char-head {
          width: 35px;
          height: 35px;
          background: #ec4899; /* Pink */
          border-radius: 8px;
          position: absolute;
          top: 0;
          left: 12.5px;
          animation: head-bob 0.5s ease-in-out infinite;
        }

        .eye {
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: 12px;
          animation: blink 3s infinite;
        }

        .eye.left { left: 8px; }
        .eye.right { right: 8px; }

        .char-body {
          width: 30px;
          height: 30px;
          background: #8b5cf6; /* Purple */
          border-radius: 6px;
          position: absolute;
          top: 38px;
          left: 15px;
        }

        .char-arm {
          width: 10px;
          height: 25px;
          background: #8b5cf6; /* Purple */
          border-radius: 5px;
          position: absolute;
          top: 40px;
        }

        .arm-left {
          left: 8px;
          animation: arm-swing-left 0.5s ease-in-out infinite;
          transform-origin: top center;
        }

        .arm-right {
          right: 8px;
          animation: arm-swing-right 0.5s ease-in-out infinite;
          transform-origin: top center;
        }

        .char-leg {
          width: 12px;
          height: 28px;
          background: #3b82f6; /* Blue */
          border-radius: 6px;
          position: absolute;
          bottom: 0;
        }

        .leg-left {
          left: 15px;
          animation: leg-walk-left 0.5s ease-in-out infinite;
          transform-origin: top center;
        }

        .leg-right {
          right: 15px;
          animation: leg-walk-right 0.5s ease-in-out infinite;
          transform-origin: top center;
        }

        .ground-line {
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            #8b5cf6 20%, 
            #8b5cf6 80%, 
            transparent 100%);
          animation: ground-move 1s linear infinite;
        }

        .ground-line::before,
        .ground-line::after {
          content: '';
          position: absolute;
          width: 15px;
          height: 3px;
          background: #8b5cf6;
          top: 0;
          animation: dash-move 1s linear infinite;
        }

        .ground-line::before { left: -20px; }
        .ground-line::after { left: -40px; }

        /* Floating Icons */
        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .icon {
          position: absolute;
          width: 30px;
          height: 30px;
          opacity: 0.6;
          filter: drop-shadow(0 0 8px currentColor);
        }

        .icon-1 {
          color: #ec4899; /* Pink */
          top: 20%;
          left: 15%;
          animation: float-icon 3s ease-in-out infinite;
        }

        .icon-2 {
          color: #8b5cf6; /* Purple */
          top: 30%;
          right: 20%;
          animation: float-icon 3.5s ease-in-out infinite 0.5s;
        }

        .icon-3 {
          color: #3b82f6; /* Blue */
          bottom: 30%;
          left: 20%;
          animation: float-icon 4s ease-in-out infinite 1s;
        }

        .icon-4 {
          color: #a855f7; /* Light Purple */
          bottom: 25%;
          right: 15%;
          animation: float-icon 3.2s ease-in-out infinite 1.5s;
        }

        /* Logo */
        .loading-logo h1 {
          font-size: 3.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6); /* Pink, Purple, Blue */
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
          margin: 20px 0 10px;
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.4));
          letter-spacing: 2px;
        }

        .loading-logo p {
          color: #e0e0e0;
          font-size: 1.1rem;
          margin: 10px 0;
          opacity: 0;
          animation: fadeIn 1s ease forwards 0.5s;
        }

        /* Game Controller Spinner */
        .controller-spinner {
          margin: 30px auto;
          animation: float-gentle 3s ease-in-out infinite;
        }

        .controller {
          width: 100px;
          height: 60px;
          margin: 0 auto;
          animation: tilt 2s ease-in-out infinite;
        }

        .controller-body {
          width: 100px;
          height: 50px;
          background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); /* Purple to Blue */
          border-radius: 25px;
          position: relative;
          box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);
        }

        .d-pad {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
        }

        .d-btn {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 2px;
        }

        .d-btn.up { top: 0; left: 11px; }
        .d-btn.down { bottom: 0; left: 11px; }
        .d-btn.left { left: 0; top: 11px; }
        .d-btn.right { right: 0; top: 11px; }
        .d-center { 
          width: 6px; 
          height: 6px; 
          top: 12px; 
          left: 12px; 
          background: rgba(255,255,255,0.3);
        }

        .buttons {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
        }

        .btn-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: absolute;
          animation: button-press 1s ease-in-out infinite;
        }

        .btn-a {
          background: #ec4899; /* Pink */
          top: -5px;
          right: 0;
        }

        .btn-b {
          background: #3b82f6; /* Blue */
          bottom: -5px;
          right: 15px;
          animation-delay: 0.5s;
        }

        /* Loading Text */
        .loading-text {
          color: #fff;
          font-size: 1.2rem;
          margin: 25px 0;
          font-weight: 500;
        }

        .loading-dots span {
          animation: dot-blink 1.4s infinite;
          margin-left: 2px;
        }

        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }

        /* Progress Bar */
        .loading-progress {
          margin: 25px auto 0;
          width: 300px;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: visible;
          position: relative;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6); /* Pink, Purple, Blue */
          border-radius: 10px;
          animation: progress-load 2s ease-in-out infinite;
          position: relative;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
        }

        .progress-glow {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 50px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
          border-radius: 10px;
          animation: glow-slide 1.5s ease-in-out infinite;
        }

        /* Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #8b5cf6; /* Purple */
          border-radius: 50%;
          box-shadow: 0 0 8px #8b5cf6;
          animation: particle-float 4s linear infinite;
        }

        .particle:nth-child(odd) { 
          background: #ec4899; /* Pink for odd particles */
          box-shadow: 0 0 8px #ec4899; 
        }
        .particle:nth-child(3n) { 
          background: #3b82f6; /* Blue for every third particle */
          box-shadow: 0 0 8px #3b82f6; 
        }
        
        ${[...Array(15)].map((_, i) => `
          .particle:nth-child(${i + 1}) {
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 4}s;
            animation-duration: ${3 + Math.random() * 3}s;
          }
        `).join('')}

        /* Animations */
        @keyframes run {
          0%, 100% { transform: translateX(-150px); }
          50% { transform: translateX(150px); }
        }

        @keyframes head-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0; }
        }

        @keyframes arm-swing-left {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(30deg); }
        }

        @keyframes arm-swing-right {
          0%, 100% { transform: rotate(30deg); }
          50% { transform: rotate(-30deg); }
        }

        @keyframes leg-walk-left {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
        }

        @keyframes leg-walk-right {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(20deg); }
        }

        @keyframes ground-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20px); }
        }

        @keyframes dash-move {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(320px); opacity: 0; }
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes tilt {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes button-press {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.8); opacity: 0.7; }
        }

        @keyframes dot-blink {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes progress-load {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes glow-slide {
          0% { left: -50px; }
          100% { left: 100%; }
        }

        @keyframes particle-float {
          0% { 
            transform: translateY(100vh) rotate(0deg); 
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100px) rotate(360deg); 
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GameLoadingScreen;