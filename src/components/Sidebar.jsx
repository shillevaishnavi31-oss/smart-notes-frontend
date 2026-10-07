function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        MAIN MENU
      </div>

      <nav className="sidebar-menu">
        <a href="/" className="sidebar-link active">
          <span>🏠</span>
          <span>Dashboard</span>
        </a>

        <a href="/search-notes" className="sidebar-link">
          <span>🔎</span>
          <span>Search Notes</span>
        </a>

        <a href="/upload-notes" className="sidebar-link">
          <span>⬆️</span>
          <span>Upload Notes</span>
        </a>

        <a href="/profile" className="sidebar-link">
          <span>👤</span>
          <span>Profile</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="sidebar-link">
          <span>⚙️</span>
          <span>Settings</span>
        </a>

        <a href="#" className="sidebar-link logout">
          <span>🚪</span>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;