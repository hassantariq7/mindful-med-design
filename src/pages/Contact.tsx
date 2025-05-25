
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with our team. We're here to help you with any questions 
              about our services or to book your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+44 20 1234 5678</p>
                      <p className="text-sm text-gray-500">Mon-Fri 8am-6pm, Sat 9am-1pm</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@healthcareplus.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">123 Health Street</p>
                      <p className="text-gray-600">London, SW1A 1AA</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-medical-blue" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+44 20 1234 5678" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-medical-blue hover:bg-blue-700">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-medical-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of London with easy access by public transport.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-medical-blue-light to-medical-green-light flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-medical-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                <p className="text-gray-600">123 Health Street, London, SW1A 1AA</p>
                <p className="text-sm text-gray-500 mt-2">
                  Google Maps integration would be implemented here
                </p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">By Tube</h3>
                <p className="text-gray-600">5 minutes walk from Oxford Circus Station</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">By Bus</h3>
                <p className="text-gray-600">Routes 12, 88, 94 stop nearby</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600">Limited street parking available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
