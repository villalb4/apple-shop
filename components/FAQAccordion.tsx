import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dot } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cuáles son los métodos de pago disponibles?",
    answer:
      "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, y pagos a través de plataformas digitales como Mercado Pago. Todos los pagos son procesados de forma segura.",
  },
  {
    question: "¿Cuánto tiempo tarda el envío?",
    answer:
      "Los envíos dentro de la ciudad se realizan en 24-48 horas hábiles. Para envíos nacionales, el tiempo de entrega es de 3-5 días hábiles. Recibirás un código de seguimiento una vez que tu pedido sea despachado.",
  },
  {
    question: "¿Cuál es la política de devoluciones?",
    answer:
      "Ofrecemos 30 días para devoluciones desde la fecha de recepción del producto. El artículo debe estar en su empaque original, sin uso y con todos sus accesorios. Los gastos de envío de devolución corren por cuenta del cliente, excepto en casos de productos defectuosos.",
  },
  {
    question: "¿Los productos tienen garantía?",
    answer:
      "Todos nuestros productos cuentan con garantía oficial del fabricante. Los productos nuevos tienen garantía de 12 meses, mientras que los reacondicionados cuentan con 6 meses de garantía. La garantía cubre defectos de fabricación y fallas técnicas.",
  },
  {
    question: "¿Qué significa 'producto reacondicionado'?",
    answer:
      "Los productos reacondicionados son dispositivos que han sido devueltos, revisados, reparados si es necesario, y probados exhaustivamente para garantizar su funcionamiento óptimo. Pueden tener signos mínimos de uso cosmético, pero funcionan como nuevos y cuentan con garantía.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí, realizamos envíos a todo el territorio nacional. Los costos de envío varían según la ubicación y el peso del paquete. Puedes ver el costo exacto durante el proceso de checkout antes de confirmar tu compra.",
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer:
      "Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de seguimiento y un enlace para rastrear tu paquete en tiempo real. También puedes consultar el estado de tu pedido en tu cuenta de usuario.",
  },
];

export default function FAQAccordion() {
  return (
    <div className="container mt-16 mb-8">
      <div className="flex items-center justify-start gap-4 mb-6">
        <h2 className="text-xl font-light text-gray-400">
          Preguntas Frecuentes
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="border"
        defaultValue="item-0"
      >
        {faqData.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            value={`item-${index}`}
            className="border-b border-gray-200 dark:border-gray-800 last:border-b-0"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <span className="font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
