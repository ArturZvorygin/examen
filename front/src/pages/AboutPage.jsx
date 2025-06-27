import useContent from '../hooks/useContent';

function AboutPage() {
    const { team, reviews } = useContent();

    return (
        <div className="p-4 space-y-12 max-w-5xl mx-auto">
            <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Наша команда</h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6">{team.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {team.images.map((img, index) => (
                        <img key={index} src={`/assets/${img}`} alt={`Команда ${index}`} className="rounded shadow-md" />
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Отзывы клиентов</h2>
                <ul className="space-y-6">
                    {reviews.map((review, index) => (
                        <li key={index} className="border-l-4 border-blue-400 pl-4">
                            <p className="font-semibold text-blue-800">{review.name}</p>
                            <p className="text-gray-600 italic">“{review.text}”</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default AboutPage;