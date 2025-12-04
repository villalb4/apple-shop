const ScrollingText = () => {
  //   const text = "APPLE PRODUCTS • INNOVATION • TECHNOLOGY • DESIGN • QUALITY";
  const text = "PRODUCTOS APPLE • ORIGINALES";

  return (
    <div className="relative flex overflow-x-hidden py-8 md:py-16 z-10 border-b border-t">
      <div className="animate-marquee whitespace-nowrap flex flex-nowrap">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <span
              key={i}
              className="text-[60px] md:text-[120px] font-black tracking-tighter text-black/5 select-none"
            >
              {text}
              <span className="mx-8">•</span>
            </span>
          ))}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex flex-nowrap py-8 md:py-16">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <span
              key={`clone-${i}`}
              className="text-[60px] md:text-[120px] font-black tracking-tighter text-black/5 select-none"
            >
              {text}
              <span className="mx-8">•</span>
            </span>
          ))}
      </div>
    </div>
  );
};

export default ScrollingText;
