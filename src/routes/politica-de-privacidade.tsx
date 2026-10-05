import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.unitaodonto.com.br").replace(
  /\/$/,
  "",
);

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Unità Odontologia & Estética" },
      {
        name: "description",
        content:
          "Entenda como a Unità Odontologia & Estética coleta, usa e protege dados enviados pelo site.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Política de Privacidade | Unità Odontologia & Estética" },
      {
        property: "og:description",
        content: "Informações sobre tratamento de dados, contato, cookies e canais de atendimento.",
      },
      { property: "og:url", content: `${SITE_URL}/politica-de-privacidade` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/politica-de-privacidade` }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-hero px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="eyebrow">
            Unità Odontologia & Estética
          </Link>
          <h1 className="mt-8 font-display text-4xl font-light leading-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-foreground/85">
            Esta política explica como tratamos as informações enviadas pelo site da Unità
            Odontologia & Estética, principalmente em contatos feitos para agendamento, dúvidas e
            atendimento.
          </p>
          <p className="mt-4 text-sm font-normal text-foreground/70">
            Última atualização: 02 de julho de 2026.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-10 text-base font-normal leading-8 text-foreground/85 sm:text-lg">
          <PolicySection title="1. Dados que podemos coletar">
            Podemos coletar informações que você envia voluntariamente, como nome, telefone,
            mensagem, preferência de atendimento e dados necessários para responder ao seu contato.
            Também podemos receber dados técnicos básicos de navegação, como endereço IP,
            dispositivo, navegador e páginas acessadas.
          </PolicySection>

          <PolicySection title="2. Como usamos essas informações">
            Usamos os dados para responder mensagens, organizar agendamentos, prestar atendimento,
            melhorar a experiência no site, medir campanhas e cumprir obrigações legais ou
            regulatórias aplicáveis.
          </PolicySection>

          <PolicySection title="3. WhatsApp, Instagram e links externos">
            Ao clicar em links para WhatsApp, Instagram ou outros serviços externos, você passa a
            usar plataformas de terceiros. O tratamento de dados nesses ambientes segue as políticas
            próprias de cada plataforma.
          </PolicySection>

          <PolicySection title="4. Cookies, métricas e Google Tag Manager">
            O site pode usar cookies e tecnologias semelhantes para entender navegação, mensurar
            campanhas e melhorar o conteúdo. O Google Tag Manager pode carregar tags de medição e
            marketing configuradas pela clínica ou por seus parceiros autorizados.
          </PolicySection>

          <PolicySection title="5. Compartilhamento de dados">
            Não vendemos dados pessoais. Podemos compartilhar informações com fornecedores
            essenciais para operação do site, atendimento, hospedagem, mensuração, marketing e
            cumprimento de obrigações legais, sempre limitado ao necessário.
          </PolicySection>

          <PolicySection title="6. Segurança e retenção">
            Adotamos medidas razoáveis para proteger as informações contra acesso indevido, perda ou
            alteração. Mantemos os dados pelo tempo necessário para atendimento, relacionamento,
            obrigações legais e exercício regular de direitos.
          </PolicySection>

          <PolicySection title="7. Seus direitos">
            Você pode solicitar confirmação de tratamento, acesso, correção, exclusão, portabilidade
            ou revogação de consentimento, conforme a Lei Geral de Proteção de Dados (LGPD).
          </PolicySection>

          <PolicySection title="8. Contato">
            Para dúvidas ou solicitações sobre privacidade, fale com a Unità Odontologia & Estética
            pelos canais oficiais informados no site ou pelo Instagram @odontounita.
          </PolicySection>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-espresso px-7 py-3 text-xs font-normal uppercase tracking-[0.18em] text-espresso-foreground transition-colors hover:bg-gold hover:text-espresso"
          >
            Voltar para o início
          </Link>
        </div>
      </section>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-medium text-foreground">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
