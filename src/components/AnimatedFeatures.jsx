import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedFeatures() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".feature-container",
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // Scene 1
      tl.fromTo(".scene-1", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
        .to(".scene-1", { autoAlpha: 0, duration: 1 });

      // Scene 2
      tl.fromTo(".scene-2", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
        .to(".scene-2", { autoAlpha: 0, duration: 1 });

      // Scene 3
      tl.fromTo(".scene-3", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
        .to(".scene-3", { autoAlpha: 0, duration: 1 });

      // Scene 4
      tl.fromTo(".scene-4", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="feature-container">
        <img src="data:image/png;base64,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"/>
      <section className="scene scene-1">
        <h2>✨ Customize Chrome your way</h2>
      </section>
      <section className="scene scene-2">
        <h2>🧩 Add powerful extensions</h2>
      </section>
      <section className="scene scene-3">
        <h2>📂 Take control of your tabs</h2>
      </section>
      <section className="scene scene-4">
        <h2>🔒 Helpful features built-in</h2>
      </section>
    </div>
  );
}
