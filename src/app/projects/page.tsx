import { ExternalLink, FolderLock, Eye } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const projects: any[] = [
		{
			title: "Mencargo",
			company: "Overscope Technologies",
			description: "Sistema integral de gestión para condominios y seguridad.",
			mainImage: "/projects/mencargo-main.jpg",
			internalImages: ["/projects/mencargo-dash.jpg", "/projects/mencargo-app.jpg"],
			tags: ["Angular", "NestJS", "Ionic"],
			type: 'private',
			links: { preview: "https://mencargo.com" }
		},
		{
			title: "Mencargo",
			company: "Overscope Technologies",
			description: "Sistema integral de gestión para condominios y seguridad.",
			mainImage: "/projects/mencargo-main.jpg",
			internalImages: ["/projects/mencargo-dash.jpg", "/projects/mencargo-app.jpg"],
			tags: ["Angular", "NestJS", "Ionic"],
			type: 'private',
			links: { preview: "https://mencargo.com" }
		},
		{
			title: "AidGlobe",
			description: "Plataforma global para la gestión de voluntariado y ayuda social.",
			mainImage: "/projects/aidglobe-main.jpg",
			internalImages: ["/projects/aidglobe-1.jpg", "/projects/aidglobe-2.jpg"],
			tags: ["Next.js", "TypeScript", "Tailwind"],
			type: 'personal',
			links: {
				preview: "https://aidglobe.org",
				github: "https://github.com/GPeredo98/aidglobe-cloud"
			}
		},
	];

	return (
		<section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
				<div>
					<h2 className="text-4xl font-bold mb-4">Featured Work</h2>
					<p className="text-zinc-400 max-w-xl">
						A collection of enterprise solutions and personal experiments
						built with precision and scalability in mind.
					</p>
				</div>
				<div className="flex gap-2">
					<span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
						{projects.length} Total Projects
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{projects.map((project, index) => (
					<div
						key={index}
						className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
					>
						<div className="relative h-72 w-full overflow-hidden">
							<Image
								src={project.mainImage}
								alt={project.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

							<div className="absolute top-4 left-4">
								{project.type === 'private' ? (
									<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
										<FolderLock size={12} /> Enterprise
									</span>
								) : (
									<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-bold uppercase tracking-wider">
										<Eye size={12} /> Open Source
									</span>
								)}
							</div>
						</div>

						<div className="p-8">
							<div className="flex justify-between items-start mb-4">
								<div>
									{project.company && (
										<span className="text-cyan-500 text-xs font-mono mb-1 block">
											@{project.company}
										</span>
									)}
									<h3 className="text-2xl font-bold text-white">{project.title}</h3>
								</div>

								<div className="flex gap-3">
									{project.links.github && (
										<a href={project.links.github} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
											<ExternalLink size={20} />
										</a>
									)}
									{project.links.preview && (
										<a href={project.links.preview} target="_blank" className="text-zinc-400 hover:text-cyan-400 transition-colors">
											<ExternalLink size={20} />
										</a>
									)}
								</div>
							</div>

							<p className="text-zinc-400 text-sm leading-relaxed mb-6">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2 mb-8">
								{project.tags.map((tag: string) => (
									<span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50">
										{tag}
									</span>
								))}
							</div>

							<div className="flex gap-3 pt-6 border-t border-zinc-800/50">
								<span className="text-[10px] text-zinc-500 uppercase font-bold self-center mr-2">Inside:</span>
								{project.internalImages.map((img: string, i: number) => (
									<div key={i} className="relative h-12 w-20 rounded-lg overflow-hidden border border-zinc-700 grayscale hover:grayscale-0 transition-all cursor-pointer">
										<Image src={img} alt="Internal screenshot" fill className="object-cover" />
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;