import useContent from '../hooks/useContent';

function ServicesPage() {
    const { services } = useContent();

    return (
        <div className="p-4 space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Наши услуги</h2>
            <div className="grid gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.name}</h3>
                        <p className="text-gray-700 mb-1">{service.description}</p>
                        <p className="text-sm text-gray-500 mb-1 italic">Пример: {service.example}</p>
                        <p className="text-sm font-medium text-blue-900">Цена: {service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
