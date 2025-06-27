import useContent from '../hooks/useContent';

function HomePage() {
    const { slogan, company, advantages } = useContent();

    return (
        <div className="p-4 space-y-12 max-w-5xl mx-auto">
            <section className="text-center mt-6">
                <h2 className="text-3xl font-bold text-blue-700">{slogan}</h2>
                <p className="text-gray-500 mt-2">Создаём уют и комфорт в каждой ванной комнате</p>
            </section>

            <section className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">О компании</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{company}</p>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Наши преимущества</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advantages.map((item, index) => (
                        <li key={index} className="bg-blue-100 p-3 rounded-md text-gray-800 shadow-sm">{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default HomePage;