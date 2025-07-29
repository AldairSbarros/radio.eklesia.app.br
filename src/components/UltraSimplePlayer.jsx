import { useState, useRef, useEffect } from 'react'
import './RadioPlayer.css'

const UltraSimplePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [error, setError] = useState(null)
  const audioRef = useRef(null)

  const streamUrl = "http://173.224.125.126:8000/radio"

  // UseEffect mínimo apenas para setar volume inicial
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      // Tenta tocar direto, sem complexidade
      audio.play()
        .then(() => {
          setIsPlaying(true)
          setError(null)
        })
        .catch((err) => {
          console.error('Erro ao reproduzir:', err)
          setError('Clique novamente para tentar reproduzir')
        })
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const getVolumeIcon = () => {
    if (volume === 0) return '🔇'
    if (volume < 0.3) return '🔈'
    if (volume < 0.7) return '🔉'
    return '🔊'
  }

  return (
    <div className="radio-player">
      {/* Audio element básico */}
      <audio
        ref={audioRef}
        src={streamUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => {
          if (audioRef.current) {
            audioRef.current.volume = volume
          }
        }}
      />
      
      <div className="player-container">
        <div className="player-info">
          <div className="station-info">
            <h3>Radio Eklesia</h3>
            <p className="now-playing">🎵 Transmissão ao vivo</p>
            <div className="live-indicator">
              <div className="live-dot live"></div>
              <span>AO VIVO</span>
            </div>
          </div>
        </div>

        <div className="player-controls">
          <button 
            className={`play-btn ${isPlaying ? 'playing' : ''}`}
            onClick={togglePlay}
            title={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <rect x="6" y="4" width="4" height="16" rx="1"/>
                <rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            )}
          </button>

          <div className="volume-control">
            <span className="volume-icon">{getVolumeIcon()}</span>
            <div className="volume-slider-container">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
                title={`Volume: ${Math.round(volume * 100)}%`}
              />
              <div 
                className="volume-fill" 
                style={{ width: `${volume * 100}%` }}
              ></div>
            </div>
            <span className="volume-text">{Math.round(volume * 100)}%</span>
          </div>
        </div>

        <div className="player-visualizer">
          <div className="eq-bar"></div>
          <div className="eq-bar"></div>
          <div className="eq-bar"></div>
          <div className="eq-bar"></div>
          <div className="eq-bar"></div>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <span>⚠️ {error}</span>
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}
    </div>
  )
}

export default UltraSimplePlayer
