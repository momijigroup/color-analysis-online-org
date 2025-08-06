import Image from 'next/image'
import { Eye, BrainCircuit, Palette } from 'lucide-react'

const technologies = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Smart Beauty Recognition',
    description: 'Our AI lovingly analyzes your gorgeous skin tone, natural contrast, and beautiful brightness',
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'Intelligent Color Matching',
    description: 'Trained on thousands of real women to understand what colors make each person truly shine',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Expert Color Wisdom',
    description: 'Based on trusted color theory from professional stylists who know what makes women look amazing',
  },
]

const TechnologySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-brand-peachLight/50 to-transparent"></div>
            <div className="p-2 bg-white rounded-2xl shadow-lg hover-scale">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-peachLight to-white flex items-center justify-center">
                <Image 
                  src="/lovable-uploads/ai.png" 
                  alt="AI technology analyzing facial features"
                  className="object-contain w-full h-full"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="gradient-text">Smart AI Technology</span> That <span className="gradient-text">Celebrates Your Beauty</span>
              </h2>
              <p className="text-lg text-gray-600">
                We've created a caring AI that understands beauty in all its forms, combining smart technology with color expertise to help you discover the colors that make you absolutely radiant.
              </p>
            </div>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-peachLight rounded-lg flex items-center justify-center text-brand-plum flex-shrink-0">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection