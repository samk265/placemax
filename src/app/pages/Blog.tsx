import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const blogPosts = [
  {
    title: 'The Role of AI in Campus Placements for Tier-2 Colleges',
    excerpt: 'Discover how artificial intelligence is leveling the playing field for students outside metropolitan areas by providing personalized skill assessments and targeted learning paths.',
    category: 'AI & EdTech',
    author: 'PlaceMax Team',
    date: 'Feb 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: '#2CA6A4'
  },
  {
    title: '5 Soft Skills Every Graduate Needs in 2027',
    excerpt: 'Technical skills get you the interview, but soft skills get you the job. Learn which communication and problem-solving skills employers are prioritizing this hiring season.',
    category: 'Career Advice',
    author: 'HR Experts',
    date: 'Jan 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: '#F28C38'
  },
  {
    title: 'How to Improve Your College NIRF Ranking via Placement Metrics',
    excerpt: 'A comprehensive guide for college administrators on tracking the right metrics, improving average package sizes, and optimizing placement records for national accreditation.',
    category: 'For Colleges',
    author: 'Admissions Panel',
    date: 'Nov 20, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: '#4CAF50'
  },
  {
    title: 'Bridging the Industry-Academia Gap: A Practical Approach',
    excerpt: 'Why do so many companies find fresh graduates unemployable? We explore actionable strategies to align college curricula with real-world industry demands.',
    category: 'Industry Trends',
    author: 'PlaceMax Team',
    date: 'Sep 14, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: '#1F4E79'
  }
];

import { useEffect } from 'react';

export function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1F4E79' }}>
            Insights & Resources
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#1F4E79', opacity: 0.7 }}>
            Latest articles, guides, and trends on campus hiring, student employability, and EdTech innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm"
                  style={{ backgroundColor: post.color }}
                >
                  {post.category}
                </div>
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: '#1F4E79' }}>
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="pb-6">
                <Button variant="ghost" className="p-0 font-semibold group/btn" style={{ color: post.color }}>
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-md hover:scale-105 transition-transform" 
            style={{ backgroundColor: '#1F4E79', color: 'white' }}
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
