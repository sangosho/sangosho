import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { FaGithub, FaWaveSquare, FaWater, FaFish, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3264&q=80"
        >
          <source 
            src="https://videos.pexels.com/video-files/2863422/2863422-uhd_2560_1440_24fps.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Product Section */}
        <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-32 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto w-full bg-black/60 p-12 rounded-2xl border border-white/10 shadow-xl">
            <div className="mb-16">
              <SplitText 
                as="h1"
                className="text-6xl md:text-7xl tracking-tight font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5F57] via-[#2D8EFF] to-[#28CA42]"
              >
                Sangosho
              </SplitText>
              <SplitText 
                as="h2"
                className="text-xl md:text-2xl tracking-tight text-gray-300 mb-12"
              >
                AI for protecting underwater ecosystems
              </SplitText>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {[
                {
                  icon: <FaWaveSquare className="w-10 h-10 text-[#FF5F57]" />,
                  title: "Real-time Monitoring",
                  description: "24/7 underwater sensor analysis",
                  bg: "bg-[#FF5F57]/20 backdrop-blur-sm",
                  border: "border-[#FF5F57]/30",
                  glow: "hover:shadow-[0_0_30px_rgba(255,95,87,0.5)]"
                },
                {
                  icon: <FaFish className="w-10 h-10 text-[#28CA42]" />,
                  title: "Species Protection",
                  description: "Endangered species tracking",
                  bg: "bg-[#28CA42]/20 backdrop-blur-sm",
                  border: "border-[#28CA42]/30",
                  glow: "hover:shadow-[0_0_30px_rgba(40,202,66,0.5)]"
                },
                {
                  icon: <FaChartLine className="w-10 h-10 text-[#2D8EFF]" />,
                  title: "Predictive Analytics",
                  description: "Environmental threat forecasting",
                  bg: "bg-[#2D8EFF]/20 backdrop-blur-sm",
                  border: "border-[#2D8EFF]/30",
                  glow: "hover:shadow-[0_0_30px_rgba(45,142,255,0.5)]"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`p-8 rounded-xl border ${item.border} ${item.bg} ${item.glow} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-lg`}
                >
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 p-1">
                    {item.icon}
                  </div>
                  <SplitText as="h3" className="text-xl font-semibold mb-2">
                    {item.title}
                  </SplitText>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="bg-black/60 p-12 rounded-2xl border border-white/10 shadow-xl text-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-gradient-to-br from-[#2D8EFF]/30 to-[#2D8EFF]/10 backdrop-blur-sm">
                <FaWater className="w-12 h-12 text-[#2D8EFF]" />
              </div>
              <SplitText 
                as="h2"
                className="text-4xl font-bold mb-8"
              >
                Our Vision
              </SplitText>
              <SplitText 
                as="p"
                className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto"
              >
                We're building AI systems that autonomously monitor and protect marine biodiversity.
                Our goal is to safeguard 1 million square kilometers of ocean ecosystems by 2030.
              </SplitText>
              <div className="mt-12">
                <Counter />
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section className="py-32 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 w-full">
            <div className="bg-black/60 p-12 rounded-2xl border border-white/10 shadow-xl text-center">
              <SplitText 
                as="h2"
                className="text-4xl font-bold mb-6"
              >
                Join the Mission
              </SplitText>
              <p className="text-gray-300 mb-8 text-xl">
                Be among the first to deploy our conservation AI.
              </p>
              <div className="max-w-md mx-auto">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 py-12 mt-4 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-medium">Sangosho</p>
              <p className="text-gray-400 text-sm">Protecting our oceans with AI</p>
            </div>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                <Link href="https://github.com/sangosho/sangosho" target="_blank">
                  <FaGithub className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Sangosho. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}