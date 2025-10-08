const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-accent rounded-lg"></div>
            <span className="text-xl font-bold">Synctrack</span>
          </div>
          <p className="text-primary-foreground/80 text-center">
            © {new Date().getFullYear()} Synctrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;