import { useState } from 'react'
import './App.css'
import UltraSimplePlayer from './components/UltraSimplePlayer'
import logoEklesia from './assets/EklesiaKonecta.png'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logoEklesia} alt="Radio Eklesia" className="logo-image" />
            <div className="logo-text">
              <h1>WebRadio Eklesia</h1>
              <span>Sua WebRadio Cristã Online</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#programacao">Programação</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <h2>Conecte-se com Deus através da música</h2>
            <p>
              Ouça as melhores músicas gospel, pregações inspiradoras e 
              programas que edificam sua fé. 24 horas no ar, levando a 
              palavra de Deus até você.
            </p>
            <div className="radio-player-container">
              <UltraSimplePlayer />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="sobre">
        <div className="container">
          <h3>Sobre a WebRadio Eklesia</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                A WebRadio Eklesia nasceu com o propósito de levar a palavra de Deus 
                e música gospel de qualidade para todos os cantos do Brasil e do mundo. 
                Nossa missão é edificar vidas através da música e da palavra.
              </p>
              <p>
                Com uma programação 24 horas, oferecemos o melhor da música cristã 
                contemporânea, hinos tradicionais, pregações e programas especiais 
                para toda a família.
              </p>
            </div>
            <div className="features">
              <div className="feature">
                <span className="icon">🎵</span>
                <h4>Música Gospel</h4>
                <p>Os melhores sucessos da música cristã</p>
              </div>
              <div className="feature">
                <span className="icon">📖</span>
                <h4>Pregações</h4>
                <p>Mensagens que edificam e transformam vidas</p>
              </div>
              <div className="feature">
                <span className="icon">📻</span>
                <h4>24h no Ar</h4>
                <p>Programação contínua para você</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programming Section */}
      <section className="programming" id="programacao">
        <div className="container">
          <h3>Programação</h3>
          <div className="schedule">
            <div className="time-slot">
              <span className="time">06:00 - 09:00</span>
              <div className="program">
                <h4>Manhã Abençoada</h4>
                <p>Comece seu dia com música e palavra</p>
              </div>
            </div>
            <div className="time-slot">
              <span className="time">09:00 - 12:00</span>
              <div className="program">
                <h4>Sucessos Gospel</h4>
                <p>Os maiores hits da música cristã</p>
              </div>
            </div>
            <div className="time-slot">
              <span className="time">12:00 - 14:00</span>
              <div className="program">
                <h4>Almoço com Jesus</h4>
                <p>Música suave para o seu descanso</p>
              </div>
            </div>
            <div className="time-slot">
              <span className="time">14:00 - 18:00</span>
              <div className="program">
                <h4>Tarde Cristã</h4>
                <p>Variedades gospel para sua tarde</p>
              </div>
            </div>
            <div className="time-slot">
              <span className="time">18:00 - 22:00</span>
              <div className="program">
                <h4>Noite de Louvor</h4>
                <p>Encerre o dia louvando ao Senhor</p>
              </div>
            </div>
            <div className="time-slot">
              <span className="time">22:00 - 06:00</span>
              <div className="program">
                <h4>Madrugada de Paz</h4>
                <p>Música instrumental e hinos tradicionais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contato">
        <div className="container">
          <h3>Entre em Contato</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>radio@eklesia.com.br</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <div>
                <h4>WhatsApp</h4>
                <p>(92) 9299203-0250</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <h4>Rua São Judas Tadeu, 290</h4>
                <p>Manaus, AM - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h4>WebRadio Eklesia</h4>
              <p>Levando a palavra de Deus através da música</p>
            </div>
            <div className="footer-links">
              <h4>Links Úteis</h4>
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#programacao">Programação</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#" title="Facebook">📘</a>
                <a href="#" title="Instagram">📷</a>
                <a href="#" title="YouTube">📺</a>
                <a href="#" title="Twitter">🐦</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 WebRadio Eklesia - Manaus, AM. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
