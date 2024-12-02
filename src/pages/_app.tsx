// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css'; // Importa os estilos globais

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Ordenação de Tabela</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Renderiza o componente específico da página */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
