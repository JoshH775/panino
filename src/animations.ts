import { animate, stagger, scroll } from "motion";
import type { Easing } from "motion";

type TransitionSettings = {
  duration?: number;
  easing?: Easing | Easing[];
  delay?: number;
  staggerChildren?: number;
};

//When inputting the elements, make sure you use the querySelectorAll method to select all the elements you want to animate.

export function animateLogo() {
  const logo = document.querySelectorAll(".image-container");

  animate(
    logo,
    {
      scale: [0.5, 1],
      rotate: [-90, 0],
      opacity: [0, 1],
    },
    {
      scale: { duration: 1, ease: "easeOut" },
      rotate: { duration: 1, ease: "easeOut" },
      opacity: { duration: 1, ease: "easeOut" },
    }
  );
}

export function animateFadeUp(
  selector: string,
  startingY: number,
  transitionSettings: TransitionSettings,
  blur = true
) {
  const { duration, staggerChildren, delay, easing } = transitionSettings;

  const elements = document.querySelectorAll(selector);

  animate(
    elements,
    {
      opacity: [0, 1],
      y: [startingY, 0],
      filter: [`blur(${blur ? 10 : 0}px)`, "blur(0px)"],
    },
    {
      duration: duration ?? 0.5,
      ease: easing ?? "easeOut",
      delay: stagger(staggerChildren ?? 0, { startDelay: delay ?? 0 }),
    }
  );
}

export function animateTranslateY(
  selector: string,
  translateY: number,
  transitionSettings: TransitionSettings
) {

  const elements = document.querySelectorAll(selector);
  const { duration, staggerChildren, delay, easing } = transitionSettings;

  animate(
    elements,
    {
      opacity: [0, 1],
      y: [translateY, 0],
    },
    {
      duration: duration ?? 0.5,
      ease: easing ?? "easeOut",
      delay: stagger(staggerChildren ?? 0, { startDelay: delay ?? 0 }),
    }
  );
}
