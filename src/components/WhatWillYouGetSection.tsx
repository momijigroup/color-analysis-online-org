import { Palette, Droplet, Layers, Star, Info, Lightbulb, Sparkles, Eye } from 'lucide-react'

const items = [
  {
    icon: <Palette className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Beautiful Color Season',
    description: 'Discover which of the 12 gorgeous color seasons celebrates your unique beauty'
  },
  {
    icon: <Droplet className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Lovely Undertones',
    description: 'Learn whether you have warm, cool, or neutral undertones and what that means for you'
  },
  {
    icon: <Layers className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Perfect Contrast Level',
    description: 'Find out your natural contrast and the color intensity that makes you glow'
  },
  {
    icon: <Star className="w-7 h-7 text-brand-plum" />, 
    title: 'Your Dream Color Palette',
    description: 'A gorgeous collection of colors handpicked to make you look absolutely radiant'
  },
  {
    icon: <Info className="w-7 h-7 text-brand-plum" />, 
    title: 'Why These Colors Love You',
    description: 'Easy-to-understand explanations about why these specific colors are perfect for you'
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-brand-plum" />, 
    title: 'Simple Style Tips',
    description: 'Friendly, easy-to-follow guidance on how to use your colors in everyday life'
  },
  {
    icon: <Sparkles className="w-7 h-7 text-brand-plum" />, 
    title: 'Personalized Style Ideas',
    description: 'Beautiful styling suggestions created just for you and your color personality'
  },
  {
    icon: <Eye className="w-7 h-7 text-brand-plum" />, 
    title: 'See Your Colors in Action',
    description: 'Visual examples showing how amazing these colors will look on you'
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
          Everything You'll Love About Your Results
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