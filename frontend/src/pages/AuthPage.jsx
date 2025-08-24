import "../styles/auth.css";
import { SignInButton } from "@clerk/clerk-react";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-hero">
          <div className="brand-container">
            <img src="/logo.png" alt="SlackStreamNova" className="brand-logo" />
            <span className="brand-name">Slack Stream Nova</span>
          </div>

          <h1 className="hero-title">Here Collaboration Happens ✨</h1>

          <p className="hero-subtitle">
            Link up with your crew instantly via secure, live messaging. Enjoy smooth teamwork with robust tools built for today’s teams.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span>Real-time messaging</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Video calls & meetings</span>
            </div>

            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure & private</span>
            </div>
          </div>

          <SignInButton mode="modal">
            <button className="cta-button">
              Get Started with Slack Stream Nova
              <span className="button-arrow">→</span>
            </button>
          </SignInButton>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-image-container">
          <img src="/auth-i.png" alt="Team collaboration" className="auth-image" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
