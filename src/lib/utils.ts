import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names while resolving Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a tel: href from a display phone number. */
export function telHref(phone: string) {
  return `tel:+55${phone.replace(/\D/g, "")}`;
}

/** Build a WhatsApp wa.me link with an optional prefilled message. */
export function whatsappHref(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/55${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Build a Google Maps directions link from an address. */
export function directionsHref(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address,
  )}`;
}
