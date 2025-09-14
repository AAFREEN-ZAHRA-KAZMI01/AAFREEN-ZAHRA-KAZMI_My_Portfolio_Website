"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen } from "lucide-react";
import Image from "next/image";

import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Star,
  Play,
  Download,
  Heart,
  Github,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Cloud,
  Shield,
  Brain,
  FileText,
  BarChart,
  Zap,

} from "lucide-react";
import { motion } from "framer-motion";

export default function PersonalizedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasMovedMouse, setHasMovedMouse] = useState(false); // New state to track mouse movement

  // Use ref for cursor position to optimize updates with requestAnimationFrame
  const mousePosRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    // Mouse move handler using requestAnimationFrame for smooth updates
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!hasMovedMouse) {
        setHasMovedMouse(true); // Set to true after the first mouse move
      }
    };

    const animateCursor = () => {
      if (cursorRef.current && hasMovedMouse) { // Only animate if mouse has moved
        // Smaller cursor: width and height 16px (+/-8 for centering)
        cursorRef.current.style.transform = `translate3d(${mousePosRef.current.x - 8}px, ${mousePosRef.current.y - 8}px, 0) scale(${currentSection === 0 ? 1.3 : 1})`;
        cursorRef.current.style.opacity = '1'; // Make visible
      } else if (cursorRef.current && !hasMovedMouse) {
        cursorRef.current.style.opacity = '0'; // Keep hidden until mouse moves
      }
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    // Scroll handler for active section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll("section");
      let current = 0;
      sections.forEach((section, index) => {
        if (scrollY >= section.offsetTop - windowHeight / 3) {
          current = index;
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, hasMovedMouse]); // Added hasMovedMouse to dependency array

  // Updated personal data
  const formData = {
    name: "Aafreen Zahra Kazmi",
    title: "AI | NLP & Deep Learning | Ethical Hacking",
    email: "aafreenzK1214@gmail.com",
    location: "Rawalpindi, Pakistan",
    bio: "Passionate about Artificial Intelligence, Deep Learning, NLP, and Cybersecurity. Currently working on Agentic AI projects and applying ML/DL techniques to real-world problems. Skilled in Python, C++, and SQL, with growing knowledge in ethical hacking and system security.",
    profilePicture: "public/img/profilepic.jpg", // Corrected image path
    cvDownloadLink: "/img/AAFREEN%20ZAHRA%20KAZMI%20RESUME.pdf",
    githubProfile: "https://github.com/AAFREEN-ZAHRA-KAZMI01",
    linkedinProfile: "https://www.linkedin.com/in/aafreen-zahra-kazmi-565ba2276",
  };

  // Projects data
  const projects = [
    {
      title: "Customer Segmentation",
      category: "Machine Learning",
      description: "Developed a customer segmentation model to identify distinct customer groups for targeted marketing strategies. Utilized clustering algorithms and data visualization techniques.",
      color: "from-purple-600 to-pink-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Customer-Segmetation",
      demo: null,
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
    },
    {
      title: "Financial News Sentimental Analysis",
      category: "NLP",
      description: "Built a sentiment analysis model to gauge market sentiment from financial news articles, aiding in investment decisions. Employed advanced NLP techniques.",
      color: "from-blue-600 to-cyan-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/FINANCIAL-NEWS-SENTIMENTAL-ANALYSIS",
      demo: "https://financial-time-series-anomaly-detection-dn7gjh2mce8kyuvfw2vddo.streamlit.app/",
      tech: ["Python", "NLTK", "Transformers", "Streamlit"]
    },
    {
      title: "Fake vs Real News Predictor (Naive Bayes)",
      category: "Machine Learning",
      description: "Created a classifier using Naive Bayes to distinguish between fake and real news articles, contributing to misinformation detection.",
      color: "from-green-600 to-teal-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Fake_vs_Real_News_Predictor_NaiveBaiyes",
      demo: "https://fakevsrealnewspredictornaivebaiyes-uj2io7wdzwo9p2hyuab4bi.streamlit.app/",
      tech: ["Python", "Scikit-learn", "NLP", "Streamlit"]
    },
    {
      title: "Movie Review Sentimental Analysis",
      category: "NLP",
      description: "Developed a sentiment analysis tool for movie reviews, providing insights into audience reception and critical feedback.",
      color: "from-orange-600 to-red-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/MOVIE-REVIEW-SENTIMENTAL-ANALYSIS",
      demo: "https://moviesentimentanalyzer-fpvginfjn5edhokth7j3kc.streamlit.app/",
      tech: ["Python", "TensorFlow", "Keras", "Streamlit"]
    },
    {
      title: "Financial Time Series Anomaly Detection",
      category: "Data Science",
      description: "Implemented an anomaly detection system for financial time series data to identify unusual patterns and potential risks.",
      color: "from-indigo-600 to-purple-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Financial-Time-Series-Anomaly-Detection",
      demo: "https://financial-time-series-anomaly-detection-dn7gjh2mce8kyuvfw2vddo.streamlit.app/",
      tech: ["Python", "StatsModels", "Prophet", "Streamlit"]
    },
    {
      title: "Credit Risk Analysis Report",
      category: "Data Analysis",
      description: "Conducted a comprehensive credit risk analysis, generating reports and visualizations to assess and mitigate financial risks.",
      color: "from-pink-600 to-red-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Credit-Risk-Analysis-Report",
      demo: "https://credit-risk-analysis-report-kbjubpulzszxgqkcfpdxhx.streamlit.app/",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"]
    },
    {
      title: "Satellite Image Analysis for Deforestation Monitoring",
      category: "Computer Vision",
      description: "Applied image processing and machine learning techniques to analyze satellite imagery for monitoring deforestation patterns.",
      color: "from-yellow-600 to-green-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/-Satellite-Image-Analysis-for-Deforestation-Monitoring",
      demo: null,
      tech: ["Python", "OpenCV", "TensorFlow", "Geospatial Data"]
    },
    {
      title: "Emotion Detection Using BERT",
      category: "Deep Learning",
      description: "Developed a robust emotion detection model leveraging the BERT transformer architecture for accurate sentiment and emotion classification.",
      color: "from-teal-600 to-blue-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Emotion-Detection-Using-Bert",
      demo: null,
      tech: ["Python", "PyTorch", "Transformers (Hugging Face)", "BERT"]
    },
    {
      title: "LlamaIndex Learning/RAG Application",
      category: "Generative AI",
      description: "Explored and implemented RAG (Retrieval Augmented Generation) using LlamaIndex for enhanced AI applications.",
      color: "from-gray-600 to-slate-600",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/LlamaIndexLearning",
      demo: "https://llamaindexlearning-fgfvsrdhrkulvyyxkyhebx.streamlit.app/",
      tech: ["Python", "LlamaIndex", "Generative AI", "Streamlit"]
    },
    {
      title: "Lead Generation Chatbot",
      category: "Generative AI",
      description: "The Lead Generation Chatbot helps businesses automatically collect and manage customer information. It engages users through simple conversations, asking key questions to capture details and turn them into qualified leads. By automating this process, the chatbot saves time, reduces manual effort, and improves customer interaction. Overall, it provides a smart foundation for building intelligent chatbots that support marketing and sales growth.",
      color: "from-purple-500 to-indigo-500",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/LEAD_GENERATION_CHATBOT",
      demo: null,
      tech: ["LangChain", "LangGraph", "LangSmith", "Python", "Generative AI"]
    },
    {
      title: "Customer Support Chatbot",
      category: "Generative AI",
      description: "Developed a Customer Support Chatbot to automate responses to customer questions and standard requests, improving response time, user satisfaction, and scalability. The system uses NLP to recognize user intent, reply to FAQs, and escalate to human agents when needed. It enables a business to provide 24/7 customer support without constant manual effort, while maintaining consistent and relevant responses.",
      color: "from-blue-500 to-purple-500",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Customer-Support-Chatbot.git",
      demo: null,
      tech: ["Python", "NLP", "Chatbot", "Generative AI"]
    },
    {
      title: "JIRA-SLACK Integration",
      category: "Automation",
      description: "I developed a JIRA-Slack Integration tool using Python that sends real-time JIRA issue updates directly into Slack channels. This allows teams to stay updated on project progress without the need to manually check JIRA. By automating notifications, the tool improves collaboration, boosts efficiency, and ensures better visibility across projects.",
      color: "from-green-500 to-blue-500",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/JIRA-SLACK-INTEGRATION.git",
      docs: "https://www.notion.so/JIRA-TOOL-230e9f15cd7b801abbfbf1a12efe78f7?source=copy_link",
      demo: null,
      tech: ["JIRA API", "Slack API", "Python", "Automation"]
    },
    {
      title: "LangGraph Learning",
      category: "Generative AI",
      description: "Learning to build a chatbot with UI for research and summarization tasks using LangChain, LangGraph, and LangSmith. Exploring integration of external tools like Gmail, WhatsApp, Notion, OneDrive, Tavity, and local file systems. Gaining practical skills in agent workflows, prompt handling, and trace debugging. Currently working on connecting mixed content sources for real-time responses and summarization.",
      color: "from-green-500 to-teal-500",
      github: "https://github.com/AAFREEN-ZAHRA-KAZMI01/Langgraph_Learning.git",
      docs: "https://www.notion.so/From-Prompt-to-Production-A-Technical-Guide-to-LangChain-LangGraph-and-LangSmith-233e9f15cd7b80fd8a01ecf64e26f7b9?source=copy_link",
      demo: null,
      tech: ["Python", "LangGraph", "Agentic AI", "LLM"]
    },

  ];

  // Skills redesigned grid with subtle hover effects
  const skills = [
    { name: "Python & Data Science Libraries", level: 90, color: "bg-yellow-500", icon: Code },
    { name: "Machine Learning & Deep Learning", level: 85, color: "bg-blue-500", icon: Brain },
    { name: "Natural Language Processing (NLP)", level: 80, color: "bg-green-500", icon: FileText },
    { name: "Ethical Hacking & Cybersecurity", level: 70, color: "bg-purple-500", icon: Shield },
    { name: "Cloud Platforms (AWS)", level: 60, color: "bg-pink-500", icon: Cloud },
    { name: "Data Visualization & Reporting", level: 69, color: "bg-indigo-500", icon: BarChart },
    { name: "Generative AI & LLMs", level: 75, color: "bg-red-500", icon: Zap },
  ];

  // Experience array with updated new internship
  const experiences = [
    {
      title: "AI/Web Development/ Research Intern",
      company: "AI-Explain You Science",
      duration: "Oct 2025 - Present",
      description: "Selected for an internship focused on learning, Web Application development, and gaining hands-on knowledge in AI, technology, and innovation. Expected to excel in tasks and projects, contributing to career goals.",
    },
    {
      title: "AI/Agentic AI Intern",
      company: "Siber Koza (NASTP Rawalpindi)",
      duration: "July 2025 - Sep 2025",
      description: "Learned to build chatbots with UI for research and summarization using LangChain, LangGraph, and LangSmith. Explored integration of external tools like Gmail, WhatsApp, Notion, OneDrive, Tavity, and local file systems. Gained practical skills in agent workflows, prompt handling, and trace debugging. Worked on connecting mixed content sources for real-time responses and summarization.",
    },
    {
      title: "AI/ML Intern",
      company: "Developers Hub Corporation (Remote)",
      duration: "April 2025 - June 2025",
      description: "Worked on real-world machine learning and deep learning projects using Python, scikit-learn, pandas, and BERT. Applied NLP techniques for sentiment analysis, emotion detection, and fake news classification. Gained practical experience in time series forecasting, anomaly detection, and satellite image analysis. Key projects: Financial Anomaly Detection on time series data, Emotion Detection using BERT, Fake News Classification using Naive Bayes, Financial News Sentiment Analysis using NLP.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Fazaia Bilquis College of Education for Women, Rawalpindi (Affiliated with Air University)",
      duration: "Sep 2022 - July 2026",
      description: "Studying core computer science subjects including Programming, Data Structures, Databases, Machine Learning, Deep Learning, NLP, and Web Development. Currently in 7th semester with strong academic standing.",
    },
    {
      degree: "F.Sc. Pre-Medical",
      institution: "Fazaia Inter College, Nur Khan Rawalpindi",
      duration: "July 2020 - July 2022",
      description: "Completed intermediate studies in Biology, Chemistry, and Physics with strong foundational skills in scientific analysis, critical thinking, and discipline.",
    },
  ];

  // Certifications data
  const certifications = {
    technical: [
      { name: "Python Essential", driveLink: "https://drive.google.com/file/d/1SZ83HymtZJcLZ4carDdMmmLqd5v0auGC/view?usp=drive_link" },
      { name: "Ethical Hacking", driveLink: "https://drive.google.com/file/d/1QV6yBQ6_505uBqjfaJHtTyJj_sIkQ6eG/view?usp=drive_link" },
      { name: "Introduction to Modern AI", driveLink: "https://drive.google.com/file/d/1WT42Vd7bbLAz7iHZkD1GMp98WmBqCMvs/view?usp=drive_link" },
      { name: "Introduction to Modern AI with IBM", driveLink: "https://drive.google.com/file/d/1V4iu8GKVLgRLsuZtY6_ZV41IbZH0EXSs/view?usp=drive_link" },
      { name: "Endpoint Security", driveLink: "https://drive.google.com/file/d/1ppiASKwULqx6KQGob0q6h36yU8YV1Ys1/view?usp=drive_link" },
      { name: "Introduction to Cyber Security", driveLink: "https://drive.google.com/file/d/1TU3JNa3UfQR1VA6ky3Rl8eR0pyC4Ik1C/view?usp=drive_link" },
      { name: "Introduction to Cyber Threat Management", driveLink: "https://drive.google.com/file/d/1skAyvFC4snCRQAdvOMZH1Ov_FVOiDMjG/view?usp=drive_link" },
    ],
    softSkills: [
      { name: "Virtual Assistant", driveLink: "https://drive.google.com/file/d/1rfLxjOjsAKbN9Ke6kNQ8truUkpBCbJEB/view?usp=sharing" },
      { name: "Creative Writing", driveLink: "https://drive.google.com/file/d/18vwoifcC9JQ51RY59LoNjQVR9UWzlCv-/view?usp=sharing" },
      { name: "Spoken English", driveLink: "https://drive.google.com/file/d/1J_c01Ofa-hn9xLXI-Y0veTLHZsIZ6G8J/view?usp=sharing" },
      { name: "WordPress", driveLink: "https://drive.google.com/file/d/1faNYi2FL5KWY7pAxTIpkEK7F-afQ4Zbd/view?usp=sharing" },
    ],
    azureAI: {
      title: "Introduction to AI in Azure",
      chapters: [
        { name: "Introduction to AI concepts", driveLink: "https://drive.google.com/file/d/1uxbBqZ8k9Tu9vAgJn5b59H7Y-v51dDl8/view?usp=sharing" },
        { name: "Introduction to machine learning concepts", driveLink: "https://drive.google.com/file/d/16UwptLOWztCL6nxDp48cXwCJ9bFdJqir/view?usp=sharing" },
        { name: "Get started with machine learning in Azure", driveLink: "https://drive.google.com/file/d/1OXL6dxp2YSEF7ooM5kEzx5BEaw43JMDH/view?usp=sharing" },
        { name: "Introduction to generative AI concepts", driveLink: "https://drive.google.com/file/d/1rAuSeGm1BFhRUMwDZYqaYd7nDl-mqPd9/view?usp=sharing" },
        { name: "Get started with generative AI in Azure", driveLink: "https://drive.google.com/file/d/15xYRdRi37pzJAH_x2yHdFSSbHD0-WqTB/view?usp=sharing" },
        { name: "Introduction to natural language processing concepts", driveLink: "https://drive.google.com/file/d/1l1Bj6qHvdx58Hl80Pv2s0yTcbkURLkc9/view?usp=sharing" },
        { name: "Get started with natural language processing in Azure", driveLink: "https://drive.google.com/file/d/11JF3w_kcu-vtwu34JsOg5zdG3d9rwlAf/view?usp=sharing" },
        { name: "Get started with speech in Azure", driveLink: "https://drive.google.com/file/d/1qSh5LltvNFl5eKYW9Hme2b4VxuyRZNMV/view?usp=sharing" },
        { name: "Introduction to computer vision concepts", driveLink: "https://drive.google.com/file/d/1bdUn2Ouq4hxGbnnWfZd4velx2B-u09U2/view?usp=sharing" },
        { name: "Get started with computer vision in Azure", driveLink: "https://drive.google.com/file/d/1vDlXrjUcXo98I43JP4hPHFhwZOfvvtbp/view?usp=drive_link" },
        { name: "Introduction to AI-powered information extraction concepts", driveLink: "https://drive.google.com/file/d/1bUupe8VlnSuW6_w9fd_3ltji3YwqXLX0/view?usp=sharing" },
        { name: "Get started with AI-powered information extraction in Azure", driveLink: "https://drive.google.com/file/d/1XIIDpdDXUFLdtdK0XZjKoZFZp9BaneVS/view?usp=drive_link" },
      ],
      driveLink: "https://drive.google.com/drive/folders/14faZhCSVVF4FXEe2Q8mU0a3libqtkolv?usp=sharing",
    },
  };

  // Workshops data
  const workshops = [
    { name: "Artificial Intelligence for Everyone: Boost Your Career Prospects with AI", certificate: true, driveLink: "https://drive.google.com/file/d/1-3UK8FeOKbZpeAmRMACsI-TRh_CrUJg-/view?usp=sharing" },
    { name: "Personal and Professional Development Training", certificate: true, driveLink: "https://drive.google.com/file/d/1SOhSMOu3reiBbZ-MumJvFyro3XWP7Lsr/view?usp=sharing" },
    { name: "AI for Sustainable Future: Hackathon", certificate: true, driveLink: "https://drive.google.com/file/d/1IX-oHutk1xO8Dw7muvpLupFEl42231fU/view?usp=sharing" },
    { name: "Ethical Hacking", certificate: false, driveLink: null },
    { name: "Big Data", certificate: false, driveLink: null },

  ];



  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Cursor - Smaller and Faster */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out opacity-0" // Added initial opacity-0
      />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="backdrop-blur-lg bg-black/30 border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {formData.name}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "About",
                "Projects",
                "Skills",
                "Experience",
                "Education",
                "Certifications",
                "Workshops",
                "Contact",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group cursor-pointer text-white/70 hover:text-white transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-colors duration-300">
                    {item}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden backdrop-blur-lg bg-black/90 transition-all duration-500 ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {[
                "About",
                "Projects",
                "Skills",
                "Experience",
                "Education",
                "Certifications",
                "Workshops",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* About Section - Profile Picture Left Side with Animation */}
      <section id="about" className="relative min-h-screen flex items-center justify-center py-16 md:py-0"> {/* Added py-16 for mobile padding */}
        <div className="container mx-auto px-6 text-left z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Profile Picture - Left Side with Larger Size and Animation */}
            <motion.div
              className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl flex-shrink-0 cursor-pointer mx-auto md:mx-0 mb-8 md:mb-0" // Centered on mobile, added mb-8
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src="/img/profilepic.png"
                alt="Professional headshot of Aafreen Zahra Kazmi with gradient purple border and animated glow effect"
                className="w-full h-full object-cover"
                loading="lazy"
                width={288}  // example width (64 * 4.5)
                height={288} // example height (64 * 4.5)
              />
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                animate={{
                  borderColor: ["#a855f7", "#ec4899", "#f97316", "#a855f7"],
                  rotate: [0, 360],
                }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />
              {/* Animated Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.5)",
                    "0 0 40px rgba(236, 72, 153, 0.7)",
                    "0 0 60px rgba(249, 115, 22, 0.5)",
                    "0 0 20px rgba(168, 85, 247, 0.5)"
                  ]
                }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>

            {/* Text Content */}
            <div className="max-w-4xl text-center md:text-left"> {/* Centered text on mobile */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7.5xl font-black mb-4 md:mb-6 leading-tight md:leading-none" // Adjusted font size and line height for mobile
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  {formData.name}
                </span>
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-white/80" // Adjusted font size for mobile
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {formData.title}
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg md:text-2xl text-white/80 mb-8 md:mb-10 leading-relaxed" // Adjusted font size for mobile
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {formData.bio}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start items-center mb-8" // Centered buttons on mobile
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg" // Adjusted button size for mobile
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                {formData.cvDownloadLink && (
                  <a href={formData.cvDownloadLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"> {/* Added w-full for mobile */}
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg" // Adjusted button size for mobile
                    >
                      <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Download CV
                    </Button>
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="flex gap-6 justify-center md:justify-start" // Centered social icons on mobile
              >
                {formData.githubProfile && (
                  <a href={formData.githubProfile} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transform hover:scale-110 transition-all duration-300" // Reduced padding for mobile
                    >
                      <Github className="h-8 w-8 sm:h-10 sm:w-10" /> {/* Reduced icon size for mobile */}
                    </Button>
                  </a>
                )}
                {formData.linkedinProfile && (
                  <a href={formData.linkedinProfile} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transform hover:scale-110 transition-all duration-300" // Reduced padding for mobile
                    >
                      <Linkedin className="h-8 w-8 sm:h-10 sm:w-10" /> {/* Reduced icon size for mobile */}
                    </Button>
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My Projects
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Here are some of my recent works and projects, showcasing my skills in Data Science, AI, and more.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm text-purple-400 font-semibold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-white/70 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            className="text-purple-400 hover:text-white hover:bg-purple-500/20 p-0 h-auto font-semibold"
                          >
                            View Code
                            <Github className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            className="text-cyan-400 hover:text-white hover:bg-cyan-500/20 p-0 h-auto font-semibold"
                          >
                            Live Demo
                            <Play className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </a>

                      )}
                      {project.docs && (
                        <a href={project.docs} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            className="text-green-400 hover:text-white hover:bg-green-500/20 p-0 h-auto font-semibold"
                          >
                             Docs
                            <BookOpen className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </a>
                      )}

                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Grid Design */}
      <section id="skills" className="relative py-32 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Technologies and tools I work with, demonstrating my expertise and proficiency levels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 text-center hover:border-purple-400 shadow-md hover:shadow-purple-600/20 transition-all duration-300 rounded-xl h-full">
                  <CardContent className="p-0 flex flex-col items-center h-full">
                    {skill.icon && (
                      <motion.div
                        className={`mb-6 p-5 rounded-full ${skill.color} bg-opacity-25 group-hover:bg-opacity-50 transition-all duration-300`}
                        whileHover={{ scale: 1.15, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <skill.icon className="h-12 w-12 text-white" />
                      </motion.div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 flex-grow">
                      {skill.name}
                    </h3>
                    <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color} bg-opacity-80`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <p className="text-white/70 text-sm">{skill.level}% Proficiency</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - New Design Without Vertical Line */}
      <section id="experience" className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My Experience
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional journey and key contributions across different organizations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/20 hover:border-yellow-400 shadow-xl p-8 h-full transform hover:scale-[1.02] transition-all duration-300 rounded-xl group">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="text-white w-8 h-8" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{exp.title}</h3>
                        <p className="text-xl text-white/70 mb-2">{exp.company}</p>
                        <p className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full inline-block">{exp.duration}</p>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg flex-grow">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My Education
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Academic background and learning journey.
            </motion.p>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 hover:border-pink-400 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">{edu.degree}</h3>
                        <p className="text-xl text-white/70 mb-2">{edu.institution}</p>
                        <p className="text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full inline-block">{edu.duration}</p>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-lg">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Certifications
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Validated skills and knowledge from various platforms.
            </motion.p>
          </div>

          <div className="space-y-8">
            {/* Technical Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Award className="mr-3 h-8 w-8 text-teal-400" />
                    Technical Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.technical.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="text-white/80">{cert.name}</span>
                        {cert.driveLink && (
                          <a href={cert.driveLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className="text-teal-400 hover:text-white hover:bg-teal-500/20 p-2 h-auto text-sm">
                              View <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Award className="mr-3 h-8 w-8 text-teal-400" />
                    Soft Skills & Other Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.softSkills.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="text-white/80">{cert.name}</span>
                        {cert.driveLink && (
                          <a href={cert.driveLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className="text-teal-400 hover:text-white hover:bg-teal-500/20 p-2 h-auto text-sm">
                              View <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Azure AI Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Award className="mr-3 h-8 w-8 text-teal-400" />
                    {certifications.azureAI.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {certifications.azureAI.chapters.map((chapter, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <span className="text-white/80 text-sm">{chapter.name}</span>
                        {chapter.driveLink && (
                          <a href={chapter.driveLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className="text-teal-400 hover:text-white hover:bg-teal-500/20 p-2 h-auto text-sm">
                              View <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  {certifications.azureAI.driveLink && (
                    <div className="text-center">
                      <a href={certifications.azureAI.driveLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white border-0 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          View All Azure AI Certificates
                        </Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="relative py-32 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Workshops Attended
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Continuous learning through engaging workshops and training programs.
            </motion.p>
          </div>

          <div className="space-y-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6 hover:border-orange-400 transition-all duration-300 group">
                  <CardContent className="p-0 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 flex-grow pr-4">{workshop.name}</h3>
                    <div className="flex items-center space-x-4">
                      {workshop.certificate ? (
                        <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">Certificate Available</span>
                      ) : (
                        <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">No Certificate</span>
                      )}
                      {workshop.driveLink && (
                        <a href={workshop.driveLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" className="text-orange-400 hover:text-white hover:bg-orange-500/20 p-2 h-auto font-semibold">
                            View <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interested in collaborating? Let&apos;s discuss your project or connect for opportunities!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 hover:border-green-400 transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold mb-8 text-white">Send a Message</h3>
                  <form className="space-y-6">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-14 text-lg rounded-xl focus:border-green-400 transition-all duration-300"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 h-14 text-lg rounded-xl focus:border-green-400 transition-all duration-300"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 resize-none text-lg rounded-xl focus:border-green-400 transition-all duration-300"
                    />
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-14 text-lg rounded-xl transform hover:scale-105 transition-all duration-300">
                      <Mail className="mr-2 h-6 w-6" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>

                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <Mail className="h-8 w-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white/60 mb-1">Email</div>
                    <div className="text-white text-lg">{formData.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <Star className="h-8 w-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white/60 mb-1">Location</div>
                    <div className="text-white text-lg">{formData.location}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <Heart className="h-8 w-8 text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-white/60 mb-1">Status</div>
                    <div className="text-white text-lg">Available for projects</div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {formData.githubProfile && (
                      <a href={formData.githubProfile} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          className="text-white/70 hover:text-white hover:bg-white/10 rounded-xl p-4 transform hover:scale-110 transition-all duration-300"
                        >
                          <Github className="h-16 w-16" />
                        </Button>
                      </a>
                    )}
                    {formData.linkedinProfile && (
                      <a href={formData.linkedinProfile} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          className="text-white/70 hover:text-white hover:bg-white/10 rounded-xl p-4 transform hover:scale-110 transition-all duration-300"
                        >
                          <Linkedin className="h-16 w-16" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {formData.name}
          </div>
          <p className="text-white/60 mb-8 text-lg">{formData.title}</p>
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm">© 2025 {formData.name}. All rights reserved. Built with passion and dedication.</p>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          cursor: none;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #000;
        }
      `}</style>
    </div>
  );
}
