import { directionsHref, telHref, whatsappHref } from "@/lib/utils";

/* ============================================================
   SINGLE SOURCE OF TRUTH
   Edit everything about the gym here. Components read from this.
   ============================================================ */
export const gym = {
  name: "Academia Super Série Fitness",
  shortName: "Super Série Fitness",
  unit: "São Caetano",
  rating: "4.3",
  reviewsCount: "182",
  address: "Estr. de Campinas, 490 - São Caetano, Salvador - BA, 40391-161",
  addressShort: "São Caetano, Salvador — BA",
  phone: "(71) 3329-5466",
  city: "Salvador - BA",
  neighborhood: "São Caetano",
  closingInfo: "Aberto · fecha às 22h",
  closingShort: "Aberto até 22h",

  // 👇 Replace these placeholders with the real links when available.
  instagramUrl: "#", // ex: "https://instagram.com/superseriefitness"
  // The WhatsApp number defaults to the phone above. If the gym uses a
  // different mobile for WhatsApp, set it here (digits only with DDD).
  whatsappNumber: "(71) 3329-5466",
} as const;

/* Pre-built action links (used by every CTA in the site). */
export const links = {
  tel: telHref(gym.phone),
  whatsapp: whatsappHref(
    gym.whatsappNumber,
    "Olá! Vim pelo site e gostaria de saber mais sobre a Super Série Fitness.",
  ),
  directions: directionsHref(gym.address),
  instagram: gym.instagramUrl,
} as const;

/* Hero / proof badges */
export const heroBadges = [
  { value: gym.rating, label: "estrelas", icon: "star" as const },
  { value: gym.reviewsCount, label: "avaliações", icon: "users" as const },
  { value: gym.addressShort, label: "", icon: "pin" as const },
  { value: gym.closingShort, label: "", icon: "clock" as const },
];

/* Differentials (section 4) */
export const differentials = [
  {
    index: "01",
    title: "Ambiente Climatizado",
    body: "Treine confortável o ano inteiro. Climatização para manter o ritmo mesmo no calor de Salvador.",
  },
  {
    index: "02",
    title: "Equipamentos de Musculação",
    body: "Máquinas e pesos livres para montar treinos consistentes, do iniciante ao avançado.",
  },
  {
    index: "03",
    title: "Instrutores e Profissionais",
    body: "Acompanhamento de quem entende de treino, citado pelos alunos como parte da experiência.",
  },
  {
    index: "04",
    title: "Estrutura para o Dia a Dia",
    body: "Espaço pensado para a rotina real de treino, com organização e fluxo para você focar.",
  },
  {
    index: "05",
    title: "Localização em São Caetano",
    body: "Na Estrada de Campinas, com acesso fácil para o bairro e regiões próximas.",
  },
  {
    index: "06",
    title: "Atendimento Local e Próximo",
    body: "Uma academia de bairro com postura profissional. Direta, presente e sem enrolação.",
  },
];

/* Training goals (section 6) */
export const trainingGoals = [
  { label: "Ganho de massa", desc: "Carga progressiva e foco em volume." },
  { label: "Emagrecimento", desc: "Gasto calórico e constância no treino." },
  { label: "Condicionamento", desc: "Resistência e fôlego para a rotina." },
  { label: "Fortalecimento", desc: "Base, postura e força funcional." },
  { label: "Retorno à rotina", desc: "Recomeço sem pressa, com orientação." },
  { label: "Treino acompanhado", desc: "Apoio de instrutores quando precisar." },
];

/* Social proof — themes most cited in reviews (no fake testimonials) */
export const reviewThemes = [
  "Equipamentos",
  "Estrutura",
  "Profissionais",
  "Instrutores",
  "Ambiente climatizado",
];

export const reviewNotes = [
  "Estrutura e equipamentos estão entre os pontos mais lembrados pelos alunos.",
  "Instrutores e profissionais aparecem como parte importante da experiência.",
  "O ambiente climatizado é citado por frequentadores.",
];

/* Real Google reviews from members (all 5 stars). */
export const reviews = [
  {
    name: "Monica Silva",
    timeAgo: "3 semanas atrás",
    rating: 5,
    text: "Academia maravilhosa, ótimos instrutores e professores, instalações dignas tanto para o treino quanto para as necessidades fisiológicas. Minha necessidade era exatamente me sentir motivada a vir para a academia, pois a vida corrida nos deixa um pouco sem disposição. Mas quando o atendimento é bom e temos a atenção dos instrutores, nos sentimos melhores e mais dispostos. Nota mil, Super Série 👏👏",
  },
  {
    name: "Marcos Bastos",
    timeAgo: "1 mês atrás",
    rating: 5,
    text: "Bons equipamentos, ótimos instrutores, infraestrutura agradável e preço acessível. Recomendo!",
  },
  {
    name: "Graciele Oliveira",
    timeAgo: "1 semana atrás",
    rating: 5,
    text: "Ótima academia. Desde que iniciei a malhação, sempre treino lá. Os professores são excelentes, o atendimento é bom e cada treino é específico.",
  },
  {
    name: "Ava Bennoni",
    timeAgo: "2 semanas atrás",
    rating: 5,
    text: "Uma academia familiar, que recebe bem os visitantes. Funcionários muito educados.",
  },
  {
    name: "Marcos",
    timeAgo: "1 semana atrás",
    rating: 5,
    text: "É uma boa academia. Saí de lá porque estava sem dinheiro, mas em breve vou voltar — e com um monte de amigos.",
  },
] as const;

/* Structure section bullets */
export const structurePoints = [
  "Área de musculação completa",
  "Máquinas e pesos livres",
  "Ambiente climatizado",
  "Estrutura para todos os níveis",
];
