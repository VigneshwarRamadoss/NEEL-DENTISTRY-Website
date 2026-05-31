import { 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import { Link } from "react-router";

const posts = [
  {
    id: 1,
    title: "5 Simple Ways to Prevent Gum Disease",
    excerpt: "Gum health is just as important as the health of your teeth. Here are five easy habits to keep your gums healthy and strong.",
    category: "Prevention",
    date: "May 2, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjYXJlfGVufDF8fHwxNzc3OTYwMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "The Truth About Professional Teeth Whitening",
    excerpt: "Thinking about whitening your smile? We break down the differences between in-chair treatments and store-bought kits.",
    category: "Cosmetic",
    date: "April 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBzbWlsZXxlbnwxfHx8fDE3Nzc5NjAyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "When Should My Child First Visit the Dentist?",
    excerpt: "Early dental visits set the foundation for a lifetime of healthy habits. Learn why age one is the perfect time to start.",
    category: "Pediatric",
    date: "April 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBicmFjZXN8ZW58MXx8fHwxNzc3OTYwMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function BlogIndex() {
  return (
    <div className="pt-[80px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3Nzc5NjAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080')" }}
        >
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="text-primary uppercase tracking-[3px] text-sm font-semibold mb-4 block">Education</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            Latest from the Clinic
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-200 text-lg font-serif">
            Insights, advice, and stories from the world of dental health.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 bg-[#f2f2f2] rounded-[40px] overflow-hidden group">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={posts[0].image} 
                alt="Featured Post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-primary text-black rounded-full text-sm font-bold uppercase tracking-wider">{posts[0].category}</span>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                   <Calendar size={14} /> {posts[0].date}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6 group-hover:text-primary transition-colors">{posts[0].title}</h2>
              <p className="text-gray-600 text-lg font-serif mb-10 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-primary transition-colors group/link">
                Read Full Article <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map(post => (
              <div key={post.id} className="group cursor-pointer">
                <div className="rounded-3xl overflow-hidden aspect-video mb-8 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-primary text-xs font-bold uppercase tracking-[2px]">{post.category}</span>
                   <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                      <Clock size={12} /> {post.readTime}
                   </div>
                </div>
                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-serif mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-900 font-bold group/btn">
                  Read More <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform text-primary" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <BookOpen className="mx-auto text-gray-900 mb-8" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-gray-900">Get Health Tips in Your Inbox</h2>
          <p className="text-gray-800 text-lg mb-10 max-w-[600px] mx-auto font-serif">
            Join our community and get expert dental advice, clinic news, and exclusive tips delivered monthly.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
             <input type="email" placeholder="Your email address" className="flex-grow px-8 py-4 rounded-full border-none focus:ring-2 focus:ring-gray-900 outline-none font-serif shadow-sm" />
             <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
