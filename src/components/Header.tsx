const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl lg:text-2xl font-bold text-primary">Synctrack</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;