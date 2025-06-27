import useContent from '../hooks/useContent';

function BlogPage() {
    const { blog } = useContent();

    return (
        <div className="p-4 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Блог</h2>
            {blog.map((post, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h3>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogPage;