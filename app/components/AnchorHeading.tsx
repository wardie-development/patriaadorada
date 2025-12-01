"use client";

import { useCallback, useId, useState } from "react";

type AnchorHeadingProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

// Renderiza um H2 com link âncora (#id) e comportamento de copiar o link ao clicar.
export default function AnchorHeading({ id, children, className }: AnchorHeadingProps) {
  const [copied, setCopied] = useState(false);
  const liveId = useId();

  const onClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const url = new URL(window.location.href);
      url.hash = id;
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.history.replaceState(null, "", `#${id}`);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // fallback: apenas navega para o hash
      window.location.hash = id;
    }
  }, [id]);

  return (
    <h2 id={id} className={className}>
      <a
        href={`#${id}`}
        onClick={onClick}
        className="group inline-flex items-center gap-2 no-underline hover:underline focus:underline"
        aria-describedby={liveId}
      >
        <span>{children}</span>
        <span
          className="rounded px-2 py-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 border border-transparent group-hover:border-zinc-300 dark:group-hover:border-zinc-700"
          aria-hidden
        >
          #{id}
        </span>
      </a>
      <span id={liveId} role="status" aria-live="polite" className="sr-only">
        {copied ? "Link copiado" : "Clique para copiar o link desta seção"}
      </span>
    </h2>
  );
}
