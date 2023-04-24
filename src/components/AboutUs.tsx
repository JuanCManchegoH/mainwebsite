import { ArrowTrendingUpIcon, CheckBadgeIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';

const cards = [
  {
    name: 'Misión y valores.',
    description:
      'En Main, transformamos tus procesos de negocio con soluciones innovadoras y eficaces, elevando tu eficiencia y calidad. Somos tu aliado estratégico comprometido con la excelencia, la innovación y la integridad.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Visión',
    description:
      'Somos una empresa colombiana líder en soluciones innovadoras que generan un impacto significativo en la industria. Nuestros módulos y aplicaciones son ágiles y siempre están a la vanguardia de la tecnología mundial.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Propuesta de Valor',
    description:
      'Ofrecemos soluciones innovadoras para la transformación digital de tu empresa, aumentando la productividad y optimizando tus procesos. Aliémonos para brindarte una ventaja competitiva significativa. ¡Contáctanos ahora!',
    icon: ArrowTrendingUpIcon,
  },
];

export default function AboutUS() {
  const bgImage = 'https://images.pexels.com/photos/5520323/pexels-photo-5520323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  return (
    <section id="AboutUs">
      <div className="relative isolate overflow-hidden bg-gray-900 px-20 py-24 sm:py-32">
        <img src={bgImage} alt="" className=" bg-gray-700 mix-blend-multiply absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre nosotros</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            En MAIN, diseñamos aplicaciones innovadoras que optimizan tus procesos internos, impulsando la eficiencia y agilidad de tu empresa. ¡Únete a la innovación con MAIN!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-9 w-6 flex-none text-orange-500" aria-hidden="true" />
              <div className="leading-7">
                <h3 className="font-semibold text-lg text-white">{card.name}</h3>
                <p className="mt-2 text-justify text-base text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
