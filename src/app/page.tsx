import Image from "next/image";

import {
  FiSmartphone,
  FiActivity,
  FiUsers,
  FiArrowRight
} from "react-icons/fi";

import logo from "@/assets/images/strong-bear.webp";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="bg-card text-secondary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <img
            src={logo.src}
            alt="FitTrack Logo"
            className="w-24 h-24 mx-auto mb-6 rounded-full"
          />
          <h1 className="text-4xl font-bold mb-4">FitTrack</h1>
          <p className="text-xl mb-8">
            Transforme seus treinos com o poder dos dados
          </p>
          <Button className="rounded-full font-bold text-lg" size="lg">
            Baixe Agora
          </Button>
        </div>
      </div>

      <div className="py-20 px-4 text-secondary-foreground ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            Por que escolher o FitTrack?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FiSmartphone className="text-blue-500 text-2xl mr-2" />
                <h3 className="text-xl font-semibold">Fácil de Usar</h3>
              </div>
              <p>
                Interface intuitiva para registrar seus treinos rapidamente.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <FiActivity className="text-blue-500 text-2xl mr-2" />
                <h3 className="text-xl font-semibold">
                  Acompanhe seu Progresso
                </h3>
              </div>
              <p>
                Gráficos detalhados para visualizar sua evolução ao longo do
                tempo.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <FiUsers className="text-blue-500 text-2xl mr-2" />
                <h3 className="text-xl font-semibold">Comunidade</h3>
              </div>
              <p>
                Conecte-se com outros entusiastas do fitness e compartilhe suas
                conquistas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card py-20 px-4 text-secondary-foreground ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nossos usuários dizem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-secondary">
            <div className="bg-secondary-foreground p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "FitTrack revolucionou meus treinos. Agora posso ver claramente
                meu progresso e isso me motiva ainda mais!"
              </p>
              <p className="font-semibold">- Maria S.</p>
            </div>
            <div className="bg-secondary-foreground p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "A facilidade de uso e os insights fornecidos pelo app são
                incríveis. Recomendo a todos!"
              </p>
              <p className="font-semibold">- João P.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 text-center text-secondary-foreground ">
        <h2 className="text-3xl font-bold mb-8">
          Pronto para transformar seus treinos?
        </h2>
        <Button className="rounded-full font-bold text-base" size="lg">
          Comece Agora
          <FiArrowRight className="ml-2" />
        </Button>
      </div>
    </>
  );
}
