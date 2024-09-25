import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">
          Política de Privacidade do FitTrack
        </h1>
        <p className="mb-4">Última atualização: 24 de setembro de 2024</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Privacidade, Fraude e Uso Indevido de Dispositivos
        </h2>
        <p className="mb-4">
          Levamos a privacidade dos nossos usuários a sério e adotamos medidas
          rigorosas para garantir a proteção de dados pessoais. Qualquer
          tentativa de fraude, uso indevido de dispositivos ou coleta indevida
          de informações será tratada com ações apropriadas, incluindo a
          suspensão de contas e, se necessário, relatórios às autoridades
          competentes. Também monitoramos e bloqueamos comportamentos suspeitos
          para evitar o uso abusivo de nossos sistemas e recursos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Dados do Usuário
        </h2>
        <p className="mb-4">
          Coletamos dados de usuários com o único propósito de fornecer uma
          experiência melhor e mais personalizada em nosso aplicativo. Os tipos
          de dados coletados podem incluir informações de perfil, histórico de
          uso do aplicativo e dados de saúde. Todos os dados são armazenados de
          maneira segura, de acordo com as normas de proteção de dados
          aplicáveis, como o GDPR e a LGPD.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Permissões e APIs que Acessam Informações Sensíveis
        </h2>
        <p className="mb-4">
          Nosso aplicativo pode solicitar permissões que permitem o acesso a
          informações sensíveis, como localização, arquivos, câmera, microfone,
          registros de chamadas e outros dados relevantes para o funcionamento
          do aplicativo. APIs como Health Connect podem ser integradas para
          coletar e sincronizar dados relacionados à saúde e ao bem-estar. Todos
          os dados sensíveis são usados exclusivamente com o consentimento
          explícito do usuário e com finalidades claras descritas nesta
          política.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Abuso de Dispositivos e de Rede
        </h2>
        <p className="mb-4">
          Nosso aplicativo é projetado para operar de forma ética e respeitosa
          em relação aos dispositivos dos usuários e às redes em que estão
          conectados. Não toleramos qualquer abuso ou uso indevido de recursos
          do dispositivo, incluindo o consumo excessivo de dados ou energia, ou
          o uso não autorizado de serviços de rede.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Comportamento Enganoso
        </h2>
        <p className="mb-4">
          Acreditamos em uma relação transparente com nossos usuários. Não
          permitimos comportamento enganoso, como funcionalidades ocultas,
          coleta de dados sem consentimento, ou uso de informações pessoais para
          fins não divulgados. Todas as funcionalidades e coletas de dados são
          claramente informadas e exigem a autorização do usuário.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Declarações Falsas
        </h2>
        <p className="mb-4">
          Nos comprometemos a fornecer descrições precisas e verdadeiras de
          nossos serviços e funcionalidades. Não fazemos declarações falsas ou
          enganosas sobre o que nosso aplicativo oferece. Todas as informações
          fornecidas nas lojas de aplicativos e em nossa política de privacidade
          refletem a realidade do funcionamento do aplicativo.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Política de Nível Desejado da API do Google Play
        </h2>
        <p className="mb-4">
          Nosso aplicativo cumpre os requisitos do Google Play, incluindo a
          política de nível desejado da API, garantindo que usamos APIs recentes
          e seguras para oferecer a melhor experiência aos nossos usuários. Isso
          inclui garantir a compatibilidade com as atualizações mais recentes do
          sistema operacional Android e o uso de APIs adequadas para o acesso a
          informações sensíveis.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          8. Requisitos de SDK
        </h2>
        <p className="mb-4">
          Para garantir a qualidade e segurança do aplicativo, utilizamos SDKs
          de terceiros que seguem as políticas do Google Play. Qualquer SDK
          integrado é cuidadosamente revisado para garantir a conformidade com
          as melhores práticas de privacidade e segurança.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contato</h2>
        <p className="mb-4">
          Se você tiver alguma dúvida sobre esta política de privacidade, entre
          em contato conosco em: andersoaresmartins@gmail.com
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
