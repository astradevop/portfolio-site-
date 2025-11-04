function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        {/* Professional Summary */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Professional Summary
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl border border-blue-100">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Python Full-Stack Developer with comprehensive experience across backend engineering, 
              modern front-end development, cloud deployment, and DevOps practices. Proficient in 
              building, testing, and deploying scalable web applications using Django, React, 
              containerization, and cloud platforms. Strong focus on clean code, system design, 
              automated pipelines, and secure development practices.
            </p>
          </div>
        </div>

        {/* Core Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Core Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Languages & Frameworks",
                content: "Python, Django (5.x), JavaScript (ES6+), React, HTML5, CSS3, Tailwind CSS"
              },
              {
                title: "Frontend",
                content: "React (functional components, hooks), client-side validation, responsive UI design, accessible markup"
              },
              {
                title: "Databases & Caching",
                content: "PostgreSQL, SQLite, MongoDB, Redis, SQL indexing and query optimization"
              },
              {
                title: "APIs & Architecture",
                content: "RESTful APIs, GraphQL (Apollo), session & token-based authentication (JWT, OAuth2), microservices patterns, event-driven design"
              },
              {
                title: "DevOps & Cloud",
                content: "Docker, Docker Compose, Kubernetes (basic), AWS (EC2, S3, RDS, Elastic Beanstalk, Lambda), GCP fundamentals, CI/CD (GitHub Actions, GitLab CI, Jenkins), Nginx, Gunicorn"
              },
              {
                title: "Testing & QA",
                content: "pytest, Django test framework, unit & integration testing, end-to-end testing (Cypress / Selenium)"
              },
              {
                title: "Background Tasks & Messaging",
                content: "Celery, RabbitMQ / Redis queues, scheduled jobs"
              },
              {
                title: "Security & Best Practices",
                content: "OWASP fundamentals, HTTPS/TLS, input validation, secrets management (.env, Vault concepts), role-based access control, secure password storage (hashing)"
              },
              {
                title: "Monitoring & Observability",
                content: "Logging, Sentry, Prometheus & Grafana basics, application health checks"
              },
              {
                title: "Other Tools & Practices",
                content: "Git/GitHub, Postman, Swagger / OpenAPI, Terraform (IaC basics), automated deployments, technical documentation, code review workflows"
              }
            ].map((skill, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105 transform"
              >
                <h4 className="text-xl font-bold text-purple-600 mb-3 group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {skill.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Professional Experience
          </h3>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Python Full Stack Developer — SMEC LABS</h4>
            <p className="text-blue-600 font-semibold mb-4">Kaloor, Kochi, Kerala • Jun 2025 – Present</p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Backend development with Django, including models, serializers, viewsets, and migrations.",
                "Frontend development using React and Tailwind CSS for interactive user interfaces and responsive layouts.",
                "API design and implementation: REST endpoints and GraphQL layers where appropriate.",
                "Containerization and deployment using Docker; orchestration fundamentals with Kubernetes and Docker Compose.",
                "Cloud deployment and environment configuration on AWS/GCP; static/media storage and managed database integration.",
                "CI/CD pipeline configuration and maintenance using GitHub Actions / Jenkins; automated testing and deployment workflows.",
                "Background job processing with Celery and message brokers; task scheduling and error handling.",
                "Application monitoring, logging, and error tracking using Sentry and Prometheus/Grafana basics.",
                "Adherence to secure development practices and code review processes; maintenance of technical documentation."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">BCA (Information Technology)</h4>
              <p className="text-gray-600 mb-2">Ettumanoorappan College</p>
              <p className="text-sm text-purple-600 font-semibold">Completed Jun 2025 • Affiliated to Mahatma Gandhi University</p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Higher Secondary (Computer Science)</h4>
              <p className="text-gray-600 mb-2">IHRD Technical HSS, Puthuppaly</p>
              <p className="text-sm text-blue-600 font-semibold">Completed Jun 2022</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Certifications
          </h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transform transition-transform">
              Python Programming (Beginner → Intermediate), KELTRON — 2023
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transform transition-transform">
              AI Tools & ChatGPT Workshop, Be10x Skills — Apr 2025
            </span>
          </div>
        </div>

        {/* Languages & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
            <div className="space-y-2">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium mr-2">English — Fluent</span>
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">Malayalam — Native</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interests</h3>
            <p className="text-gray-700 leading-relaxed">
              Learning new web technologies, cloud-native development, system design, UI/UX fundamentals, music.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
