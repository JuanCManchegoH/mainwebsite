import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/isotipo.svg" type="image/x-icon" />
        <meta name="keywords" content="MAIN, Prisma, aliado estratégico, eficiencia, agilidad" />
        <meta
          name="description"
          content="Conoce esta ventana al futuro de la organización del personal y agiliza los procesos productivos de forma práctica y tecnológica en pocos pasos.
                  Ahorra tiempo y Dinero
                  Integra los procesos de tu empresa
                  Obtén un mes de prueba."
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
