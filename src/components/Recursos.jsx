// src/components/Recursos.jsx
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Recursos({ resources }) {
  return (
    <div className="col-span-3 lg:col-span-1  space-y-4">
      <h2 className="text-2xl mb-2 font-bold animate-slide-in-top">Recursos</h2>

      {Object.entries(resources).map(([tema, subtemas]) => (
        <Disclosure key={tema} as="div" className=" rounded border animate-slide-in-top border-neutral-700 p-3">
          <DisclosureButton className="group flex w-full items-center justify-between text-left">
            <span className="text-lg font-medium">{tema}</span>
            <ChevronDownIcon className="size-5 transition-transform duration-200 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-3 space-y-2 text-sm text-white/70">
            {Object.entries(subtemas).map(([subtema, links]) => (
              <div key={subtema}>
                <h3 className="text-white font-semibold">{subtema}</h3>
                <ul className="ml-2">
                  {links.map((link, idx) => {
                    const videoId = new URL(link).searchParams.get("v");
                    return (
                      <li key={idx} className="my-4">
                        <iframe
                          width="100%"
                          height="315"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Video ${idx + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="rounded-md"
                        ></iframe>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}

export default Recursos;
