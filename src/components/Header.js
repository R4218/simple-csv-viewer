
export default function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-primary p-4 flex justify-between items-center">
      <nav>
        <a href="/" className="text-accent font-bold mx-2">Home</a>
      </nav>
      <div className="flex items-center">
      <span className="text-accent mx-2">Light Mode</span>
      <label className="switch">
        
        <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
        />
        <span className="slider round"></span>
        
      </label>
      <span className="text-accent mx-2">Dark Mode</span>
      </div>
    </header>
  );
}