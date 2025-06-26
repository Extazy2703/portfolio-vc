"use client"

import { useState } from "react"
import {
  User,
  FileText,
  BookOpen,
  Mail,
  ArrowLeft,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

type ActiveSection = "home" | "about" | "resume" | "projects" | "contact"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home")

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "resume":
        return <ResumeSection />
      case "projects":
        return <ProjectsSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  if (activeSection !== "home") {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveSection("home")}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Orqaga
            </Button>
            <h1 className="font-medium text-gray-900">Kamronbek</h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-8">{renderContent()}</div>
      </div>
    )
  }

  return <HomeSection setActiveSection={setActiveSection} />
}

function HomeSection({ setActiveSection }: { setActiveSection?: (section: ActiveSection) => void }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src="/hero-bg.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-blue-600/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-20">
          <div className="max-w-2xl">
            {/* Name Badge */}
            <div className="inline-block bg-blue-500/30 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-white font-medium tracking-wider text-sm">KAMRONBEK</span>
            </div>

            {/* Job Title */}
            <h1 className="text-white text-4xl md:text-5xl font-light mb-8 tracking-wide">JAVA BACKEND DEVELOPER</h1>

            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
              I am Software Engineer and in this portfolio I showcase my Java Backend development skills and share my
              professional experience.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pb-8 px-6">
          <div className="flex justify-center space-x-8 md:space-x-12">
            <button
              onClick={() => setActiveSection?.("about")}
              className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors"
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium tracking-wider">ABOUT ME</span>
            </button>
            <button
              onClick={() => setActiveSection?.("resume")}
              className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors"
            >
              <FileText className="w-6 h-6" />
              <span className="text-xs font-medium tracking-wider">RESUME</span>
            </button>
            <button
              onClick={() => setActiveSection?.("projects")}
              className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors"
            >
              <BookOpen className="w-6 h-6" />
              <span className="text-xs font-medium tracking-wider">PROJECTS</span>
            </button>
            <button
              onClick={() => setActiveSection?.("contact")}
              className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span className="text-xs font-medium tracking-wider">CONTACT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="min-h-screen relative overflow-hidden -mx-6 -my-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image src="/about-bg.jpg" alt="Kamronbek Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">About Me</h2>
            <p className="text-white/80 text-lg">Java Backend Developer</p>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-8">Hello, I'm Kamronbek Madatov!</h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
              Kamronbek Madatov — an aspiring Java Developer from Karakalpakistan, currently based in Tashkent. I am
              passionate about learning backend technologies, building clean code, and improving my skills in Java and
              related frameworks.
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12">
              I am eager to contribute to real-world projects and grow as a developer. My goal is to become a skilled
              backend engineer who can build scalable and efficient applications.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Java
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Spring Boot
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                REST API
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Microservices
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                PostgreSQL
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Docker
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Maven
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Git
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-white/90">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumeSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Resume</h2>
        <p className="text-gray-600">Mening professional tajribam</p>
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h3 className="text-2xl font-medium text-gray-900 mb-8">Ish Tajribasi</h3>
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">Senior Java Developer</h4>
                  <p className="text-blue-600">Tech Company</p>
                </div>
                <span className="text-sm text-gray-500">2022 - Hozir</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Enterprise darajadagi Java ilovalar yaratish</li>
                <li>• Mikroservis arxitekturasini loyihalash va amalga oshirish</li>
                <li>• RESTful API'lar yaratish va optimallashtirish</li>
                <li>• Database dizayn va performance tuning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">Java Developer</h4>
                  <p className="text-blue-600">Software Solutions</p>
                </div>
                <span className="text-sm text-gray-500">2020 - 2022</span>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• Spring Boot ilovalar yaratish</li>
                <li>• Database bilan ishlash (PostgreSQL, MySQL)</li>
                <li>• Unit va Integration testlar yozish</li>
                <li>• Code review va mentoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h3 className="text-2xl font-medium text-gray-900 mb-8">Ta'lim</h3>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-medium text-gray-900">Kompyuter Injiniringi</h4>
                <p className="text-blue-600">Toshkent Axborot Texnologiyalari Universiteti</p>
              </div>
              <span className="text-sm text-gray-500">2016 - 2020</span>
            </div>
            <p className="text-gray-600">Bakalavr darajasi - Dasturiy ta'minot injiniringi</p>
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-2xl font-medium text-gray-900 mb-8">Texnik Ko'nikmalar</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Backend Technologies</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Java</span>
                <span className="text-blue-600">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Spring Boot</span>
                <span className="text-blue-600">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">REST API</span>
                <span className="text-blue-600">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Microservices</span>
                <span className="text-blue-600">Advanced</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Database & Tools</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">PostgreSQL</span>
                <span className="text-blue-600">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Docker</span>
                <span className="text-blue-600">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Git</span>
                <span className="text-blue-600">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maven</span>
                <span className="text-blue-600">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Backend API",
      description: "To'liq e-commerce platformasi uchun mikroservis arxitekturasi",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      status: "Completed",
    },
    {
      title: "Banking System",
      description: "Bank operatsiyalari uchun xavfsiz backend tizim",
      tech: ["Java", "Spring Security", "MySQL", "Redis"],
      status: "In Progress",
    },
    {
      title: "Task Management API",
      description: "Jamoaviy ish uchun vazifalar boshqaruv tizimi",
      tech: ["Java", "Spring Boot", "MongoDB", "JWT"],
      status: "Completed",
    },
    {
      title: "Real-time Chat Service",
      description: "WebSocket asosida real-time chat xizmati",
      tech: ["Java", "Spring WebSocket", "PostgreSQL", "RabbitMQ"],
      status: "Completed",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Loyihalarim</h2>
        <p className="text-gray-600">Java Backend development loyihalari</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-4">Bog'lanish</h2>
        <p className="text-gray-600">Loyiha bo'yicha gaplashish yoki hamkorlik uchun</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-6">Bog'lanish ma'lumotlari</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">kamronbek@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Telefon</p>
                <p className="text-gray-600">+998 90 123 45 67</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium text-gray-900 mb-4">Ijtimoiy tarmoqlar</h4>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-6">Xabar yuborish</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ism</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ismingizni kiriting"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Xabar</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Xabaringizni yozing..."
              ></textarea>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Xabar yuborish</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
