
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'Exceptional care from start to finish. The staff is incredibly professional and the facilities are pristine. I felt completely comfortable throughout my treatment.',
      rating: 5,
      image: 'photo-1649972904349-6e44c42644a7'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      content: 'Dr. Smith and her team provided outstanding service. The booking process was seamless and the consultation was thorough. Highly recommend this clinic.',
      rating: 5,
      image: 'photo-1486312338219-ce68d2c6f44d'
    },
    {
      name: 'Emma Williams',
      role: 'Patient',
      content: 'The aesthetic treatment I received exceeded my expectations. The results are natural-looking and the recovery was much quicker than anticipated.',
      rating: 5,
      image: 'photo-1581090464777-f3220bbe1b8b'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-medical-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from real patients who trust us with their healthcare needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-medical-blue opacity-50" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={`https://images.unsplash.com/${testimonial.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-blue mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-blue mb-2">500+</div>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-blue mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
