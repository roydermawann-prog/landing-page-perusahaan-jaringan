import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <button className="w-full flex items-center justify-between p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" onClick={() => setOpenId(openId === item.id ? null : item.id)}>
            <span className="font-medium text-gray-900 dark:text-white">{item.question}</span>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openId === item.id ? 'transform rotate-180' : ''}`} />
          </button>
          {openId === item.id && (
            <div className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
