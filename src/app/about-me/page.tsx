import { GraduationCap, Award, Heart, User, Trophy, Zap } from 'lucide-react';

const AboutMe = () => {
  const courses = [
    "Advanced Angular Patterns", "NestJS Microservices", 
    "UI/UX Design for Engineers", "Docker & Kubernetes Mastery",
    "Agile Leadership", "Cloud Architecture (AWS)"
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="md:col-span-8 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
            <User size={120} />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-cyan-500" /> The Engineer behind the code
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed max-w-2xl">
            <p>
              Soy un Desarrollador Full-Stack apasionado por la arquitectura limpia y las experiencias de usuario 
              excepcionales. Con una sólida base técnica y una **Maestría en Dirección Estratégica**, mi enfoque 
              no es solo escribir código, sino diseñar soluciones que impulsen negocios.
            </p>
            <p>
              Me especializo en ecosistemas modernos como **Angular y NestJS**, llevando la modularidad y 
              la escalabilidad al siguiente nivel. Creo firmemente que la tecnología debe ser invisible: 
              tan fluida y eficiente que el usuario solo sienta la facilidad de uso.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-8 rounded-3xl">
          <GraduationCap className="text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">Education</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold text-sm">Masters Degree in: Strategic Management in Software Engineering</p>
              <p className="text-zinc-400 text-xs">UAGRM School Of Engineering - Santa Cruz, Bolivia</p>
            </div>
            <div className="h-px bg-zinc-800" />
            <div>
              <p className="text-white font-semibold text-sm">Course on: Agile Project Management</p>
              <p className="text-zinc-400 text-xs">UAGRM School Of Engineering - Santa Cruz, Bolivia</p>
            </div>
            <div className="h-px bg-zinc-800" />
            <div>
              <p className="text-white font-semibold text-sm">Bachelor degree in: System Engineering</p>
              <p className="text-zinc-400 text-xs">Nur University - Santa Cruz, Bolivia</p>
            </div>
            <div className="h-px bg-zinc-800" />
            <div>
              <p className="text-white font-semibold text-sm">Course on: English</p>
              <p className="text-zinc-400 text-xs">CBA - Santa Cruz, Bolivia</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
          <Award className="text-cyan-500 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <span key={course} className="text-[10px] px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-500 font-mono">
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Heart className="text-pink-500" size={20} /> Beyond the Terminal
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">F1</div>
              <p className="text-xs text-zinc-500">Watching Max Verstappen & Alonso dominate the track.</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Wrestling</div>
              <p className="text-xs text-zinc-500">Following complex storylines in WWE & AEW.</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Fitness</div>
              <p className="text-xs text-zinc-500">Focusing on bodybuilding & scientifically optimized training.</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">Golden Retriever</div>
              <p className="text-xs text-zinc-500">Spending time with my best friend and the best breed.</p>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12">
            <Trophy size={150} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;