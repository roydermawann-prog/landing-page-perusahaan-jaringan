import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { blogPosts } from '../../data';

export default function BlogSection() {
  return (
    <section id="blog" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center">
                <span className="text-white text-4xl">📝</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View all articles →</Link>
        </div>
      </div>
    </section>
  );
}
