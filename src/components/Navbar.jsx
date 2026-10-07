function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-icon">📚</div>

        <div>
          <h2>Smart Notes</h2>
          <span>College Learning Platform</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="notification">🔔</div>

        <div className="profile-mini">
          <div className="profile-avatar">S</div>

          <div className="profile-info">
            <strong>Student</strong>
            <span>Computer Science</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

