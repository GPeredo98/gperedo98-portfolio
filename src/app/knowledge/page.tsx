import { 
  Layout, Server, Smartphone, Globe, 
  Layers, Database, Cloud, Terminal 
} from 'lucide-react';

const Knowledge = () => {
  const techStack = [
    {
      category: "Frontend Architecture",
      icon: <Layout className="text-cyan-400" />,
      skills: ["Angular 14-19", "TypeScript", "RxJS", "Next.js", "Tailwind CSS", "UI/UX Design"],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: "Backend & Core",
      icon: <Server className="text-purple-400" />,
      skills: ["NestJS", "Node.js", "Microservices", "RESTful APIs", "TypeORM", "Clean Architecture"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: "Mobile Solutions",
      icon: <Smartphone className="text-amber-400" />,
      skills: ["Ionic Framework", "Capacitor", "Android/iOS Deploy", "Mobile UI Patterns"],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="text-emerald-400" />,
      skills: ["Docker", "CI/CD (Render/Bitbucket)", "AWS/Vercel", "SQL/NoSQL Databases", "Git Flow"],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="knowledge" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-4">
          Technical Ecosystem
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          Expertise & <span className="text-zinc-500">Toolbelt</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((stack, index) => (
          <div 
            key={index}
            className={`relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-zinc-800 border border-zinc-700">
                  {stack.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{stack.category}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {stack.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 text-zinc-800/20 group-hover:text-cyan-500/10 transition-colors">
              <Layers size={120} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl border border-dashed border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-900/20">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
            <Globe size={24} />
          </div>
          <div>
            <p className="text-white font-semibold">Strategic Management in Software Engineering</p>
            <p className="text-zinc-500 text-sm">Master's Degree perspective on every project.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-xs font-mono text-zinc-500 px-3 py-1 border border-zinc-800 rounded-lg">Agile</span>
          <span className="text-xs font-mono text-zinc-500 px-3 py-1 border border-zinc-800 rounded-lg">Team Leadership</span>
          <span className="text-xs font-mono text-zinc-500 px-3 py-1 border border-zinc-800 rounded-lg">Mentoring</span>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;