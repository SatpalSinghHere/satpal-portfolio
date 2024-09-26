"use client"
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/V6wqGqIu82C
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Caudex } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

caudex({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Typewriter from 'typewriter-effect';
import dynamic from 'next/dynamic';
import { useState } from "react"

const Scene = dynamic(() => import('@/components/3DModel'), { ssr: false });

export function Portfolio() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center"  >
          <img src="/Signature.png" className="h-9" />
          <span className="sr-only">Satpal Singh's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4"  >
            About
          </Link>
          <Link href="#" onClick={() => scrollToSection("projects")} className="text-sm font-medium hover:underline underline-offset-4"  >
            Projects
          </Link>
          <Link href="#" onClick={() => scrollToSection("skills")} className="text-sm font-medium hover:underline underline-offset-4"  >
            Skills
          </Link>
          <Link href="#" onClick={() => scrollToSection("experience")} className="text-sm font-medium hover:underline underline-offset-4"  >
            Experience
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4"  >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Satpal Singh</h1>
                  <h2 className="text-xl font-semibold text-muted-foreground">
                    <Typewriter
                      options={{
                        strings: ["Full-Stack Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I'm a passionate full-stack developer with a strong background in building modern web applications. I love crafting beautiful and functional user interfaces, as well as designing robust and scalable backend systems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <button

                    onClick={() => scrollToSection("projects")}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                  >
                    Let's Connect
                  </button>
                </div>
              </div>
              <div className="mx-auto aspect-square overflow-hidden rounded-lg object-cover sm:w-full">
                <img
                  src="/bear.jpeg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover sm:w-full"
                />
                {/* <Scene /> */}
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-20 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I've worked on. Each one showcases my skills in different areas of web
                  development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <a href="https://chess-game-x4o4.onrender.com" target="_blank" className="duration-75 hover:scale-110">
                <Card>
                  <img
                    src="/chessLogo.jpeg"
                    width="400"
                    height="225"
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Chess Game</h3>
                    <p className="text-muted-foreground">
                      Click here to play chess with your friends online. This web application is built on Django + Channels
                    </p>
                  </CardContent>
                </Card>
              </a>
              <a href="https://satpals-flappybird.onrender.com/" target="_blank" className="duration-75 hover:scale-110">
                <Card>
                  <img
                    src="/flappy bird.png"
                    width="400"
                    height="225"
                    alt="Project 1"
                    className="aspect-video overflow-hidden rounded-t-xl object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Flappy Bird</h3>
                    <p className="text-muted-foreground">
                      Fleeling bored? Try this classic game of Flappy Bird made using HTML Canvas, Javascript and CSS.
                    </p>
                  </CardContent>
                </Card>
              </a>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 3"
                  className="aspect-video overflow-hidden rounded-t-xl object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">A real-time chat application built with Socket.IO and React.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse set of skills that allow me to tackle a wide range of web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">React</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Node.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <DatabaseIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">MongoDB</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <WindIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Tailwind CSS</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <TypeIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">TypeScript</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <GitGraphIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Git</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Next.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <ServerIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Socket.IO</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've had the opportunity to work on a variety of projects and gain experience in different areas of
                  web development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {/* <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <p className="text-muted-foreground">Acme Inc. | 2020 - Present</p>
                  <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                    <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB.</li>
                    <li>Implemented responsive and accessible user interfaces using Tailwind CSS.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                  </ul>
                </CardContent>
              </Card> */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Front-End Developer</h3>
                  <p className="text-muted-foreground">XYZ Corporation | 2018 - 2020</p>
                  <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                    <li>Lorem ipsum</li>
                    <li>Collaborated with back-end developers to integrate front-end components with RESTful APIs.</li>
                    <li>
                      Participated in code reviews and implemented best practices for maintainable and scalable code.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">Web Developer Intern</h3>
                  <p className="text-muted-foreground">ABC Company | 2017 - 2018</p>
                  <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                    <li>Assisted in the development of responsive web applications using HTML, CSS, and JavaScript.</li>
                    <li>Participated in code reviews and learned best practices for web development.</li>
                    <li>Gained experience in working with version control systems and project management tools.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm always excited to connect with new people and discuss potential collaborations. Feel free to reach
                  out to me through through any platform below.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="https://www.instagram.com/satpal_singh_live/" target="_blank" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <InstagramIcon className="h-10 w-10" />
                </Link>
                <Link href="https://www.linkedin.com/in/satpal-singh-a7bb16238/#" target="_blank" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <LinkedinIcon className="h-10 w-10" />
                </Link>
                <Link href="https://x.com/SatpalS94690586" target="_blank" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <TwitterIcon className="h-10 w-10" />
                </Link>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="max-w-lg flex-1"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="max-w-lg flex-1"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Message"
                    className="max-w-lg flex-1"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</Button>
                </form>
                {status && <p>{status}</p>}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4"  >
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4"  >
            Terms of Service
          </Link>
        </nav>
      </footer> */}
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function GitGraphIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}