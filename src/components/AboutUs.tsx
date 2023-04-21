import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid';

const cards = [
  {
    name: 'Misión y valores.',
    description:
      'En Main, Módulos, Aplicaciones e Innovación, brindamos soluciones innovadoras y efectivas para transformar los procesos de negocio de nuestros clientes y aumentar su eficiencia. Somos un aliado estratégico comprometido en ofrecer soluciones de alta calidad y eficacia, y mantenemos siempre la vanguardia del mercado. Nuestros valores fundamentales son la excelencia, la innovación, la integridad y la colaboración, y nos regimos por los más altos estándares éticos y de integridad.',
    icon: PhoneIcon,
  },
  {
    name: 'Visión',
    description:
      'Somos una empresa colombiana que se destaca por aportar soluciones reales y tener un impacto significativo en la industria, mediante la creación de módulos, aplicaciones e innovaciones, ágiles y siempre a la vanguardia de la tecnología mundial',
    icon: LifebuoyIcon,
  },
  {
    name: 'Propuesta de Valor',
    description:
      'Nuestra propuesta se enfoca en establecer alianzas con nuestros clientes para colaborar en sus procesos de transformación digital, ofreciendo soluciones innovadoras que aumenten su productividad, optimicen los procesos de su organización y les brinden una ventaja competitiva significativa.',
    icon: NewspaperIcon,
  },
];

export default function AboutUS() {
  const bgImage = 'https://images.pexels.com/photos/5520323/pexels-photo-5520323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-20 py-24 sm:py-32">
      <img src={bgImage} alt="" className=" bg-gray-700 mix-blend-multiply absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre nosotros</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          En MAIN, nos especializamos en estudiar, diseñar y desarrollar aplicaciones para ayudar en los procesos internos de las empresas, podrás optimizar la eficiencia y agilidad de esos procesos,
          y dejar que la automatización haga el trabajo pesado por ti. Confía en nosotros para llevar tu empresa al siguiente nivel y ser líderes en tu industria. ¡Únete a la innovación con MAIN!
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        {cards.map((card) => (
          <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
            <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
            <div className="text-base leading-7">
              <h3 className="font-semibold text-white">{card.name}</h3>
              <p className="mt-2 text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
