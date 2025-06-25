"use client"

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Globe,
  Lightbulb,
} from "lucide-react";

function About() {
  useEffect(() => {
    document.title = "เกี่ยวกับเรา | Smart Store";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "เกี่ยวกับเรา");
    }
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive advantage.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-blue-200",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "We never compromise on quality. Every line of code, every design element, and every user interaction is crafted with attention to detail.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hoverBg: "group-hover:bg-green-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-green-200",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe the best results come from working closely with our clients, understanding their needs, and building solutions together.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-purple-200",
    },
    {
      icon: Target,
      title: "Transparency",
      description:
        "Open communication and honest feedback are at the heart of our relationships. We keep our clients informed every step of the way.",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverBg: "group-hover:bg-orange-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-orange-200",
    },
    {
      icon: TrendingUp,
      title: "Reliability",
      description:
        "When we commit to a project, we deliver on time and on budget. Our clients can count on us to be there when they need us.",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      hoverBg: "group-hover:bg-red-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-red-200",
    },
    {
      icon: Globe,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, continuously learning and improving to stay at the forefront of our industry.",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-500",
      hoverIcon: "group-hover:text-white",
      borderColor: "hover:border-indigo-200",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to revolutionize digital experiences",
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Landed our first enterprise-level project",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to 15+ talented professionals",
    },
    {
      year: "2022",
      title: "500+ Projects",
      description: "Delivered successful solutions across industries",
    },
    {
      year: "2023",
      title: "International Reach",
      description: "Expanded services to global markets",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established our R&D center for emerging technologies",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Lead Developer & Co-Founder",
      initials: "JS",
      gradient: "from-blue-500 to-purple-600",
      description:
        "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies. Passionate about clean code and scalable architecture.",
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director & Co-Founder",
      initials: "SJ",
      gradient: "from-green-500 to-blue-600",
      description:
        "Creative designer focused on user-centered design and creating beautiful, functional interfaces that users love.",
    },
    {
      name: "Michael Wilson",
      role: "Head of Operations",
      initials: "MW",
      gradient: "from-purple-500 to-pink-600",
      description:
        "Experienced project manager ensuring smooth delivery and excellent client communication across all projects.",
    },
    {
      name: "Emma Davis",
      role: "Lead Designer",
      initials: "ED",
      gradient: "from-orange-500 to-red-600",
      description:
        "Specializes in UI/UX design with a keen eye for modern trends and user experience optimization.",
    },
    {
      name: "Alex Chen",
      role: "DevOps Engineer",
      initials: "AC",
      gradient: "from-cyan-500 to-blue-600",
      description:
        "Infrastructure specialist ensuring robust, scalable, and secure deployment of all our solutions.",
    },
    {
      name: "Lisa Rodriguez",
      role: "Business Development",
      initials: "LR",
      gradient: "from-pink-500 to-purple-600",
      description:
        "Drives growth and partnerships, connecting innovative solutions with businesses that need them most.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                  📚 Our Story & Mission
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  About
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Our Journey
                  </span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  We're a passionate team of innovators, creators, and
                  problem-solvers dedicated to transforming ideas into
                  exceptional digital experiences that make a real difference.
                </p>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative flex items-center justify-center">
              <div className="text-white text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <Target className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Our Mission</h3>
                <p className="text-white/90 text-xl max-w-md leading-relaxed">
                  Empowering businesses through innovative technology solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry leaders - here's how we've
              grown and evolved.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 dark:hover:border-blue-400 dark:bg-gray-800 dark:border-gray-700"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold mb-4">
                      {milestone.year.slice(-2)}
                    </div>
                    <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                      {milestone.year}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with
              our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${value.borderColor} dark:hover:border-opacity-50 dark:bg-gray-700 dark:border-gray-600`}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-20 h-20 ${value.iconBg} dark:bg-opacity-20 rounded-full mx-auto flex items-center justify-center ${value.hoverBg} transition-colors`}
                    >
                      <Icon
                        className={`w-10 h-10 ${value.iconColor} dark:text-white ${value.hoverIcon} transition-colors`}
                      />
                    </div>
                    <CardTitle className="text-xl mt-4 dark:text-white">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed dark:text-gray-300">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Meet Our Amazing Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our success - passionate professionals
              dedicated to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader className="text-center space-y-4">
                  <div
                    className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <CardTitle className="text-xl dark:text-white">{member.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Something Amazing?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              We'd love to hear about your project and discuss how we can help
              bring your vision to life. Let's create something extraordinary
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold transition-all duration-300 shadow-xl"
                asChild
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 border-0 font-semibold transition-all duration-300 shadow-xl"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About