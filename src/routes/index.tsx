import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  HeartHandshake,
  CreditCard,
  CalendarCheck,
  MapPin,
  Instagram,
  ArrowRight,
  Check,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import logoDark from "@/assets/unita-dark.png.asset.json";
import logoLight from "@/assets/unita-light.png.asset.json";
import heroSmile from "@/assets/hero-smile.jpg";
import serviceFacetas from "@/assets/service-facetas.jpg";
import serviceImplante from "@/assets/service-implante.jpg";
import serviceInvisalign from "@/assets/service-invisalign.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import esteticaFacial from "@/assets/estetica-facial.jpg";
import resultSmile from "@/assets/result-smile.jpg";
import locationReception from "@/assets/location-reception.jpg";
import locationRoom from "@/assets/location-room.jpg";
import locationDetail from "@/assets/location-detail.jpg";
import teamGabriela from "@/assets/team-gabriela.jpg";
import teamLuana from "@/assets/team-luana.jpg";
import teamGiovanna from "@/assets/team-giovanna.jpg";
import teamAnaCarolina from "@/assets/team-ana-carolina.jpg";
import teamStephany from "@/assets/team-stephany.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/odontounita/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unità Odontologia & Estética | SBC e Santo André" },
      {
        name: "description",
        content:
          "Atendimento humanizado, estética dental e facial. Facetas, clareamento, implantes e Invisalign. Avaliação gratuita em São Bernardo e Santo André.",
      },
      { property: "og:title", content: "Unità Odontologia & Estética | SBC e Santo André" },
      {
        property: "og:description",
        content:
          "Seu sorriso, cuidado com excelência. Avaliação gratuita, preço justo e facilidade de pagamento.",
      },
      { property: "og:url", content: "https://unitaodonto.lovable.app/" },
      { property: "og:image", content: heroSmile },
      { name: "twitter:title", content: "Unità Odontologia & Estética" },
      { name: "twitter:description", content: "Avaliação gratuita, estética dental e facial em SBC e Santo André." },
      { name: "twitter:image", content: heroSmile },
      { name: "keywords", content: "odontologia, dentista, facetas em resina, clareamento dental, implante dentário, invisalign, estética facial, São Bernardo do Campo, Santo André, ABC Paulista" },
    ],
    links: [
      { rel: "canonical", href: "https://unitaodonto.lovable.app/" },
      { rel: "preload", as: "image", href: heroSmile, fetchpriority: "high" } as unknown as { rel: string; href: string },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Unità Odontologia & Estética",
          description:
            "Clínica odontológica com atendimento humanizado, estética dental e facial — facetas, clareamento, implantes e Invisalign.",
          url: "https://unitaodonto.lovable.app/",
          image: "https://unitaodonto.lovable.app" + heroSmile,
          telephone: "",
          priceRange: "$$",
          areaServed: [
            { "@type": "City", name: "São Bernardo do Campo" },
            { "@type": "City", name: "Santo André" },
          ],
          sameAs: ["https://www.instagram.com/odontounita/"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "27",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "A consulta de avaliação é realmente gratuita?", acceptedAnswer: { "@type": "Answer", text: "Sim! A primeira consulta de avaliação é 100% gratuita e sem compromisso." } },
            { "@type": "Question", name: "Quais formas de pagamento vocês aceitam?", acceptedAnswer: { "@type": "Answer", text: "Aceitamos cartão de crédito com parcelamento facilitado e boleto bancário." } },
            { "@type": "Question", name: "O Invisalign funciona para qualquer idade?", acceptedAnswer: { "@type": "Answer", text: "Sim, é indicado para jovens e adultos que querem alinhar os dentes com discrição." } },
            { "@type": "Question", name: "Vocês atendem quais regiões?", acceptedAnswer: { "@type": "Answer", text: "Paraíso, Jardins, Jardim Stela, Centro de SBC e Centro de Santo André — e toda a região do ABC Paulista." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function CTAButton({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "light" }) {
  const base =
    "group relative inline-flex items-center gap-2 sm:gap-3 overflow-hidden rounded-full px-6 py-3.5 sm:px-9 sm:py-4 text-[0.72rem] sm:text-[0.78rem] font-normal uppercase tracking-[0.18em] sm:tracking-[0.22em] transition-all duration-500 shadow-soft hover:shadow-card hover:-translate-y-0.5";
  const styles =
    variant === "dark"
      ? "bg-espresso text-espresso-foreground hover:bg-gold hover:text-espresso"
      : "bg-cream text-foreground hover:bg-gold hover:text-espresso";
  return (
    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
    </a>
  );
}

const services = [
  {
    img: serviceFacetas,
    num: "01",
    title: "Facetas em Resina & Clareamento",
    text: "Pra quem quer um sorriso mais bonito sem perder o ar de natural. Avaliamos com calma o que faz mais sentido pra você.",
  },
  {
    img: serviceImplante,
    num: "02",
    title: "Implantes & Próteses",
    text: "Pra voltar a mastigar bem e sorrir sem se preocupar. Planejamento certinho e materiais de qualidade.",
  },
  {
    img: serviceInvisalign,
    num: "03",
    title: "Invisalign®",
    text: "Alinhador transparente, sem aquele aparelho fixo. Discreto, confortável e cabe na sua rotina.",
  },
];

const steps = [
  {
    num: "01",
    title: "Chama no Instagram",
    text: "Manda uma DM pra @odontounita e a gente combina um horário que funciona pra você.",
  },
  {
    num: "02",
    title: "Vem tomar um café",
    text: "A primeira consulta é nossa conta. A gente conversa, avalia e mostra o caminho — sem pressão pra fechar.",
  },
  {
    num: "03",
    title: "Começa do seu jeito",
    text: "Se fizer sentido, a gente combina o tratamento e a melhor forma de pagar. No cartão ou no boleto.",
  },
];

const depoimentos = [
  {
    name: "Mariana",
    bairro: "Jardins",
    text: "Fiz as facetas e o clareamento. Ficou natural do jeito que eu queria e me trataram super bem.",
  },
  {
    name: "Carlos",
    bairro: "Centro de SBC",
    text: "Meu implante coube no bolso e a equipe explicou tudo com calma. Recomendo sem pensar.",
  },
  {
    name: "Júlia",
    bairro: "Centro de Santo André",
    text: "Tô com Invisalign e quase ninguém percebe. A avaliação gratuita me deu segurança pra começar.",
  },
];

const team = [
  {
    img: teamGabriela,
    name: "Dra. Gabriela Virgílio",
    role: "Cirurgia Oral & Clínico Geral",
  },
  {
    img: teamLuana,
    name: "Dra. Luana Rodrigues",
    role: "Estética & Clínico Geral",
  },
  {
    img: teamGiovanna,
    name: "Dra. Giovanna Spigolon",
    role: "Ortodontista",
  },
  {
    img: teamAnaCarolina,
    name: "Dra. Ana Carolina",
    role: "Protesista",
  },
  {
    img: teamStephany,
    name: "Stephany",
    role: "Estagiária · Estudante de Odontologia",
  },
];

const faqs = [
  {
    q: "A consulta de avaliação é realmente gratuita?",
    a: "É sim. A primeira consulta é por nossa conta e sem compromisso nenhum — você conhece a clínica, conversa com a gente e sai com um plano pra pensar com calma.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Cartão de crédito (com parcelamento) e boleto. A gente sempre tenta achar uma forma que caiba no seu orçamento.",
  },
  {
    q: "Qual a diferença entre faceta em resina e clareamento?",
    a: "O clareamento deixa os seus dentes mais brancos. A faceta em resina muda formato, alinhamento e cor, ideal pra quem quer mudar mais o visual do sorriso. Na avaliação a gente te indica o melhor pro seu caso.",
  },
  {
    q: "O Invisalign funciona para qualquer idade?",
    a: "Funciona pra jovens e adultos que querem alinhar os dentes sem aparelho fixo, com mais discrição e conforto.",
  },
  {
    q: "Vocês atendem quais regiões?",
    a: "Recebemos pacientes de toda a região do ABC: Paraíso, Jardins, Jardim Stela, Centro de SBC e Centro de Santo André.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          <img src={logoDark.url} alt="Unità Odontologia & Estética" className="h-12 w-auto sm:h-14 md:h-16" width={854} height={446} />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Instagram className="h-4 w-4" /> @odontounita
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-28 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-32 md:grid-cols-2 md:pb-20 md:pt-32 lg:pb-24">
          <div className="animate-fade-up">
            <p className="eyebrow mb-4 sm:mb-6">Odontologia & Estética · ABC Paulista</p>
            <h1 className="font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Seu sorriso,
              <br />
              <em className="font-normal italic text-gold">bem cuidado.</em>
              <br />
              Sem complicação.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
              A gente cuida do seu sorriso com calma, atenção e um preço que cabe no bolso. Em SBC e Santo André.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-6">
              <CTAButton>Quero marcar minha avaliação</CTAButton>
            </div>
          </div>
          <div className="animate-fade-up relative [animation-delay:200ms]">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              {/* Offset gold frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/60 sm:translate-x-4 sm:translate-y-4"
                style={{ borderRadius: "62% 38% 56% 44% / 60% 55% 45% 40%" }}
              />
              {/* Soft gold blur halo */}
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gold/30 blur-3xl sm:h-32 sm:w-32"
              />
              {/* Image with organic asymmetric blob mask */}
              <div
                className="shadow-soft relative overflow-hidden"
                style={{ borderRadius: "62% 38% 56% 44% / 60% 55% 45% 40%" }}
              >
                <img
                  src={heroSmile}
                  alt="Paciente sorrindo após tratamento estético na Unità"
                  className="h-full w-full object-cover"
                  width={1024}
                  height={1280}
                  fetchPriority="high"
                />
              </div>
              {/* Floating italic caption tag */}
              <div className="shadow-card absolute -bottom-4 left-4 hidden bg-background px-5 py-3 sm:left-6 md:block">
                <p className="font-display text-sm italic text-espresso">
                  sorria <span className="text-gold">do seu jeito</span>
                </p>
              </div>
              {/* Sparkle accent */}
              <span className="absolute -right-2 top-8 hidden font-display text-3xl text-gold md:block" aria-hidden="true">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="group relative overflow-hidden border-y border-border bg-espresso py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-espresso to-transparent sm:w-16" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-espresso to-transparent sm:w-16" aria-hidden="true" />
        <div className="flex w-max animate-marquee items-center gap-x-8 text-[0.62rem] uppercase tracking-[0.22em] text-espresso-foreground/80 sm:gap-x-12 sm:text-[0.7rem] sm:tracking-[0.3em] group-hover:[animation-play-state:paused]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-x-8 sm:gap-x-12" aria-hidden={i === 1 ? "true" : undefined}>
              <span>1ª consulta por nossa conta</span>
              <span className="text-gold">✦</span>
              <span>Cartão & boleto</span>
              <span className="text-gold">✦</span>
              <span>Preço que cabe</span>
              <span className="text-gold">✦</span>
              <span>Atendimento com calma</span>
              <span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="eyebrow mb-4 sm:mb-5">O que a gente faz</p>
          <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Tratamentos pensados pra ficar <em className="font-normal italic text-gold">natural</em>
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.num} className="group">
              <div className="shadow-card overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={896}
                  height={704}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-7 font-display text-sm italic text-gold">{s.num}</p>
              <h3 className="mt-2 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Estética facial */}
      <section className="bg-espresso text-espresso-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:gap-14 sm:px-6 sm:py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="eyebrow mb-4 sm:mb-5">Pra além do sorriso</p>
            <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Cuidado com o <em className="font-normal italic text-gold">rosto</em> também
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-espresso-foreground/70">
              Porque o sorriso vem junto com o rosto. A gente cuida dos dois com segurança e sem exagero — pra você se sentir bem com o seu rosto, não com o de outra pessoa.
            </p>
            <ul className="mt-8 space-y-3">
              {["Avaliação no seu tempo, sem pressa", "Procedimentos seguros e pouco invasivos", "Resultado natural, do seu jeito"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-espresso-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton variant="light">Bora conversar</CTAButton>
            </div>
          </div>
          <div className="shadow-soft overflow-hidden rounded-t-full">
            <img
              src={esteticaFacial}
              alt="Sala de estética facial da Unità"
              loading="lazy"
              width={896}
              height={1120}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Humanized care */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:gap-14 sm:px-6 sm:py-24 md:grid-cols-2 md:py-32">
          <div className="shadow-soft overflow-hidden">
            <img
              src={clinicInterior}
              alt="Ambiente acolhedor da clínica Unità"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4 sm:mb-5">Por que a Unità</p>
            <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              A gente trata você como <em className="font-normal italic text-gold">gente</em>, não como número
            </h2>
            <ul className="mt-10 space-y-7">
              {[
                {
                  icon: HeartHandshake,
                  title: "A gente escuta",
                  text: "Cada boca é uma boca. Antes de qualquer coisa, a gente entende o que você quer.",
                },
                {
                  icon: Sparkles,
                  title: "Qualidade sem preço absurdo",
                  text: "Trabalho bem feito, sem pesar no bolso. Valores claros desde o início.",
                },
                {
                  icon: CreditCard,
                  title: "Paga do seu jeito",
                  text: "Cartão parcelado ou boleto. A gente acha um caminho que funcione pra você.",
                },
                {
                  icon: CalendarCheck,
                  title: "1ª consulta é nossa conta",
                  text: "Vem conhecer, conversar e pensar com calma. Sem pressão pra fechar nada.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium">{item.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="bg-espresso text-espresso-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
          <div className="mb-12 text-center sm:mb-16">
            <p className="eyebrow mb-4 sm:mb-5">Quem cuida de você</p>
            <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Conheça a nossa <em className="font-normal italic text-gold">equipe</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-espresso-foreground/70 sm:mt-6 sm:text-lg">
              Profissionais dedicadas a cuidar do seu sorriso com atenção, técnica e carinho.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 md:grid-cols-5">
            {team.map((member) => (
              <figure key={member.name} className="group text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[180px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-2 translate-y-2 rounded-full border border-gold/60 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                  <div className="shadow-soft relative h-full w-full overflow-hidden rounded-full">
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      width={360}
                      height={360}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <figcaption className="mt-6">
                  <h3 className="font-display text-lg font-medium leading-tight">{member.name}</h3>
                  <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-espresso-foreground/55">
                    {member.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="mb-12 text-center sm:mb-16">
          <p className="eyebrow mb-4 sm:mb-5">Como funciona</p>
          <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Em <em className="font-normal italic text-gold">três passos</em>, sem enrolação
          </h2>
        </div>
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              <p className="font-display text-6xl font-light text-gold/40">{s.num}</p>
              <h3 className="mt-4 font-display text-2xl font-medium">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <span className="absolute right-0 top-8 hidden h-px w-16 translate-x-1/2 bg-gold/30 md:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <CTAButton>Quero marcar a minha</CTAButton>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
          <div className="mb-12 grid items-end gap-6 sm:mb-16 sm:gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow mb-4 sm:mb-5">Quem já passou por aqui</p>
              <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                O que estão <em className="font-normal italic text-gold">falando</em> da gente
              </h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.name} className="shadow-card flex flex-col bg-background p-6 sm:p-8">
                <Quote className="h-7 w-7 text-gold/50" strokeWidth={1.2} />
                <blockquote className="mt-5 flex-1 leading-relaxed text-muted-foreground">
                  “{d.text}”
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-display text-lg font-medium">{d.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.bairro}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-20 sm:gap-14 sm:px-6 sm:py-24 md:grid-cols-[1fr_1.2fr] md:py-32">
        <div>
          <p className="eyebrow mb-4 sm:mb-5">Perguntas que sempre rolam</p>
          <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Tá com <em className="font-normal italic text-gold">dúvida?</em> A gente responde.
          </h2>
          <div className="shadow-soft mt-10 hidden overflow-hidden rounded-t-full md:block md:max-w-xs">
            <img
              src={resultSmile}
              alt="Sorriso radiante de paciente Unità"
              loading="lazy"
              width={896}
              height={704}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-medium hover:no-underline sm:py-6 sm:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 md:py-32">
        <div className="grid items-end gap-10 sm:gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4 sm:mb-5">Onde estamos</p>
            <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Pertinho de você, no <em className="font-normal italic text-gold">ABC</em>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
              Nossa clínica foi pensada pra você se sentir tranquilo desde que entra. Bem localizada, com fácil acesso pra quem é de SBC, Santo André e região.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Recepção tranquila, sem aquela cara de hospital",
                "Equipamentos novos e bem cuidados",
                "Estacionamento por perto, fácil de chegar",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              ABC Paulista · SBC & Santo André
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="shadow-card col-span-2 overflow-hidden">
              <img
                src={locationReception}
                alt="Recepção da clínica Unità"
                loading="lazy"
                width={1024}
                height={720}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="shadow-card overflow-hidden">
              <img
                src={locationDetail}
                alt="Detalhe acolhedor da sala de espera"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="shadow-card overflow-hidden">
              <img
                src={locationRoom}
                alt="Sala clínica iluminada por luz natural"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-espresso text-espresso-foreground">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 md:py-32">
          <img
            src={logoLight.url}
            alt=""
            loading="lazy"
            className="mx-auto mb-8 h-16 w-auto opacity-90 sm:mb-10 sm:h-20"
            width={854}
            height={446}
          />
          <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Bora <em className="font-normal italic text-gold">marcar</em> a sua?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-espresso-foreground/70 sm:mt-6 sm:text-base">
            Manda uma DM pra gente no Instagram e a gente combina um horário. Pagamento no cartão ou no boleto, do seu jeito.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton variant="light">Chamar no Instagram</CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-espresso-foreground/10 bg-espresso py-8 text-espresso-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-[0.65rem] uppercase tracking-[0.2em] sm:flex-row sm:px-6 sm:text-xs sm:tracking-[0.25em]">
          <span>© {new Date().getFullYear()} Unità Odontologia & Estética</span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-espresso-foreground"
          >
            <Instagram className="h-4 w-4" /> @odontounita
          </a>
        </div>
      </footer>
    </div>
  );
}
