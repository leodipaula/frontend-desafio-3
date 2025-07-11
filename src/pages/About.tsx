import FeatureCard from "../components/FeatureCard";
import { CheckCircle, Users, Shield, Cpu, DollarSign } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="text-[#ff6961] w-8 h-8" />,
    title: "Ética",
    description: "Zero comissões, 100% do valor para os produtores.",
    cor: "#FCE5C1",
  },
  {
    icon: <Users className="text-[#ff6961] w-8 h-8" />,
    title: "Comunidade",
    description: "Rede solidária e colaborativa, baseada em trocas e apoio mútuo.",
    cor: "#D6E9C6",
  },
  {
    icon: <Shield className="text-[#ff6961] w-8 h-8" />,
    title: "Transparência",
    description: "Finanças abertas e modelo baseado em confiança e verdade.",
    cor: "#E3F0FF",
  },
  {
    icon: <Cpu className="text-[#ff6961] w-8 h-8" />,
    title: "Tecnologia",
    description: "Ferramentas livres, acessíveis e de código aberto.",
    cor: "#C9E4C5",
  },
];

const About = () => {
  return (
    <div style={{ backgroundColor: "#f5f5dc" }} className="w-full">
      <section className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#2F3E46]" style={{ fontFamily: "'Courgette', cursive" }}>
          Sobre a rebU Eats
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Mais do que uma plataforma de delivery — uma proposta ética, social e colaborativa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <p>
            A <span className="text-red-600 font-semibold">rebU Eats</span> 
            é mais do que uma plataforma de delivery de comida — é uma proposta ética, social e colaborativa 
            de repensar como nos alimentamos e como nos conectamos.
          </p>

          <p>
            Nosso sistema é{" "}
            <span className="text-green-700 font-semibold">livre, aberto e comunitário</span>. 
            Não cobramos comissões de restaurantes, cozinheiros independentes ou entregadores. 
            Todo o valor das compras vai 100% para quem produz e entrega a comida. 
            Acreditamos que isso é o mínimo para construir uma rede justa de alimentação.
          </p>

          <p>
            <span className="font-semibold">Não somos uma startup atrás de investidores.</span> 
            Não temos sede em um prédio espelhado nem metas de lucro trimestral. 
            Somos um projeto coletivo, sustentado por doações, apoio da comunidade e adesões éticas.
          </p>

          <div className="bg-gradient-to-r from-[#ff6961] to-green-600 text-white text-center font-semibold text-lg py-4 px-6 rounded">
            "A comida é cultura, é memória, é cuidado. Ela une famílias, amigos e histórias."
          </div>

          <p>
            Por isso, a tecnologia da rebU Eats existe para facilitar esses encontros e 
            apoiar quem vive da alimentação, sem explorar nem intermediar de forma abusiva.
          </p>

          <p className="text-green-700 font-semibold">
            Queremos ser ponte. Queremos ser ferramenta. Queremos ser um meio
          </p>
          <p>
            para que mais pessoas tenham acesso à comida boa, feita com afeto, por quem realmente entende disso.
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 text-yellow-900 rounded-md flex gap-2">
            <DollarSign className="w-5 h-5 mt-1 text-yellow-500" />
            <div>
              <p className="font-semibold">Transparência Financeira</p>
              <p>
                O dinheiro arrecadado é usado exclusivamente para pagar a infraestrutura técnica 
                (como servidores e manutenção do site), e para garantir remuneração justa às pessoas 
                desenvolvedoras que mantêm esse projeto funcionando.
              </p>
            </div>
          </div>

          <p>
            Se você acredita nessa proposta, ajude a manter o rebU Eats no ar. 
            Cada clique, cada refeição, cada doação conta.
          </p>

          <p className="text-center font-bold text-xl text-[#2F3E46]">
            Comida não é só um produto — <br />
            <span className="text-[#ff6961]">é um direito, é cultura, é partilha.</span>
          </p>

          <div className="text-center">
            <button className="bg-[#ff6961] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 cursor-pointer">
              Apoie o Projeto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
