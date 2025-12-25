import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { AnimatedHighlighterProps } from './types';

// Inline SVG highlighter icon to avoid external dependency
const HighlighterIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 11-6 6v3h9l3-3" />
    <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
  </svg>
);

export const AnimatedHighlighter: React.FC<AnimatedHighlighterProps> = ({
  text,
  color = '#6ca0dc',
  fontSize = '30px',
  className = '',
  showIcon = true,
  highlightOpacity = 0.3,
  duration = 1.5,
  delay = 0,
  replayOnHover = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const runAnimation = useCallback(() => {
    if (!containerRef.current || !highlightRef.current) return;

    const highlight = highlightRef.current;
    const highlighter = highlighterRef.current;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Set initial states
    gsap.set(highlight, {
      scaleX: 0,
      transformOrigin: 'left',
    });

    if (showIcon && highlighter) {
      gsap.set(highlighter, {
        opacity: 0,
        scale: 0,
        rotation: -30,
        x: 0,
      });
    }

    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' }, delay });
    timelineRef.current = tl;

    if (showIcon && highlighter) {
      tl.to(highlighter, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      })
        .to(highlight, {
          scaleX: 1,
          duration,
        })
        .to(
          highlighter,
          {
            x: containerRef.current.offsetWidth,
            duration,
          },
          '<'
        )
        .to(
          highlighter,
          {
            opacity: 0,
            scale: 0,
            duration: 0.3,
          },
          '>-0.3'
        );
    } else {
      tl.to(highlight, {
        scaleX: 1,
        duration,
      });
    }
  }, [showIcon, duration, delay]);

  useEffect(() => {
    runAnimation();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [runAnimation]);

  const handleMouseEnter = () => {
    if (replayOnHover) {
      runAnimation();
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontSize,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <div style={{ position: 'relative' }}>
        <div
          ref={highlightRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: color,
            opacity: highlightOpacity,
            height: '100%',
            width: '100%',
            transform: 'skewY(-2deg)',
          }}
        />
        <span style={{ position: 'relative' }}>{text}</span>
      </div>
      {showIcon && (
        <div
          ref={highlighterRef}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            pointerEvents: 'none',
            color,
          }}
        >
          <div style={{ transform: 'translateY(-50%)' }}>
            <HighlighterIcon size={32} color={color} />
          </div>
        </div>
      )}
    </div>
  );
};
