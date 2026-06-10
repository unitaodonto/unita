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
  Star,
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
      { property: "og:title", content: "Unità Odontologia & Estética" },
      {
        property: "og:description",
        content:
          "Seu sorriso, cuidado com excelência. Avaliação gratuita, preço justo e facilidade de pagamento.",
      },
      { property: "og:image", content: heroSmile },
      { name: "twitter:image", content: heroSmile },
    ],
  }),
  component: Index,
});

function CTAButton({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "light" }) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-9 py-4 text-[0.78rem] font-normal uppercase tracking-[0.22em] transition-all duration-500 shadow-soft hover:shadow-card hover:-translate-y-0.5";
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
    text: "O design do sorriso que valoriza o seu rosto. Facetas naturais e clareamento seguro para um sorriso luminoso.",
  },
  {
    img: serviceImplante,
    num: "02",
    title: "Implantes & Próteses",
    text: "Recupere a função e a confiança de sorrir. Reabilitação completa com planejamento e materiais de excelência.",
  },
  {
    img: serviceInvisalign,
    num: "03",
    title: "Invisalign®",
    text: "Alinhamento invisível, sem aparelho fixo. Discrição e conforto para transformar o sorriso na sua rotina.",
  },
];

const bairros = ["Paraíso", "Jardins", "Jardim Stela", "Centro de SBC", "Centro de Santo André"];

const steps = [
  {
    num: "01",
    title: "Agende pelo Instagram",
    text: "Envie uma mensagem para @odontounita e escolha o melhor dia e horário para você.",
  },
  {
    num: "02",
    title: "Avaliação gratuita",
    text: "Você é recebido com calma: exame completo, escuta atenta e um plano de tratamento personalizado.",
  },
  {
    num: "03",
    title: "Sorriso transformado",
    text: "Tratamento com qualidade, preço justo e parcelamento facilitado no cartão ou boleto.",
  },
];

const depoimentos = [
  {
    name: "Mariana S.",
    bairro: "Jardins",
    text: "Fiz minhas facetas em resina e o clareamento. Resultado super natural e o atendimento foi acolhedor do início ao fim. Me senti em casa!",
  },
  {
    name: "Carlos E.",
    bairro: "Centro de SBC",
    text: "Coloquei meu implante com parcelamento que coube no meu bolso. Equipe atenciosa, tudo explicado com paciência. Recomendo demais.",
  },
  {
    name: "Júlia R.",
    bairro: "Centro de Santo André",
    text: "Estou tratando com Invisalign e nem parece que uso alinhador. A avaliação gratuita me deu total segurança para começar.",
  },
];

