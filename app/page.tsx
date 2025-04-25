import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Calendar, ChevronRight, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

// Sample data for languages
const languages = [
  {
    name: "JavaScript",
    icon: Code2,
    description: "Build interactive web applications with the language of the web.",
  },
  {
    name: "Python",
    icon: Code2,
    description: "Learn the versatile language used in data science, AI, and web development.",
  },
  {
    name: "React",
    icon: Code2,
    description: "Create modern user interfaces with the popular JavaScript library.",
  },
  {
    name: "TypeScript",
    icon: Code2,
    description: "Add static typing to JavaScript for more robust applications.",
  },
  {
    name: "Node.js",
    icon: Code2,
    description: "Build scalable server-side applications with JavaScript.",
  },
  {
    name: "Go",
    icon: Code2,
    description: "Develop high-performance applications with Google's programming language.",
  },
]

// Sample data for events
const events = [
  {
    title: "Web Development Bootcamp",
    date: "March 15, 2025",
    description: "A comprehensive introduction to modern web development practices.",
    image: "/coding-bootcamp-meetup.png",
  },
  {
    title: "AI & Machine Learning Workshop",
    date: "February 22, 2025",
    description: "Exploring the fundamentals of AI and machine learning with Python.",
    image: "/collaborative-ai-learning.png",
  },
  {
    title: "React Advanced Patterns",
    date: "January 10, 2025",
    description: "Deep dive into advanced React patterns and performance optimization.",
    image: "/coding-workshop-react.png",
  },
]

