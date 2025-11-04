import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Digital Banking Platform",
      description: "A comprehensive banking platform with multi-step onboarding, KYC workflows, authentication, and admin interfaces. Built with Django REST Framework backend and React frontend.",
      techStack: [
        "Python", "Django", "Django REST Framework", "React", "Tailwind CSS", 
        "PostgreSQL", "MongoDB", "Redis", "Celery", "Docker", 
        "GitHub Actions", "AWS (EC2/S3/RDS)", "OpenAPI"
      ],
      features: [
        "Multi-step onboarding and KYC workflows with session-managed flows",
        "Authentication flows supporting mobile verification and token-based authentication (JWT)",
        "Secure credential handling and hashed PIN storage",
        "Admin interfaces for KYC review and data management",
        "Background processing with Celery for asynchronous tasks",
        "Containerized application with Docker",
        "API documentation using OpenAPI/Swagger"
      ],
      githubLink: "https://github.com/astradevop",
      projectType: "Internship Project"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Vite, showcasing projects and professional experience. Features modern UI with CSS variables and semantic HTML.",
      techStack: [
        "React", "Vite", "JavaScript (ES6+)", "CSS3", "HTML5", "Tailwind CSS"
      ],
      features: [
        "Responsive design with Flexbox and Grid",
        "Semantic HTML for accessibility",
        "Fast build with Vite",
        "Modern CSS with Tailwind CSS",
        "Smooth animations and transitions"
      ],
      githubLink: "https://github.com/astradevop",
      projectType: "Personal Project"
    },
    {
      id: 3,
      title: "API Development Project",
      description: "RESTful API development with Django REST Framework, featuring authentication, database optimization, and comprehensive testing.",
      techStack: [
        "Python", "Django", "Django REST Framework", "PostgreSQL", 
        "Redis", "pytest", "Docker"
      ],
      features: [
        "RESTful API endpoints with authentication",
        "Database query optimization",
        "Comprehensive unit and integration testing",
        "Containerized deployment with Docker",
        "Redis caching for performance"
      ],
      githubLink: "https://github.com/astradevop",
      projectType: "Personal Project"
    }
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Explore my recent work and projects showcasing my skills in full-stack development, cloud deployment, and modern web technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
