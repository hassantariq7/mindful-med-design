
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Lead GP & Medical Director',
      qualifications: 'MBBS, MRCGP, 15 years experience',
      image: 'photo-1649972904349-6e44c42644a7',
      description: 'Specializing in preventive medicine and chronic disease management.'
    },
    {
      name: 'Dr. James Cooper',
      role: 'Aesthetic Medicine Specialist',
      qualifications: 'MBBS, Aesthetic Medicine Diploma',
      image: 'photo-1486312338219-ce68d2c6f44d',
      description: 'Expert in non-surgical cosmetic treatments and skin rejuvenation.'
    },
    {
      name: 'Dr. Emma Thompson',
      role: 'Dermatologist',
      qualifications: 'MBBS, MD Dermatology',
      image: 'photo-1581090464777-f3220bbe1b8b',
      description: 'Specialized in medical and cosmetic dermatology treatments.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is tailored to individual patient needs and preferences.'
    },
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'We maintain the highest standards of safety and quality in all our procedures.'
    },
    {
      icon: Clock,
      title: 'Convenient Access',
      description: 'Flexible appointment scheduling and minimal waiting times for our patients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional healthcare outcomes and patient satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About HealthCare Plus
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a modern private healthcare clinic dedicated to providing exceptional medical care 
              and aesthetic treatments in a comfortable, professional environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At HealthCare Plus, we believe that exceptional healthcare should be accessible, 
                personalized, and delivered with compassion. Our mission is to provide comprehensive 
                medical services that enhance the health and well-being of our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge medical technology with a human touch, ensuring that 
                every patient receives the highest quality care in a welcoming environment.
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Healthcare consultation"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-medical-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at HealthCare Plus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-medical-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Our experienced medical professionals are here to provide you with the best possible care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <img
                    src={`https://images.unsplash.com/${member.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80`}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-medical-blue font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-3">{member.qualifications}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-medical-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Accreditations & Certifications
            </h2>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-center">
                <Shield className="h-16 w-16 text-medical-blue mx-auto mb-2" />
                <p className="font-semibold">CQC Registered</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 text-medical-blue mx-auto mb-2" />
                <p className="font-semibold">GMC Certified</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-medical-blue mx-auto mb-2" />
                <p className="font-semibold">ISO 9001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
