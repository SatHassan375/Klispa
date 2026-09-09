import gsap from "gsap";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// The whole card (background box, not just the text) springs in on a
// bounce-scale. Content itself just does a quick, quiet fade — the bounce
// belongs to the card's shape, so it shouldn't compete with a second
// motion on the text underneath it.
export function playCardEnter(el, done, outerEl) {
  if (prefersReducedMotion()) {
    gsap.set(el, { clearProps: "all" });
    if (outerEl) gsap.set(outerEl, { clearProps: "all" });
    done();
    return;
  }

  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power1.out" });

  const target = outerEl || el;
  gsap.killTweensOf(target);
  gsap.fromTo(
    target,
    { scale: 0.9 },
    {
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
      transformOrigin: "50% 50%",
      overwrite: true,
      onComplete: done,
    },
  );
}

export function playCardLeave(el, done) {
  if (prefersReducedMotion()) {
    done();
    return;
  }

  gsap.to(el, {
    opacity: 0,
    y: -8,
    scale: 0.98,
    duration: 0.22,
    ease: "power1.in",
    onComplete: done,
  });
}
