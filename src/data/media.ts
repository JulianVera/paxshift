/**
 * Mapa de fotografías de la homepage.
 *
 * Cada slot apunta a un archivo en `src/assets/`. Hoy son placeholders generados
 * (fondo cálido con el nombre del archivo y la proporción). Para reemplazar una
 * foto basta con sobrescribir el `.webp` respetando la proporción indicada;
 * Astro Assets genera las variantes optimizadas en el build.
 */
import type { ImageMetadata } from 'astro';

import heroTraveler from '../assets/hero-traveler.webp';
import heroAircraft from '../assets/hero-aircraft.webp';
import airportExperience from '../assets/airport-experience.webp';
import checkinInterface from '../assets/checkin-interface.webp';
import bookingExperience from '../assets/booking-experience.webp';
import teamWorkshop from '../assets/team-workshop.webp';

export interface MediaSlot {
  src: ImageMetadata;
  alt: string;
  /** Proporción prevista para el recorte (ancho / alto). */
  ratio: string;
  /** `true` mientras el archivo sea un placeholder. */
  placeholder: boolean;
}

export const media = {
  heroTraveler: {
    src: heroTraveler,
    alt: 'Viajera sonriente en la terminal de un aeropuerto, con el panel de vuelos detrás.',
    ratio: '2 / 3',
    placeholder: true,
  },
  heroAircraft: {
    src: heroAircraft,
    alt: 'Avión comercial estacionado en plataforma durante la operación en tierra.',
    ratio: '2 / 1',
    placeholder: true,
  },
  airportExperience: {
    src: airportExperience,
    alt: 'Agente de aeropuerto atendiendo a un pasajero en el mostrador de una puerta de embarque.',
    ratio: '2 / 1',
    placeholder: true,
  },
  checkinInterface: {
    src: checkinInterface,
    alt: 'Mockup de una interfaz de check-in aeroportuario en pantalla de escritorio.',
    ratio: '16 / 10',
    placeholder: true,
  },
  bookingExperience: {
    src: bookingExperience,
    alt: 'Mockup de una experiencia de reserva de vuelos en escritorio y móvil.',
    ratio: '4 / 3',
    placeholder: true,
  },
  teamWorkshop: {
    src: teamWorkshop,
    alt: 'Equipo de diseño trabajando sobre wireframes y notas adhesivas en una mesa.',
    ratio: '3 / 2',
    placeholder: true,
  },
} satisfies Record<string, MediaSlot>;

export type MediaKey = keyof typeof media;
