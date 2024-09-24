import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">
          Política de Privacidade do FitTrack
        </h1>
        <p className="mb-4">Última atualização: 24 de setembro de 2024</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introdução</h2>
        <p className="mb-4">
          Bem-vindo à Política de Privacidade do FitTrack. Nós respeitamos sua
          privacidade e estamos comprometidos em proteger seus dados pessoais.
          Esta política de privacidade irá informá-lo sobre como cuidamos de
          seus dados pessoais quando você usa nosso aplicativo e site, e sobre
          seus direitos de privacidade.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Dados que coletamos
        </h2>
        <p className="mb-4">
          Podemos coletar, usar, armazenar e transferir diferentes tipos de
          dados pessoais sobre você, incluindo:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Dados de identidade (nome, data de nascimento)</li>
          <li>Dados de contato (endereço de e-mail, número de telefone)</li>
          <li>Dados de perfil (nome de usuário, senha, preferências)</li>
          <li>
            Dados de uso (informações sobre como você usa nosso aplicativo)
          </li>
          <li>
            Dados de saúde e fitness (peso, altura, medidas corporais, detalhes
            de treinos)
          </li>
          <li>Permissões de camera (para foto de perfil)</li>
        </ul>

        {/* Adicione as seções restantes da política de privacidade aqui */}

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contato</h2>
        <p className="mb-4">
          Se você tiver alguma dúvida sobre esta política de privacidade, entre
          em contato conosco em: andersoaresmartins@gmail.com
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