const faqs = [
  {
    q: "A consulta de avaliação é realmente gratuita?",
    a: "Sim! A primeira consulta de avaliação é 100% gratuita e sem compromisso. Você conhece a clínica, conversa com a equipe e recebe um plano de tratamento personalizado.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos cartão de crédito (com parcelamento facilitado) e boleto bancário. Nosso compromisso é encontrar uma condição que caiba no seu orçamento.",
  },
  {
    q: "Qual a diferença entre faceta em resina e clareamento?",
    a: "O clareamento devolve o tom branco natural dos seus dentes. Já as facetas em resina remodelam formato, alinhamento e cor — ideais para transformar o design do sorriso. Na avaliação, indicamos o melhor caminho para o seu caso.",
  },
  {
    q: "O Invisalign funciona para qualquer idade?",
    a: "Sim! O alinhador invisível é indicado para jovens e adultos que querem alinhar os dentes com discrição e conforto, sem aparelho fixo.",
  },
  {
    q: "Vocês atendem quais regiões?",
    a: "Atendemos pacientes do Paraíso, Jardins, Jardim Stela, Centro de São Bernardo do Campo e Centro de Santo André — e toda a região do ABC Paulista.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <img src={logoDark.url} alt="Unità Odontologia & Estética" className="h-14 w-auto md:h-16" width={854} height={446} />
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
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-2 md:pb-0 md:pt-32">
          <div className="animate-fade-up">
            <p className="eyebrow mb-6">Odontologia & Estética · ABC Paulista</p>
            <h1 className="font-display text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
              O sorriso que
              <br />
              <em className="font-normal italic text-gold">você merece,</em>
              <br />
              com o cuidado que você sente.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Atendimento humanizado, estética dental e facial com preço justo — em São Bernardo do Campo e Santo André.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <CTAButton>Agendar avaliação gratuita</CTAButton>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-gold" /> Consulta de avaliação 100% gratuita
            </p>
          </div>
          <div className="animate-fade-up relative [animation-delay:200ms]">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="overflow-hidden rounded-t-full">
                <img
                  src={heroSmile}
                  alt="Paciente sorrindo após tratamento estético na Unità"
                  className="h-full w-full object-cover"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="shadow-soft absolute -bottom-6 -left-6 hidden bg-background px-7 py-5 md:block">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={1} />
                  ))}
                </div>
                <p className="mt-2 font-display text-xl italic text-foreground">“Como em casa.”</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">pacientes Unità</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-espresso py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-[0.7rem] uppercase tracking-[0.3em] text-espresso-foreground/80">
          <span>Avaliação gratuita</span>
          <span className="text-gold">✦</span>
          <span>Cartão & boleto</span>
          <span className="text-gold">✦</span>
          <span>Preço justo</span>
          <span className="text-gold">✦</span>
          <span>Atendimento humanizado</span>
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-5">Tratamentos em destaque</p>
          <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
            Estética que respeita a sua <em className="font-normal italic text-gold">naturalidade</em>
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="eyebrow mb-5">Além do sorriso</p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              Estética <em className="font-normal italic text-gold">facial</em> que realça quem você é
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-espresso-foreground/70">
              Harmonia entre o sorriso e o rosto: cuidados estéticos faciais com técnica, segurança e
              naturalidade — para você se sentir bem por inteiro.
            </p>
            <ul className="mt-8 space-y-3">
              {["Avaliação personalizada do rosto e do sorriso", "Procedimentos seguros e minimamente invasivos", "Resultados naturais, sem exageros"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-espresso-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-gold" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton variant="light">Quero saber mais</CTAButton>
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
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
            <p className="eyebrow mb-5">Por que a Unità?</p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              Cuidado <em className="font-normal italic text-gold">humanizado</em>, do início ao sorriso final
            </h2>
            <ul className="mt-10 space-y-7">
              {[
                {
                  icon: HeartHandshake,
                  title: "Atendimento humanizado",
                  text: "Você é ouvido com calma e acolhimento — cada plano de tratamento é único, como o seu sorriso.",
                },
                {
                  icon: Sparkles,
                  title: "Qualidade com preço justo",
                  text: "Excelência clínica e estética sem abrir mão de valores acessíveis e transparentes.",
                },
                {
                  icon: CreditCard,
                  title: "Facilidade de pagamento",
                  text: "Parcele no cartão ou pague no boleto. O seu sorriso cabe no seu orçamento.",
                },
                {
                  icon: CalendarCheck,
                  title: "Avaliação gratuita",
                  text: "A primeira consulta é por nossa conta: avaliação completa, sem compromisso.",
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

      {/* Como funciona */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-5">Simples assim</p>
          <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
            Do primeiro contato ao <em className="font-normal italic text-gold">novo sorriso</em>
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
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
          <CTAButton>Começar pela avaliação gratuita</CTAButton>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-16 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow mb-5">Quem já sorriu com a gente</p>
              <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
                Histórias <em className="font-normal italic text-gold">reais</em>, sorrisos reais
              </h2>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" strokeWidth={1} />
              ))}
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.name} className="shadow-card flex flex-col bg-background p-8">
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
      <section className="mx-auto grid max-w-6xl items-start gap-14 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:py-32">
        <div>
          <p className="eyebrow mb-5">Dúvidas frequentes</p>
          <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
            Tudo o que você precisa <em className="font-normal italic text-gold">saber</em>
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
              <AccordionTrigger className="py-6 text-left font-display text-xl font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-end gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">Onde estamos</p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
              Um refúgio para o seu <em className="font-normal italic text-gold">sorriso</em>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
              Uma clínica pensada para você se sentir acolhido desde a recepção. Ambiente sereno,
              luz natural e equipe atenta — no coração do ABC Paulista, com fácil acesso para toda
              a região de São Bernardo do Campo e Santo André.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Recepção acolhedora e sala de espera silenciosa",
                "Salas clínicas com tecnologia de ponta",
                "Estacionamento próximo e fácil acesso",
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
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
          <img
            src={logoLight.url}
            alt=""
            loading="lazy"
            className="mx-auto mb-10 h-20 w-auto opacity-90"
            width={854}
            height={446}
          />
          <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
            Sua avaliação gratuita está a <em className="font-normal italic text-gold">um passo</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-espresso-foreground/70">
            Fale com a nossa equipe pelo Instagram e agende o melhor horário. Pagamento facilitado no cartão e boleto.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton variant="light">Quero agendar agora</CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-espresso-foreground/10 bg-espresso py-8 text-espresso-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.25em] sm:flex-row">
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
