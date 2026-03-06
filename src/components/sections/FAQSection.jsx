import Accordion from '../common/Accordion';
import { faqs } from '../../data';

export default function FAQSection() {
  return (
    <section id="faq" className="section bg-white dark:bg-dark-900">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
