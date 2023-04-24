import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/isotipo.svg" type="image/x-icon" />
        <meta name="keywords" content="MAIN, Prisma, aliado estratégico, eficiencia, agilidad" />
        <meta
          name="description"
          content="En Main, transformamos tus procesos de negocio con soluciones innovadoras y eficaces, elevando tu eficiencia y calidad. Somos tu aliado estratégico comprometido con la excelencia, la innovación y la integridad, y nos mantenemos siempre en vanguardia del mercado. Contamos con altos estándares éticos y de colaboración."
        ></meta>
        <meta name="autor" content="MAIN - Módulos, Aplicaciones e Innovación"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