// FAQ data
const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer:
      "No, our programs are designed for all skill levels. We have beginner-friendly courses that start from the basics, as well as advanced courses for experienced developers looking to upskill.",
  },
  {
    question: "How do the live coding sessions work?",
    answer:
      "Our live coding sessions use WebRTC technology to provide real-time video communication with instructors. You'll code alongside them in our custom editor, receiving immediate feedback and guidance as you work through challenges.",
  },
  {
    question: "What is the time commitment required?",
    answer:
      "Most of our programs require 15-20 hours per week for optimal progress. However, we offer flexible scheduling options to accommodate different time zones and work schedules.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "Yes, our Pro and Enterprise plans include career services such as resume reviews, portfolio development, interview preparation, and connections to our hiring partners in the tech industry.",
  },
  {
    question: "Can I switch between learning paths?",
    answer:
      "We understand that your interests may evolve as you learn. You can switch between learning paths at any time, and our mentors will help you create a personalized curriculum.",
  },
  {
    question: "Can I apply if I don't have a laptop?",
    answer:
      "While having your own computer is recommended for practice outside of class, we can discuss options for those without access to a laptop. Please contact us to discuss your specific situation.",
  },
  {
    question: "What if I already know how to program? Will I have to have classes with beginners?",
    answer:
      "Not at all! We assess your current skill level and place you in the appropriate class. Advanced students will be grouped with peers at a similar level to ensure you're always challenged and learning new skills.",
  },
  {
    question: "What other languages other than Python, JavaScript, HTML, CSS, Java, and Go does CodersHub UK teach?",
    answer:
      "We also offer courses in Ruby, PHP, Swift, Kotlin, C#, and specialized frameworks like React Native, Vue.js, and Django. If you're interested in a language not listed, please contact us as we can often arrange specialized instruction.",
  },
  {
    question: "Do I have to be a pro coder to attend the Weekly Coding Wars?",
    answer:
      "Not at all! Our Coding Wars are designed for all skill levels with different challenges available. It's a fun, collaborative environment where beginners and experienced coders can learn from each other.",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image src="/codershub-logo.png" alt="CodershubUk Logo" width={150} height={50} className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#languages" className="text-sm font-medium transition-colors hover:text-primary">
              Languages
            </Link>
            <Link href="#events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
            <Button>Get Started</Button>
          </nav>

          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - New Design */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-black/[0.03] -z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          <div className="container px-4 md:px-6">
            {/* Center aligned content */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
                <span className="block h-2 w-2 rounded-full bg-primary mr-2"></span>
                The future of coding education
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Build. Learn.{" "}
                <span className="relative">
                  Deploy
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Elevate your coding skills with personalized learning experiences designed for the modern developer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 rounded-full">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 rounded-full">
                  View Courses
                </Button>
              </div>
            </div>

            {/* Code editor mockup */}
            <div className="mt-16 max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 rounded-xl"></div>

              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                {/* Editor header */}
                <div className="flex items-center justify-between px-4 py-2 bg-black/80 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-white/70 ml-3">index.js</div>
                  </div>
                  <div className="text-xs text-white/50">CodershubUk Editor</div>
                </div>

                {/* Code content */}
                <div className="p-6 text-left font-mono text-sm text-white/90 bg-black">
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">1</div>
                    <div>
                      <span className="text-purple-400">import</span> <span className="text-blue-400">React</span>{" "}
                      <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">2</div>
                    <div></div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">3</div>
                    <div>
                      <span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>(){" "}
                      {"{"}
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">4</div>
                    <div>
                      &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">5</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">div</span>&gt;
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">6</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">h1</span>&gt;Hello,
                      CodershubUk!&lt;/<span className="text-blue-400">h1</span>&gt;
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">7</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">p</span>&gt;Welcome to
                      your coding journey&lt;/<span className="text-blue-400">p</span>&gt;
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">8</div>
                    <div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-400">div</span>&gt;
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">9</div>
                    <div>&nbsp;&nbsp;);</div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">10</div>
                    <div>{"}"}</div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">11</div>
                    <div></div>
                  </div>
                  <div className="flex">
                    <div className="text-white/30 mr-4 select-none">12</div>
                    <div>
                      <span className="text-purple-400">export</span> <span className="text-purple-400">default</span>{" "}
                      <span className="text-yellow-400">App</span>;
                    </div>
                  </div>

                  {/* Blinking cursor */}
                  <div className="absolute bottom-[6.5rem] left-[18.5rem] h-5 w-0.5 bg-white/70 animate-pulse"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/10 blur-xl"></div>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="px-4 py-2 bg-white/5 border border-border rounded-full text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-primary/50 rounded-full"></span>
                React
              </div>
              <div className="px-4 py-2 bg-white/5 border border-border rounded-full text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-yellow-500/50 rounded-full"></span>
                JavaScript
              </div>
              <div className="px-4 py-2 bg-white/5 border border-border rounded-full text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-blue-500/50 rounded-full"></span>
                TypeScript
              </div>
              <div className="px-4 py-2 bg-white/5 border border-border rounded-full text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500/50 rounded-full"></span>
                Node.js
              </div>
              <div className="px-4 py-2 bg-white/5 border border-border rounded-full text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-purple-500/50 rounded-full"></span>
                Python
              </div>
            </div>
          </div>
        </section>

        {/* Why CodersHub Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why CodersHub UK</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover why our students choose us for their coding education journey
                </p>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">About CodersHub UK</h3>
                  <p className="text-muted-foreground">
                    At Codershub UK we are a Coding Tutoring Agency that offers a range of courses to help you learn to
                    code.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    I Built This Entire Site and many more Applications from Scratch using Typescript, React, and Golang
                    And I also Have a Computer Science Degree with a 1st so I Know what i am doing.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    We offer 1 to 1 Classes Python, React and Next for Fullstack Web Development, Golang for Backend Web
                    Services.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col items-start space-y-2 border rounded-lg p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Expert Instruction</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn from a professional with real-world experience and academic excellence
                    </p>
                  </div>

                  <div className="flex flex-col items-start space-y-2 border rounded-lg p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m7 10 3 3 7-7"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Personalized Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      1-on-1 classes tailored to your learning pace and specific goals
                    </p>
                  </div>

                  <div className="flex flex-col items-start space-y-2 border rounded-lg p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">In-Demand Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on modern technologies that employers are actively seeking
                    </p>
                  </div>

                  <div className="flex flex-col items-start space-y-2 border rounded-lg p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M12 8v4l3 3"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Flexible Scheduling</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn at your own pace with scheduling that fits your lifestyle
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="flex justify-center">
                    <img src="/coder-binary.gif" alt="Coder with binary code" className="h-64 object-contain" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold">Real-World Projects</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Build practical applications that you can add to your portfolio
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex justify-center">
                      <img src="/phone-fishbowl.gif" alt="Phone in fishbowl" className="h-40 object-contain" />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-semibold">Modern Tech Stack</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Learn the latest technologies used in industry
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                    <div className="flex justify-center">
                      <img
                        src="/digital-juggler.gif"
                        alt="Digital technology juggler"
                        className="h-40 object-contain"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-semibold">Comprehensive Learning</h4>
                      <p className="text-sm text-muted-foreground mt-2">Master all aspects of modern development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About CEO Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <Image
                src="/sean-idisi.png"
                width={600}
                height={600}
                alt="Sean Idisi - CEO"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Sean Idisi</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    CEO of CodershubUk & Software Engineer at Google
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  With over a decade of experience in software development, Sean founded CodershubUk to bridge the gap
                  between theoretical knowledge and practical coding skills. His innovative approach combines real-time
                  collaboration, personalized mentorship, and cutting-edge tools to create an immersive learning
                  experience.
                </p>
                <p className="text-muted-foreground">
                  As a Software Engineer at Google, Sean brings industry best practices and real-world insights to help
                  students develop the skills that matter in today's tech landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Languages We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master the most in-demand programming languages with our expert-led courses.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {languages.map((language, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <language.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{language.name}</h3>
                  <p className="text-center text-muted-foreground">{language.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Methodology Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Teaching Methodology</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We believe in learning by doing, with real-time feedback and personalized guidance.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 16v4"></path>
                    <path d="M12 8v4"></path>
                    <path d="M4 4v16"></path>
                    <path d="M20 4v16"></path>
                    <path d="M12 4v4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Live Coding Sessions</h3>
                <p className="text-muted-foreground">
                  Join interactive sessions where you code alongside industry experts, receiving real-time feedback and
                  guidance.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="m9 15 3 3 3-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Project-Based Learning</h3>
                <p className="text-muted-foreground">
                  Build real-world projects that you can add to your portfolio, with guidance on industry best practices
                  and standards.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">1-on-1 Mentorship</h3>
                <p className="text-muted-foreground">
                  Get personalized guidance from experienced developers who can help you overcome challenges and
                  accelerate your learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Any Questions? If you have any enquiries or questions, please let us know at CodersHub UK. We are
                  happy to answer any questions you might have 😊
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-8 shadow-sm">
                <div className="flex flex-col items-center space-y-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Send us an email and we'll get back to you as soon as possible.
                    </p>
                    <a
                      href="mailto:Codershubuk@gmail.com"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      Codershubuk@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-background p-8 shadow-sm">
                <div className="flex flex-col items-center space-y-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Give us a call if you prefer to speak directly with our team.
                    </p>
                    <a
                      href="tel:07375061919"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      07375061919
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our programs and teaching methods.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section id="events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Past Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at our previous workshops and coding sessions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-colors hover:bg-accent"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      width={600}
                      height={400}
                      alt={event.title}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">
                View All Events
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Coding Journey?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of learners and take your coding skills to the next level.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Get Started Now</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/codershub-logo.png" alt="CodershubUk Logo" width={120} height={40} className="h-9 w-auto" />
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} CodershubUk. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
