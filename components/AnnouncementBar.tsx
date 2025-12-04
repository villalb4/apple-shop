import { Dot } from "lucide-react";

const AnnouncementBar = () => {
  const messages = [
    "Envíos a todo el país",
    "3, 6 y 12 cuotas sin interés",
    "Garantía oficial Apple",
    "Descuentos exclusivos pagando con transferencia",
  ];

  return (
    <div className="relative flex overflow-x-hidden bg-black text-white text-xs font-bold py-2.5 z-[60] fixed top-0 w-full h-10 items-center">
      <div className="animate-marquee whitespace-nowrap flex flex-nowrap">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="flex">
              {messages.map((msg, idx) => (
                <span key={`${i}-${idx}`} className="flex items-center">
                  {msg}
                  <Dot className="mx-4" />
                </span>
              ))}
            </div>
          ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex flex-nowrap py-2.5 h-full items-center">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <div key={`clone-${i}`} className="flex">
              {messages.map((msg, idx) => (
                <span key={`clone-${i}-${idx}`} className="flex items-center">
                  {msg}
                  <Dot className="mx-4" />
                </span>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
