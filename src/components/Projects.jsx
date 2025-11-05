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
      description: "A responsive portfolio website built with React and Vite, showcasing projects and professional experience. Features modern UI with dark theme and glassmorphism effects.",
      techStack: [
        "React", "Vite", "JavaScript (ES6+)", "CSS3", "HTML5", "Tailwind CSS"
      ],
      features: [
        "Responsive design with Flexbox and Grid",
        "Semantic HTML for accessibility",
        "Fast build with Vite",
        "Modern dark theme with glassmorphism",
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
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
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
