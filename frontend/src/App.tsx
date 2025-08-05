import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList';
import { SessionProvider } from './contexts/useSession';
import rdLogo from './assets/images/rd_logo.png';

function App() {
  return (
    <SessionProvider>
      <div className="bg-white min-h-screen flex flex-col justify-center items-center pb-36">
        <div className="mr-auto p-8 align-items-center justify-center ">
          <img src={rdLogo} alt="RD Station Logo" className="h-8" />
          <h1 className="text-3xl font-bold mt-4">
            Recomendador de Produtos RD Station
          </h1>
        </div>

        <div className="p-8">
          <div className="mb-4">
            <p className="text-lg">
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
