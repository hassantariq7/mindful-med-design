
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Syringe, Heart, Eye, Dumbbell, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Practice',
      description: 'Comprehensive primary healthcare with experienced GPs for all your medical needs.',
      features: ['Health check-ups', 'Preventive care', 'Chronic disease management']
    },
    {
      icon: Syringe,
      title: 'Aesthetic Treatments',
      description: 'Professional cosmetic procedures to enhance your natural beauty safely.',
      features: ['Botox & Fillers', 'Laser treatments', 'Skin rejuvenation']
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert heart care with state-of-the-art diagnostic equipment.',
      features: ['ECG testing', 'Heart monitoring', 'Cardiovascular screening']
    },
    {
      icon: Eye,
      title: 'Dermatology',
      description: 'Specialized skin care treatments from certified dermatologists.',
      features: ['Skin cancer screening', 'Acne treatment', 'Mole removal']
    },
    {
      icon: Dumbbell,
      title: 'Physiotherapy',
      description: 'Professional rehabilitation and movement therapy services.',
      features: ['Sports injuries', 'Post-surgery rehab', 'Pain management']
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Confidential mental health support and counseling services.',
      features: ['Therapy sessions', 'Stress management', 'Mental wellness']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive healthcare solutions tailored to your needs, delivered by experienced professionals in a comfortable environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-medical-blue" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-1 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-medical-blue hover:bg-blue-700">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
