
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Stethoscope, Phone } from 'lucide-react';

const Book = () => {
  const services = [
    'General Practice Consultation',
    'Aesthetic Treatment Consultation',
    'Dermatology Consultation',
    'Cardiology Consultation',
    'Physiotherapy Session',
    'Mental Health Consultation',
    'Free Initial Consultation'
  ];

  const doctors = [
    'Dr. Sarah Mitchell - Lead GP',
    'Dr. James Cooper - Aesthetic Medicine',
    'Dr. Emma Thompson - Dermatology',
    'Any Available Doctor'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Schedule your consultation with our healthcare professionals. 
              Choose your preferred date, time, and service.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-6 w-6 text-medical-blue" />
                    <span>Book Your Appointment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input placeholder="+44 20 1234 5678" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <Input type="date" />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service *
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Doctor
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a doctor" />
                          </SelectTrigger>
                          <SelectContent>
                            {doctors.map((doctor) => (
                              <SelectItem key={doctor} value={doctor.toLowerCase().replace(/\s+/g, '-')}>
                                {doctor}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <Input type="date" min={new Date().toISOString().split('T')[0]} />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, '-')}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Visit *
                      </label>
                      <Textarea 
                        placeholder="Please describe your symptoms or reason for the appointment..."
                        rows={3}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Medications
                      </label>
                      <Textarea 
                        placeholder="List any medications you are currently taking (optional)"
                        rows={2}
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Allergies
                      </label>
                      <Input placeholder="Any known allergies (optional)" />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                    <Textarea 
                      placeholder="Any additional information you'd like to share with the doctor..."
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full bg-medical-blue hover:bg-blue-700" size="lg">
                    Book Appointment
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll confirm your appointment within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-medical-blue" />
                    <span>Need Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Call us directly to book your appointment or if you have any questions.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-medical-blue">+44 20 1234 5678</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8am-6pm, Sat 9am-1pm</p>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-medical-blue" />
                    <span>Opening Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Stethoscope className="h-5 w-5 text-medical-blue" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Arrive 15 minutes early for check-in</li>
                    <li>• Bring a valid ID and insurance card</li>
                    <li>• List of current medications</li>
                    <li>• Comfortable, clean environment</li>
                    <li>• Professional, caring staff</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency */}
              <Card className="border-0 shadow-sm bg-red-50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Medical Emergency?</h3>
                  <p className="text-sm text-red-700 mb-3">
                    For urgent medical situations, please call 999 or visit your nearest A&E department.
                  </p>
                  <p className="text-sm font-medium text-red-800">Emergency: 999</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
