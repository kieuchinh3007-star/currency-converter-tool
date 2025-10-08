import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a currency converter?",
    answer:
      "A tool that allows you to calculate the equivalent value between two currencies using real-time exchange rates.",
  },
  {
    question: "How accurate are the rates?",
    answer:
      "The rates are updated every minute via trusted exchange APIs like ExchangeRate.host, ensuring maximum accuracy.",
  },
  {
    question: "Is the Currency Converter free to use?",
    answer: "Yes, it's completely free and requires no registration. Simply enter your values and convert instantly.",
  },
  {
    question: "Can I use it on mobile?",
    answer:
      "Absolutely. The tool is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops.",
  },
  {
    question: "How many currencies are supported?",
    answer:
      "Our currency converter supports 150+ currencies from around the world, covering all major and many minor currencies.",
  },
  {
    question: "How often are exchange rates updated?",
    answer:
      "Exchange rates are fetched in real-time whenever you perform a conversion, ensuring you always get the most current data.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 lg:py-24 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-12 text-center">
            Frequently Asked Question (FAQs)
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl shadow-sm px-6 border-0">
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
