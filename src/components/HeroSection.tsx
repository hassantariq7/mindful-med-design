
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="gradient-bg py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Health,{' '}
              <span className="text-medical-blue">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Private healthcare and aesthetic treatments by certified professionals. 
              Experience personalized care in a modern, comfortable environment.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-medical-blue hover:bg-blue-700">
                <Link to="/book" className="flex items-center">
                  Book an Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-12">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-medical-green" />
                <span className="text-sm text-gray-600">CQC Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-medical-green" />
                <span className="text-sm text-gray-600">GMC Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-medical-green" />
                <span className="text-sm text-gray-600">500+ Patients</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80`}
                alt="Professional healthcare consultation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-medical-green-light p-2 rounded-full">
                  <Award className="h-6 w-6 text-medical-green" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                  <p className="text-sm text-gray-600">From 200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
