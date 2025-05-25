
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    {
      title: 'Understanding Preventive Healthcare: Your Guide to Staying Healthy',
      excerpt: 'Learn about the importance of regular health check-ups and how preventive care can help you maintain optimal health throughout your life.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'General Health',
      image: 'photo-1581091226825-a6a2a5aee158',
      featured: true
    },
    {
      title: 'The Science Behind Aesthetic Treatments: What You Need to Know',
      excerpt: 'Explore the latest advances in non-surgical cosmetic procedures and understand how modern aesthetic medicine can help you achieve natural-looking results.',
      author: 'Dr. James Cooper',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Aesthetics',
      image: 'photo-1649972904349-6e44c42644a7'
    },
    {
      title: 'Mental Health Matters: Breaking the Stigma Around Therapy',
      excerpt: 'Understanding the importance of mental health care and how seeking professional help can improve your overall well-being and quality of life.',
      author: 'Dr. Emma Thompson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Mental Health',
      image: 'photo-1581090464777-f3220bbe1b8b'
    },
    {
      title: 'Heart Health: Simple Steps to Protect Your Cardiovascular System',
      excerpt: 'Discover practical tips for maintaining a healthy heart, including diet recommendations, exercise guidelines, and lifestyle changes.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Cardiology',
      image: 'photo-1486312338219-ce68d2c6f44d'
    },
    {
      title: 'Skin Cancer Prevention: Early Detection Saves Lives',
      excerpt: 'Learn about the warning signs of skin cancer, how to perform self-examinations, and the importance of regular dermatological check-ups.',
      author: 'Dr. Emma Thompson',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Dermatology',
      image: 'photo-1473091534298-04dcbce3278c'
    },
    {
      title: 'Recovery and Rehabilitation: Maximizing Your Physical Therapy Results',
      excerpt: 'Tips for getting the most out of your physiotherapy sessions and maintaining progress between appointments.',
      author: 'Sarah Johnson, Physiotherapist',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Physiotherapy',
      image: 'photo-1500673922987-e212871fec22'
    }
  ];

  const categories = ['All', 'General Health', 'Aesthetics', 'Mental Health', 'Cardiology', 'Dermatology', 'Physiotherapy'];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, health tips, and medical advice from our certified healthcare professionals. 
              Stay informed about the latest in healthcare and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <Badge className="bg-medical-blue text-white">Featured Article</Badge>
              </div>
              
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                    <img
                      src={`https://images.unsplash.com/${featuredArticle.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80`}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {featuredArticle.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>

                    <Button className="w-fit bg-medical-blue hover:bg-blue-700">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-medical-gray-light">
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

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`https://images.unsplash.com/${article.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-medical-blue transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 text-sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-medical-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Health Tips
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and receive the latest health insights and medical advice directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-medical-blue hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
