import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Digital Harbor",
      role: "Full-Stack Software Developer",
      period: "May 2023 - Present (+3 years)",
      location: "Remote / International",
      description: "Desarrollo de soluciones escalables para Social Text y Yedy. Implementación de arquitecturas modernas y optimización de flujos de trabajo en equipos distribuidos.",
      tech: ["Angular", "NestJS", "TypeScript", "Microservices"]
    },
    {
      company: "Banco Fassil",
      role: "Senior UI/UX Developer",
      period: "June 2021 - May 2023 (2 years)",
      location: "Santa Cruz, Bolivia",
      description: "Liderazgo en el desarrollo de 'Gestor Digital' y creación del 'Pionus UI Kit', estandarizando la interfaz de usuario para toda la banca digital.",
      tech: ["Angular", "RxJS", "Design Systems", "UI/UX"]
    },
    {
      company: "Clan Bolivia",
      role: "Full-Stack Developer",
      period: "April 2021 - August 2021 (5 months)",
      location: "Remote / Bolivia",
      description: "Desarrollador principal de 'Mencargo' y 'Dogfy'. Creación de aplicaciones móviles y plataformas administrativas de alta demanda.",
      tech: ["Ionic", "Node.js", "Firebase", "Angular"]
    },
    {
      company: "Mencargo",
      role: "Software Developer, Tech Lead",
      period: "January 2020 - June 2021 (1 year 6 months)",
      location: "Santa Cruz, Bolivia",
      description: "Desarrollo independiente de soluciones personalizadas y conceptualización de plataformas como AidGlobe.",
      tech: ["Next.js", "Docker", "PostgreSQL"]
    },
    {
      company: "Freelance",
      role: "Graphic Designer",
      period: "2019 - Abril 2021 (2 years 4 months)",
      location: "Santa Cruz, Bolivia",
      description: "Primeros pasos profesionales enfocados en maquetación de alta fidelidad y lógica básica de aplicaciones web.",
      tech: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-cyan-500">Journey</span></h2>
        <p className="text-zinc-400">Mi camino evolucionando ideas en productos digitales robustos.</p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 ml-8 relative group">
            <div className="absolute -left-[41px] top-0">
              <div className="relative flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-cyan-500 transition-colors z-10" />
                <div className="absolute h-8 w-8 rounded-full bg-cyan-500/20 animate-pulse group-hover:bg-cyan-500/40" />
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-500 font-medium">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-zinc-950 text-zinc-500 border border-zinc-800 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;