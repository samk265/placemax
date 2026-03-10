import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How does PlaceMax improve placement success?',
    answer: 'PlaceMax uses AI-driven student profiling to identify skill gaps and provides structured training programs to bridge those gaps, ensuring students are job-ready and matched with optimal opportunities.'
  },
  {
    question: 'What types of companies do you partner with?',
    answer: 'We have a network of hiring partners across various sectors including IT, Core Engineering, BFSI, Consulting, Sales, Marketing, HR, and Operations.'
  },
  {
    question: 'Is PlaceMax suitable for all tier colleges?',
    answer: 'Yes, but we specifically specialize in transforming tier-2 and tier-3 colleges into placement powerhouses by providing the necessary AI infrastructure and training mechanisms.'
  },
  {
    question: 'How do you train the students?',
    answer: 'Our training modules cover aptitude, soft skills, and technical abilities. We offer an industry-aligned curriculum, practical tests, and continuous feedback loops.'
  },
  {
    question: 'Do you offer a dedicated support person?',
    answer: 'Yes, every college partner gets a dedicated placement manager who is available 24/7 to support during placement drives and coordinate with our hiring network.'
  }
];

export function QnA() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full" style={{ color: '#F28C38', backgroundColor: '#FFF5F0' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F4E79' }}>
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl" style={{ color: '#1F4E79', opacity: 0.7 }}>
            Find out how PlaceMax can revolutionize your placement cell operations
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b" style={{ borderColor: '#E5E7EB' }}>
              <AccordionTrigger className="text-xl font-semibold text-left py-6 hover:no-underline" style={{ color: '#1F4E79' }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg pb-6 leading-relaxed" style={{ color: '#1F4E79', opacity: 0.8 }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
