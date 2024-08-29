import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "./components/Card";

const projectSections = [
  {
    title: "Introducción",
    content:
      "Este proyecto es una aplicación web para monitorear y analizar la calidad del aire y otras estadísticas ambientales. Proporciona datos en tiempo real sobre contaminantes del aire, temperatura, humedad y otros factores relevantes para la salud pública y el medio ambiente.",
  },
  // {
  //   title: "Instalación",
  //   content:
  //     "Para instalar el proyecto, sigue estos pasos:\n1. Clona el repositorio: git clone https://github.com/tu-usuario/air-quality-monitor.git\n2. Navega al directorio del proyecto: cd air-quality-monitor\n3. Instala las dependencias: npm install\n4. Configura las variables de entorno en un archivo .env (ver sección de Configuración)\n5. Inicia el servidor de desarrollo: npm run dev",
  // },
  {
    title: "Uso",
    content:
      "La aplicación muestra un dashboard con diferentes widgets:\n- Mapa de calidad del aire por zonas\n- Gráficos de tendencias de contaminantes\n- Alertas de calidad del aire\n- Recomendaciones basadas en los niveles actuales\n\nPuedes filtrar los datos por ubicación y rango de fechas usando los controles en la parte superior de la página.",
  },
  // {
  //   title: "Estructura del Proyecto",
  //   content:
  //     "El proyecto sigue una estructura típica de Next.js:\n- /pages: Rutas de la aplicación, incluyendo la API\n- /components: Componentes reutilizables (Dashboard, AirQualityMap, PollutantChart)\n- /lib: Funciones de utilidad y lógica de negocio (dataProcessing, apiCalls)\n- /public: Activos estáticos como imágenes y fuentes\n- /styles: Estilos globales y módulos CSS",
  // },
  // {
  //   title: "API",
  //   content:
  //     "La API del proyecto incluye los siguientes endpoints:\n- GET /api/air-quality: Obtiene datos actuales de calidad del aire\n- GET /api/historical-data: Recupera datos históricos para análisis de tendencias\n- POST /api/set-alert: Configura alertas personalizadas\n- GET /api/recommendations: Obtiene recomendaciones basadas en la calidad del aire actual",
  // },
  // {
  //   title: "Ejemplo de Datos",
  //   content:
  //     "A continuación se muestra un gráfico de ejemplo con datos de calidad del aire:",
  // },
];

const sampleData = [
  { name: "Ene", PM25: 35, PM10: 70, NO2: 80 },
  { name: "Feb", PM25: 28, PM10: 60, NO2: 70 },
  { name: "Mar", PM25: 40, PM10: 80, NO2: 90 },
  { name: "Abr", PM25: 37, PM10: 75, NO2: 85 },
  { name: "May", PM25: 30, PM10: 65, NO2: 75 },
  { name: "Jun", PM25: 25, PM10: 55, NO2: 65 },
];

export const App = () => {
  const [activeSection, setActiveSection] = useState(projectSections[0].title);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Documentación del Proyecto de Calidad del Aire
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {projectSections.map(({ content, title }, index) => (
            <Card content={content} index={index} title={title} />
          ))}
        </div>
        <div className="lg:block">
          <nav className="sticky top-4 bg-white shadow-md rounded-lg overflow-hidden">
            <header className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Contenido</h2>
            </header>
            <div className="px-6 py-4">
              <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                <ul className="space-y-2">
                  {projectSections.map((section, index) => (
                    <li key={index}>
                      <a
                        href={`#${section.title}`}
                        className={`block p-2 rounded-lg transition-colors ${
                          activeSection === section.title
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setActiveSection(section.title)}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
