# Academia Super Série Fitness — São Caetano, Salvador

Site institucional one-page premium para a **Academia Super Série Fitness**.
Direção visual: **Urban Performance Editorial** — dark mode atlético, verde da
marca como assinatura, tipografia display condensada e motion refinado.

Foco em **conversão local**: WhatsApp, ligação, rota e Instagram sempre à mão.

---

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` em `globals.css`)
- **Framer Motion** (reveals, stagger, parallax do hero, menu mobile)
- **Lenis** (smooth scroll — desativado automaticamente com `prefers-reduced-motion`)
- **next/font** — Bebas Neue (display) · Space Grotesk (labels/números) · Manrope (corpo)
- **next/image** (imagens otimizadas AVIF/WebP, lazy loading)

Sem backend, sem login, sem painel. Página estática (SSG).

---

## Como rodar

```bash
npm install      # já instalado neste projeto
npm run dev      # ambiente de desenvolvimento  → http://localhost:3000
npm run build    # build de produção
npm start        # servir o build de produção
npm run lint     # checagem de lint
```

---

## ✏️ Editar os dados da academia (o que você mais vai mexer)

**Tudo fica centralizado em um único arquivo:**

### `src/lib/gym-data.ts`

Nome, endereço, telefone, avaliação, horário e **os links**:

```ts
export const gym = {
  name: "Academia Super Série Fitness",
  phone: "(71) 3329-5466",
  address: "Estr. de Campinas, 490 - São Caetano, Salvador - BA, 40391-161",
  rating: "4.3",
  reviewsCount: "182",
  instagramUrl: "#",                 // 👈 coloque o link real do Instagram
  whatsappNumber: "(71) 3329-5466",  // 👈 troque pelo celular do WhatsApp
  // ...
};
```

- Os links de **WhatsApp**, **telefone** e **rota** são gerados automaticamente
  a partir desses dados (objeto `links` logo abaixo no mesmo arquivo).
- Para trocar **textos de diferenciais, objetivos de treino e reputação**,
  edite os arrays `differentials`, `trainingGoals`, `reviewThemes` e
  `reviewNotes` no mesmo arquivo.

### Trocar as imagens por fotos reais da academia

As imagens hoje são **placeholders premium** (Unsplash). Para usar fotos reais:

1. Coloque as fotos em `/public` (ex.: `public/fotos/hero.jpg`).
2. Em `src/lib/constants.ts`, troque cada `src` pelo caminho local:

   ```ts
   export const images = {
     hero: "/fotos/hero.jpg",
     structure: "/fotos/estrutura.jpg",
     // ...
   };
   ```

> Recomendado: fotos editoriais de musculação, equipamentos, detalhes de
> halteres/máquinas e ambiente climatizado. Iluminação intensa, sem visual de
> banco de imagem.

### Navegação e SEO

- **Menu**: `src/lib/constants.ts` → `navLinks`.
- **SEO / metadata / JSON-LD local**: `src/app/layout.tsx`.

---

## Estrutura do projeto

```text
src/
  app/
    layout.tsx        # fontes, SEO local, JSON-LD, header/footer, smooth scroll
    page.tsx          # composição das seções (one-page)
    globals.css       # design tokens (cores, fontes, motion) + utilitários
  components/
    layout/           # Header, Footer, MobileCTA, ScrollProgress, SmoothScroll
    sections/         # Hero, Positioning, Differentials, Structure,
                      # TrainingGoals, SocialProof, Location, Contact
    ui/               # Button, SectionLabel, StatBadge, MotionReveal,
                      # Divider, Icons (SVG próprios)
  lib/
    gym-data.ts       # 👈 fonte única de dados da academia
    constants.ts      # navegação + imagens
    motion.ts         # variantes de animação (Framer Motion)
    utils.ts          # cn() + geradores de link (tel / WhatsApp / rota)
```

---

## Paleta (identidade da marca)

| Token | Hex | Uso |
|-------|-----|-----|
| `ink` / `bg` | `#050706` | Fundo base |
| `deep` | `#05100B` | Fundos / overlays |
| `forest` | `#134D38` | Brilhos / gradientes |
| `primary` | `#226048` | Apoio |
| `accent` | `#309F51` | CTAs, linhas, destaques |
| `accent-bright` | `#3FCB6A` | Hover / foco |
| `silver` | `#7C917F` | Texto secundário |
| `paper` | `#F4F7F3` | Texto principal |

O verde vivo é usado **com contenção** — apenas em CTAs, linhas, números e
estados de hover.

---

## Qualidade embutida

- **Acessibilidade**: HTML semântico, contraste AA, foco visível, `alt` em
  imagens, navegação por teclado, `aria-label` em ícones, respeito a
  `prefers-reduced-motion`.
- **Performance**: imagens AVIF/WebP, lazy loading, fontes com `display: swap`,
  build estático, sem dependências supérfluas.
- **Mobile**: hero direto, **barra fixa de WhatsApp/Rota**, menu em tela cheia,
  botões grandes, telefone e rota a um toque.
