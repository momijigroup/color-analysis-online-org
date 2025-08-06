import { Palette, Sparkles, Wand2, Heart } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Advanced AI Analysis',
    description: 'Sophisticated AI technology analyzes your individual characteristics to determine optimal color recommendations with precision.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Personalized Color Palette',
    description: 'Receive a comprehensive color collection tailored to your specific skin tone, hair color, and eye characteristics.',
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'Professional Style Guidance',
    description: 'Access expert recommendations for makeup, wardrobe, and accessories based on professional color theory.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Comprehensive Style Resources',
    description: 'Detailed visual guides and professional styling recommendations for effective color palette implementation.',
  },
]

const FeaturesSection = () => {
  return (
    <section
      className="py-20"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #FFE6D1 0%, #FFFFFF 80%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Professional <span className="gradient-text">Color Assessment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology combined with professional color expertise provides comprehensive personal color analysis and recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-peachLight rounded-lg flex items-center justify-center text-brand-plum mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection