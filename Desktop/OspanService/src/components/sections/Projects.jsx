import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-amber-500 uppercase font-semibold tracking-widest">
            Наши проекты
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Выполненные объекты
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;