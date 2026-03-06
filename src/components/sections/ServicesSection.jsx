import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Cable, Server, Database, Camera, Wrench } from 'lucide-react';
import Button from '../common/Button';
import Card, { CardHeader, CardTitle, CardBody } from '../common/Card';
import { services } from '../../data';

const iconMap = {
  Wifi: Wifi,
  Cable: Cable,
  Server: Server,
  Database: Database,
  Camera: Camera,
  Wrench: Wrench
};

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Comprehensive networking solutions tailored to your business needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Server;
            return (
              <Card key={service.id}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardHeader>
                <CardBody>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
