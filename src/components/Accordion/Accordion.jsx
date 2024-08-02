export const Accordion = ({ title, children }) => {
  return (
    <details className="p-2 group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500">
      <summary className="text-center tracking-widest outline-none cursor-pointer font-semibold relative">
        {title}
      </summary>

      <div className="text-md pt-2">{children}</div>
    </details>
  );
};
