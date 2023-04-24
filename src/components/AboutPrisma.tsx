import { MapPinIcon, PresentationChartLineIcon, PuzzlePieceIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: 'Gestion de Clientes',
    description: 'Registra a tus clientes y su información para poder programar el personal de seguridad necesario para cumplir con sus requerimientos.',
    icon: UserGroupIcon,
  },
  {
    name: 'Creación de puestos',
    description: 'Define los puestos de trabajo necesarios para cumplir con las necesidades de tus clientes y así poder asignar el personal.',
    icon: MapPinIcon,
  },
  {
    name: 'Programación de turnos y descansos',
    description: 'Crea programaciones detalladas para el personal, asignando los turnos y descansos del mes en función de las necesidades del cliente y los puestos de trabajo.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Seguimiento y estadísticas',
    description: 'Accede a una vista general de la programación de personal en tiempo real y obtén estadísticas detalladas para hacer un seguimiento efectivo de tu equipo de seguridad.',
    icon: PresentationChartLineIcon,
  },
];

export function AboutPrisma() {
  return (
    <section id="AboutPrisma" className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-medium tracking-tight text-teal-400">Características principales.</h2>
        <p className="mt-2 text-lg text-gray-600">Con nuestra aplicación de gestión de personal, podrás gestionar de manera fácil y eficiente el personal en misión.</p>
      </div>
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <li key={feature.name} className="rounded-2xl border border-gray-200 p-8">
            <div className="flex items-center">
              <feature.icon className="h-8 w-8 text-teal-400" />
              <h3 className="pl-2 font-semibold text-gray-900">{feature.name}</h3>
            </div>
            <p className="mt-2 text-gray-700">{feature.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex">
        <a
          href="https://www.mainprisma.com/"
          className="rounded-md bg-teal-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
        >
          Explora nuestra Aplicacion
        </a>
      </div>
    </section>
  );
}
