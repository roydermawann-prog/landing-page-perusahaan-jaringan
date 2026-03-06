import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { blogPosts } from '../data';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="pt-20 section">
        <div className="container">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button as={Link} to="/blog">Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 section">
      <div className="container max-w-3xl">
        <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          ← Back to blog
        </Link>
        <article>
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
            <div className="text-gray-500 dark:text-gray-400 text-sm">{post.date} · {post.readTime}</div>
          </header>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt} (Full article content would be loaded from CMS in production.)</p>
          </div>
        </article>
      </div>
    </div>
  );
}
