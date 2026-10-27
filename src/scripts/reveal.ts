/**
 * Revelado progresivo con IntersectionObserver.
 *
 * - `[data-reveal]`: agrega `.is-visible` al entrar en viewport (fade-up en CSS).
 * - `[data-draw]` (SVG): prepara el trazo con dasharray/dashoffset y agrega
 *   `.is-drawn` para animar el dibujo de la línea.
 *
 * Respeta `prefers-reduced-motion`: en ese caso todo queda visible sin animar.
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
const drawTargets = document.querySelectorAll<SVGSVGElement>('svg[data-draw]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
  drawTargets.forEach((svg) => svg.classList.add('is-drawn'));
} else {
  // Preparar trazos: longitud real de cada path para el dashoffset.
  drawTargets.forEach((svg) => {
    svg.querySelectorAll<SVGPathElement>('path[data-stroke]').forEach((path) => {
      const length = path.getTotalLength();
      path.style.setProperty('--path-length', `${length}`);
    });
    svg.classList.add('is-ready');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Revelar si entra en viewport o si ya quedó por encima (página cargada con scroll).
        const aboveViewport = entry.boundingClientRect.bottom < 0;
        if (!entry.isIntersecting && !aboveViewport) continue;
        const el = entry.target;
        el.classList.add(el instanceof SVGSVGElement ? 'is-drawn' : 'is-visible');
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
  );

  revealTargets.forEach((el) => observer.observe(el));
  drawTargets.forEach((svg) => observer.observe(svg));
}
