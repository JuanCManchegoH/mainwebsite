export default function AboutPrisma() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-base font-semibold leading-7 text-indigo-600">Caracteristicas</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gestion de Clientes</h1>
              <p>Registra a tus clientes y su información para poder programar el personal de seguridad necesario para cumplir con sus requerimientos.</p>
              <p className="mt-8">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Creación de puestos</h1>
                Define los puestos de trabajo necesarios para cumplir con las necesidades de tus clientes y así poder asignar el personal.
              </p>
            </div>
            <div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Programación de turnos y descansos</h1>
              <p>Crea programaciones detalladas para el personal, asignando los turnos y descansos del mes en función de las necesidades del cliente y los puestos de trabajo.</p>
              <p className="mt-8">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seguimiento y estadísticas</h1>
                Accede a una vista general de la programación de personal en tiempo real y obtén estadísticas detalladas para hacer un seguimiento efectivo de tu equipo de seguridad.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <a
              href="#"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              PRISMA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
