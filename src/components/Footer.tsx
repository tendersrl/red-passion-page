const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-primary-foreground">GISI</div>
            <div className="text-sm text-primary-foreground/60">
              Iniziativa Digitale
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} GISI. Tutti i diritti riservati.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Iniziativa riservata agli associati GISI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
