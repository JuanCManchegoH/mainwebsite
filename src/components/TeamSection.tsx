const people = [
  {
    name: 'Juan Carlos Manchego Alvarez',
    role: 'Chief Executive Officer (CEO)',
    imageUrl: '/JuanCarlosManchegoAlvarez.jpg',
  },
  {
    name: 'Juan Carlos Manchego Herrera',
    role: 'Chief Technology Officer (CTO)',
    imageUrl: '/JuanCarlosManchegoHerrera.jpg',
  },
  {
    name: 'Camilo Ándres Quintero',
    role: 'Frontend Developer',
    imageUrl: '/CamiloQuintero.jpeg',
  },
  {
    name: 'Daniel Felipe Gonzales',
    role: 'Backend Developer',
    imageUrl: '/DanielGonzales.jpeg',
  },
  {
    name: 'Felipe Pinzón Gómez',
    role: 'Frontend Developer',
    imageUrl: '/FelipePinzon.jpg',
  },
  // More people...
];

export default function TeamSection() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce nuestro equipo</h2>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-56 w-56 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
