const navigation = {
  main: [
    { name: 'Inicio', href: '#' },
    { name: 'Prisma', href: '#' },
    { name: 'MAIN', href: '#' },
    { name: 'Contacto', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">&copy; 2023 Modulos Aplicaciones e Innovación, All rights reserved.</p>
      </div>
    </footer>
  );
}
