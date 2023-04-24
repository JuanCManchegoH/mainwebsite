export default function AboutPrisma() {
  return (
    <section id="AboutPrisma">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">Descubre cómo Prisma puede ayudarte a simplificar tu vida.</p>
            <p className="mt-6 text-lg  leading-8 text-gray-900">
              Prisma es una empresa especializada en la gestión de clientes y la programación del personal de seguridad necesario para cumplir con sus requerimientos. Ofrecen la creación de puestos de
              trabajo para satisfacer las necesidades de los clientes y asignar el personal adecuado, así como programaciones detalladas para el personal, incluyendo turnos y descansos mensuales. Con
              el fin de brindar un seguimiento efectivo, Prisma ofrece estadísticas detalladas y una vista general en tiempo real de la programación de personal. Con estos servicios, Prisma asegura la
              eficacia del equipo de seguridad en todo momento.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gestion de Clientes</h1>
                <p>Registra a tus clientes y su información para poder programar el personal de seguridad necesario para cumplir con sus requerimientos.</p>
                <span className="mt-8">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Creación de puestos</h1>
                  Define los puestos de trabajo necesarios para cumplir con las necesidades de tus clientes y así poder asignar el personal.
                </span>
              </div>
              <div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Programación de turnos y descansos</h1>
                <p>Crea programaciones detalladas para el personal, asignando los turnos y descansos del mes en función de las necesidades del cliente y los puestos de trabajo.</p>
                <span className="mt-8">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Seguimiento y estadísticas</h1>
                  Accede a una vista general de la programación de personal en tiempo real y obtén estadísticas detalladas para hacer un seguimiento efectivo de tu equipo de seguridad.
                </span>
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                href="https://www.mainprisma.com/"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                PRISMA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
