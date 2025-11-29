import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ASTRALFIN - Digital Banking Platform",
      description: "A modern neo-banking web application built with Django that allows users to manage bank accounts, transfer money, view transaction history, and apply for loans. Features multi-step onboarding, Auth0 OAuth integration, and comprehensive banking operations.",
      techStack: [
        "Python", "Django", "Tailwind CSS", "PostgreSQL (Supabase)", 
        "Auth0", "ReportLab", "Django ORM", "GitHub Actions"
      ],
      features: [
        "Multi-step onboarding with unique Customer ID & Account Number generation",
        "Authentication with custom user model and Auth0 OAuth integration",
        "Real-time transactions with atomic balance updates and PDF statements",
        "Loan processing with EMI calculation, autopay toggle, and pre-closure workflow",
        "Investment module supporting 5 asset types with profit/loss computation",
        "Admin interfaces for user, account, transaction, loan, and investment management",
        "Secure credential handling, CSRF protection, and password hashing"
      ],
      githubLink: "https://github.com/astradevop/ASTRALFIN",
      liveLink: "https://astralfin.vercel.app",
      projectType: "Internship Project"
    },
    {
      id: 2,
      title: "ExpenseX - Expense Tracker",
      description: "A full-stack expense management system with CRUD operations, search, category filtering, and optional image uploads. Built with Django REST Framework backend providing RESTful API endpoints.",
      techStack: [
        "Python", "Django", "Django REST Framework", "React", 
        "Tailwind CSS", "PostgreSQL"
      ],
      features: [
        "Full CRUD operations for expense management",
        "Category filtering and search functionality",
        "Optional image uploads for expense receipts",
        "RESTful API endpoints with Django REST Framework",
        "Responsive UI with React and Tailwind CSS",
        "User authentication and authorization"
      ],
      githubLink: "https://github.com/astradevop/ExpenseX",
      projectType: "Personal Project"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Vite, showcasing projects and professional experience. Features modern UI with dark theme, glassmorphism effects, and smooth animations.",
      techStack: [
        "React", "Vite", "JavaScript (ES6+)", "CSS3", "HTML5", "Tailwind CSS"
      ],
      features: [
        "Responsive design with Flexbox and Grid",
        "Semantic HTML for accessibility",
        "Fast build with Vite and optimized performance",
        "Modern dark theme with glassmorphism effects",
        "Smooth animations and scroll-based transitions",
        "Interactive parallax effects"
      ],
      githubLink: "https://github.com/astradevop",
      liveLink: "https://akashsnair.netlify.app",
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
