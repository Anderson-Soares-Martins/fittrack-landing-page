import React from "react";

const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Termos de Uso do FitTrack</h1>
        <p className="mb-4">Última atualização: 24 de setembro de 2024</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Aceitação dos Termos
        </h2>
        <p className="mb-4">
          Ao usar o aplicativo FitTrack, você concorda em cumprir e ficar
          vinculado a estes Termos de Uso. Se você não concordar com qualquer
          parte destes termos, não poderá usar nosso serviço.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Alterações nos Termos
        </h2>
        <p className="mb-4">
          Reservamo-nos o direito de modificar ou substituir estes termos a
          qualquer momento. Continuando a acessar ou usar nosso serviço após
          essas revisões entrarem em vigor, você concorda em ficar vinculado aos
          termos revisados.
        </p>

        {/* Adicione as seções restantes dos termos de uso aqui */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contato</h2>
        <p className="mb-4">
          Quaisquer perguntas sobre estes Termos devem ser enviadas para nós em:
          andersoaresmartins@gmail.com
        </p>
      </div>
    </>
  );
};

export default TermsOfUsePage;
