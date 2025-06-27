import useContent from '../hooks/useContent';

function GalleryPage() {
    const { gallery } = useContent();

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Галерея проектов</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((item, index) => (
                    <div key={index} className="rounded shadow overflow-hidden">
                        <img src={`/assets/${item.src}`} alt={item.type} className="w-full h-64 object-cover" />
                        <div className="p-2 bg-blue-50 text-sm text-center text-blue-900 font-medium">{item.type}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;
