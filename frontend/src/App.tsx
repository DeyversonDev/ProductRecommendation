import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList';
import { SessionProvider } from './contexts/useSession';
import rdLogo from './assets/images/rd_logo.png';
import { ThemeSwitch } from './components/ThemeSwitch';

function App() {
  return (
    <SessionProvider>
      <div className="background min-h-screen flex flex-col pb-36">
        <div className="flex  p-8">
          <div className="mr-auto align-items-center justify-center ">
            <img
              src={rdLogo}
              alt="RD Station Logo"
              className="h-8 dark:invert dark:brightness-0"
            />
            <h1 className="text-color text-3xl font-bold mt-4">
              Recomendador de Produtos RD Station
            </h1>
          </div>
          <ThemeSwitch />
        </div>

        <div className="px-8">
          <div className="mt-4 mb-8">
            <p className="text-lg text-color">
              Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
              encontrar uma variedade de produtos da RD Station, cada um
              projetado para atender às necessidades específicas do seu negócio.
              De CRM a Marketing, de Conversas a Inteligência Artificial, temos
              uma solução para ajudar você a alcançar seus objetivos. Use o
              formulário abaixo para selecionar suas preferências e
              funcionalidades desejadas e receba recomendações personalizadas de
              produtos que melhor atendam às suas necessidades.
            </p>
          </div>
          <div>
            <Form />
          </div>
          <div>
            <RecommendationList />
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}

export default App;
