import { Palette, Sparkles, Wand2, Heart } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Smart AI Beauty Analysis',
    description: 'Our friendly AI carefully analyzes your gorgeous, unique features to find the colors that make you look absolutely stunning.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Your Perfect Color Palette',
    description: 'Get a beautiful, personalized color collection based on your lovely skin tone, hair color, and gorgeous eyes.',
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'Beautiful Style Guidance',
    description: 'Discover amazing recommendations for makeup, outfits, and accessories that enhance your natural beauty.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Inspiring Style Resources',
    description: 'Beautiful visual guides and styling tips to help you feel confident and radiant in your perfect colors.',
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
            Create Your <span className="gradient-text">Beautiful Color Story</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine smart AI technology with color expertise to help you discover the colors that celebrate your unique beauty and make you feel amazing.
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