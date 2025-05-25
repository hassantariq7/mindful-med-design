
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, Syringe, Heart, Eye, Dumbbell, Brain, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Practice',
      description: 'Comprehensive primary healthcare services with experienced general practitioners.',
      features: ['Health check-ups', 'Preventive care', 'Chronic disease management', 'Vaccinations'],
      pricing: 'From £80',
      duration: '30 minutes',
      category: 'Primary Care'
    },
    {
      icon: Syringe,
      title: 'Aesthetic Treatments',
      description: 'Professional cosmetic procedures to enhance your natural beauty safely and effectively.',
      features: ['Botox injections', 'Dermal fillers', 'Chemical peels', 'Skin rejuvenation'],
      pricing: 'From £200',
      duration: '45 minutes',
      category: 'Aesthetics'
    },
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert heart care and cardiovascular health assessment with modern diagnostic equipment.',
      features: ['ECG testing', '24-hour monitoring', 'Blood pressure assessment', 'Cholesterol screening'],
      pricing: 'From £150',
      duration: '60 minutes',
      category: 'Specialist'
    },
    {
      icon: Eye,
      title: 'Dermatology',
      description: 'Specialized skin care treatments from certified dermatologists for all skin conditions.',
      features: ['Skin cancer screening', 'Acne treatment', 'Mole removal', 'Psoriasis management'],
      pricing: 'From £120',
      duration: '45 minutes',
      category: 'Specialist'
    },
    {
      icon: Dumbbell,
      title: 'Physiotherapy',
      description: 'Professional rehabilitation and movement therapy services for injury recovery.',
      features: ['Sports injury treatment', 'Post-surgery rehabilitation', 'Pain management', 'Exercise therapy'],
      pricing: 'From £70',
      duration: '60 minutes',
      category: 'Therapy'
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Confidential mental health support and counseling services in a safe environment.',
      features: ['Individual therapy', 'Stress management', 'Anxiety treatment', 'Depression counseling'],
      pricing: 'From £100',
      duration: '50 minutes',
      category: 'Mental Health'
    }
  ];

  const categories = ['All', 'Primary Care', 'Specialist', 'Aesthetics', 'Therapy', 'Mental Health'];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Medical Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive healthcare solutions delivered by experienced professionals 
              using the latest medical technology and techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-medical-blue hover:bg-blue-700">
                <Link to="/book">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover:bg-medical-blue hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-medical-blue" />
                    </div>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-medical-blue rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                    <span><strong>Price:</strong> {service.pricing}</span>
                    <span><strong>Duration:</strong> {service.duration}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <Button asChild className="w-full bg-medical-blue hover:bg-blue-700">
                      <Link to="/book">Book Now</Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-medical-blue-light rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Initial Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Not sure which service is right for you? Book a free 15-minute consultation 
                with one of our healthcare professionals to discuss your needs.
              </p>
              <Button asChild size="lg" className="bg-medical-blue hover:bg-blue-700">
                <Link to="/book">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-medical-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              All our prices are clearly stated with no hidden fees. We offer competitive rates 
              for private healthcare services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Options</h3>
                <p className="text-gray-600">Cash, card, or private insurance accepted</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">No Hidden Costs</h3>
                <p className="text-gray-600">Transparent pricing with no surprise charges</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Evening and weekend appointments available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
