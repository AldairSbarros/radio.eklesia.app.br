import { useState, useRef, useEffect } from 'react'
import './RadioPlayer.css'

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isLive, setIsLive] = useState(false)
  const [retry, setRetry] = useState(false)
  const audioRef = useRef(null)

  const streamUrl = "https://stream.radio.eklesia.app.br/radio"

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
      // Eventos essenciais para funcionamento do player
      const handleCanPlay = () => {
        setIsLoading(false)
        setError(null)
        setIsLive(true)
      }
      const handlePlaying = () => {
        setIsLoading(false)
        setError(null)
        setIsLive(true)
        setIsPlaying(true)
      }
      const handleError = (e) => {
        console.error('Audio error:', e)
        setIsLoading(false)
        setError('Erro ao conectar com a rádio')
        setIsLive(false)
        setIsPlaying(false)
      }
      const handlePause = () => {
        setIsPlaying(false)
      }
      const handlePlay = () => {
        setIsLive(true)
        setIsPlaying(true)
      }

      audio.addEventListener('canplay', handleCanPlay)
      audio.addEventListener('playing', handlePlaying)
      audio.addEventListener('error', handleError)
      audio.addEventListener('pause', handlePause)
      audio.addEventListener('play', handlePlay)

      return () => {
        audio.removeEventListener('canplay', handleCanPlay)
        audio.removeEventListener('playing', handlePlaying)
        audio.removeEventListener('error', handleError)
        audio.removeEventListener('pause', handlePause)
        audio.removeEventListener('play', handlePlay)
      }
    }
  }, [isPlaying])

  // UseEffect separado para o volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  // UseEffect para configurações de baixa latência
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      // Configurações para reduzir buffer/latência
      try {
        // Remove buffer excessivo se suportado pelo navegador
        if ('fastSeek' in audio) {
          audio.fastSeek = true
        }
        
        // Define um buffer mínimo se possível
        if ('mozPreservesPitch' in audio) {
          audio.mozPreservesPitch = false
        }
        
        // Para Chrome/Safari - reduz buffer
        if ('webkitPreservesPitch' in audio) {
          audio.webkitPreservesPitch = false
        }
      } catch (e) {
        console.log('Algumas otimizações não são suportadas:', e)
      }
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        setIsLoading(true)
        setError(null)
        setRetry(false)
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          await playPromise
          setIsPlaying(true)
          setIsLive(true)
          setIsLoading(false)
        }
      }
    } catch (err) {
      console.error('Erro ao reproduzir:', err)
      setError('Clique novamente para tentar reproduzir. Isso é uma proteção do navegador.')
      setIsLoading(false)
      setIsPlaying(false)
      setRetry(true)
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
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        playsInline
        autoPlay={false}
      />

      <div className="player-container">
        <div className="player-info">
          <div className="station-info">
            <h3>Radio Eklesia</h3>
            <p className="now-playing">🎵 Transmissão ao vivo</p>
            <div className="live-indicator">
              <div className={`live-dot ${isLive ? 'live' : ''}`}></div>
              <span>{isLive ? 'AO VIVO' : 'OFFLINE'}</span>
            </div>
          </div>
        </div>

        <div className="player-controls">
          <button 
            className={`play-btn ${isPlaying ? 'playing' : ''} ${isLoading ? 'loading' : ''}`}
            onClick={togglePlay}
            disabled={isLoading}
            title={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : isPlaying ? (
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
          {retry ? (
            <button onClick={togglePlay} style={{marginLeft: '8px'}}>Tentar novamente</button>
          ) : (
            <button onClick={() => setError(null)}>✕</button>
          )}
        </div>
      )}
    </div>
  )
}

export default RadioPlayer
