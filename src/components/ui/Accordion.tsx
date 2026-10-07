'use client';

import { useId, useState } from 'react';
import { Icon } from './Icon';

type Item = { question: string; answer: string };

/**
 * Accessible accordion (WAI-ARIA disclosure pattern). Answers stay in the DOM for
 * search engines; the height animates with a grid-rows transition.
 */
export function Accordion({ items, defaultOpen = 0 }: { items: Item[]; defaultOpen?: number | null }) {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-line-strong/70 border-y border-line-strong/70">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${uid}-q-${index}`;
        const panelId = `${uid}-a-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold tracking-[-0.015em] transition-colors hover:text-accent"
              >
                {item.question}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ${
                    isOpen ? 'rotate-45 border-accent bg-accent text-white' : 'border-line-strong text-ink-soft'
                  }`}
                >
                  <Icon name="close" className="h-3.5 w-3.5 rotate-45" strokeWidth={2.25} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
              inert={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pr-10 leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
