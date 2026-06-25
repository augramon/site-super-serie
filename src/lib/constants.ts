/* Navigation + shared image references */

export const navLinks = [
  { label: "Estrutura", href: "#estrutura" },
  { label: "Treinos", href: "#treinos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

/**
 * Placeholder imagery (Unsplash). Swap each `src` for real photos of the gym.
 * Keep the same aspect intent and the dark/green treatment will still apply.
 */
export const images = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
  structure:
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop",
  weights:
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop",
  training:
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
  machines:
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
  detail:
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop",
} as const;
