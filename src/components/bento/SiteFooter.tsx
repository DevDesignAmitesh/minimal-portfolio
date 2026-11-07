"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Big clipped wordmark over a faded copy of the banner. Both rise in when the footer scrolls into view.
const SiteFooter = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      data-visible={visible}
      className="site-footer relative isolate mt-24 h-[clamp(9rem,30vw,24rem)] overflow-hidden"
    >
      <div aria-hidden="true" className="footer-banner absolute inset-0 -z-10">
        <Image src="/banner-footer.png" alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>

      <p
        aria-hidden="true"
        className="footer-name absolute inset-x-0 bottom-0 select-none text-center text-[clamp(6rem,26vw,20rem)] font-semibold leading-none tracking-[-0.06em]"
      >
        amitesh
      </p>
    </footer>
  );
};

export default SiteFooter;
