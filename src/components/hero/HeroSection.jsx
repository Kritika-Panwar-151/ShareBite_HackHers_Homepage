import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { HERO_CONTENT, SITE_META } from '../../data/siteContent';
import styles from './HeroSection.module.css';

/**
 * ============================================================================
 * SECTION 1: HERO SECTION (src/components/hero/HeroSection.jsx)
 * ============================================================================
 * Clean headline + short Donor/NGO bridge & problem summary + demo video
 * player featuring a YouTube-style draggable seek timeline bar!
 * ============================================================================
 */
export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (sec) => {
    if (!sec || Number.isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="top" className={styles.heroSection}>
      <div className="sb-container">
        <div className={styles.heroGrid}>
          {/* Left Column: Clean Headline, Problem-Aware Short Message & CTAs */}
          <div className={styles.copyCard}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>{HERO_CONTENT.eyebrow}</span>
            </div>

            <h1 className={styles.headline}>
              {HERO_CONTENT.headlinePart1}{' '}
              <span className={styles.highlight}>{HERO_CONTENT.headlineHighlight}</span>{' '}
              {HERO_CONTENT.headlinePart2}
            </h1>

            <p className={styles.subheadline}>{HERO_CONTENT.subheadline}</p>

            <div className={styles.ctaGroup}>
              <a href="#live-app" className={styles.primaryBtn}>
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className={styles.secondaryBtn}>
                {HERO_CONTENT.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Column: Demo Video Only + YouTube-Style Seek Timeline */}
          <div className={styles.videoCard}>
            <div className={styles.videoHeader}>
              <span className={styles.videoTitle}>🎬 ShareBite Demo — Donor &amp; NGO Flow</span>
              <span className={styles.timeReadout}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className={styles.videoFrame}>
              <video
                ref={videoRef}
                src={SITE_META.demoVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className={styles.videoPlayer}
              />
            </div>

            {/* YouTube-Style Scrubbable Seek Bar + Controls */}
            <div className={styles.playerBar}>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className={styles.seekSlider}
                style={{
                  background: `linear-gradient(to right, #D96B43 0%, #D96B43 ${progressPercent}%, #E2D8C8 ${progressPercent}%, #E2D8C8 100%)`,
                }}
                aria-label="Seek video timeline"
              />

              <div className={styles.controlsRow}>
                <button type="button" onClick={togglePlay} className={styles.ctrlBtn}>
                  {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <span className={styles.scrubHint}>Drag timeline to rewind or skip forward</span>

                <button type="button" onClick={toggleMute} className={styles.ctrlBtn}>
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
