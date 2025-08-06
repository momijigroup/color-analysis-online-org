import { Palette, Droplet, Layers, Star, Info, Lightbulb, Sparkles, Eye } from 'lucide-react'

const items = [
  {
    icon: <Palette className="w-7 h-7 text-brand-plum" />, 
    title: 'Color Season Classification',
    description: 'Identification of your specific seasonal color category from the 12 professional color seasons'
  },
  {
    icon: <Droplet className="w-7 h-7 text-brand-plum" />, 
    title: 'Undertone Analysis',
    description: 'Comprehensive assessment of warm, cool, or neutral undertones with detailed explanation'
  },
  {
    icon: <Layers className="w-7 h-7 text-brand-plum" />, 
    title: 'Contrast Level Assessment',
    description: 'Determination of your natural contrast level and optimal color intensity recommendations'
  },
  {
    icon: <Star className="w-7 h-7 text-brand-plum" />, 
    title: 'Curated Color Palette',
    description: 'Professional color collection specifically selected based on your individual characteristics'
  },
  {
    icon: <Info className="w-7 h-7 text-brand-plum" />, 
    title: 'Scientific Color Rationale',
    description: 'Detailed explanations of color theory principles supporting your specific recommendations'
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-brand-plum" />, 
    title: 'Implementation Guidelines',
    description: 'Professional guidance for practical application of your color palette in daily styling'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-brand-plum" />, 
    title: 'Customized Style Recommendations',
    description: 'Tailored styling suggestions based on your color profile and individual preferences'
  },
  {
    icon: <Eye className="w-7 h-7 text-brand-plum" />, 
    title: 'Visual Color Examples',
    description: 'Comprehensive visual demonstrations of your recommended colors in practical applications'
  },
]

const WhatWillYouGetSection = () => (
  <section
    className="py-20"
    style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #FFE6D1 0%, #F8F3F9 100%)',
    }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Comprehensive Analysis Components
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="mb-4 flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-peachLight">
                {item.icon}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-brand-plum">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhatWillYouGetSection