"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  HeadphonesIcon
} from 'lucide-react'

function Contact() {
  useEffect(() => {
    document.title = "ติดต่อเรา | Smart Store";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ติดต่อเราเพื่อปรึกษาโครงการและบริการต่างๆ");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Message sent successfully! We\'ll get back to you soon.')
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      info: "hello@inventorystore.com",
      detail: "We reply within 24 hours",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      info: "+1 (555) 123-4567",
      detail: "Mon-Fri 9AM-6PM PST",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with support",
      info: "Available 24/7",
      detail: "Instant responses",
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      info: "Free 30-min call",
      detail: "Choose your time",
      color: "orange"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in your service packages?",
      answer: "Our packages include design, development, testing, deployment, and post-launch support. We also provide training, documentation, and ongoing maintenance options."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! We offer various support packages including bug fixes, security updates, content updates, and feature enhancements. Our team is available for ongoing partnerships."
    },
    {
      question: "How do you handle project communication?",
      answer: "We use a combination of email, video calls, and project management tools to keep you updated. You'll have regular check-ins and access to real-time project progress."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we can help you with hosting setup, domain registration, and ongoing server management. We work with reliable hosting providers to ensure optimal performance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-rose-900/80 to-slate-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium">
                  💬 Get In Touch
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Let's
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                    Connect
                  </span>
                </h1>
                
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  Ready to transform your business? We'd love to hear about your project 
                  and discuss how we can help bring your vision to life.
                </p>
              </div>

            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative flex items-center justify-center">
              <div className="text-white text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold">Let's Talk</h3>
                <p className="text-white/90 text-xl max-w-md leading-relaxed">
                  Start your journey with a free consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-900 dark:to-rose-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the best way to reach us. We're here to answer your questions and discuss your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-rose-200 dark:hover:border-rose-400 cursor-pointer dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-${method.color}-100 dark:bg-${method.color}-900/30 rounded-full mx-auto flex items-center justify-center group-hover:bg-${method.color}-500 transition-colors duration-300`}>
                      <Icon className={`w-8 h-8 text-${method.color}-600 dark:text-${method.color}-400 group-hover:text-white transition-colors`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl dark:text-white">{method.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {method.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">{method.info}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-xl hover:shadow-2xl dark:hover:shadow-3xl transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center">
                      <Send className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl dark:text-white">Send us a Message</CardTitle>
                      <CardDescription className="text-lg dark:text-gray-300">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <Users className="w-4 h-4 mr-2 text-rose-600 dark:text-rose-400" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-rose-600 dark:text-rose-400" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-rose-600 dark:text-rose-400" />
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-rose-600 dark:text-rose-400" />
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg flex items-center justify-center space-x-2 py-4">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 dark:text-white">
                    <Globe className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    <span>Contact Information</span>
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Reach out to us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Office Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Business District<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">hello@inventorystore.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HeadphonesIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Live Support</h3>
                      <p className="text-gray-600 dark:text-gray-300">24/7 Live Chat</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Instant responses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-3 dark:text-white">
                    <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Transform your ideas into reality with our expert team. Let's schedule a free consultation 
              to discuss your project requirements and how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-rose-600 hover:bg-rose-50 border-0 font-semibold transition-all duration-300 shadow-xl" 
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 border-0 font-semibold transition-all duration-300 shadow-xl" 
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact