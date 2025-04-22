import React from 'react';

const PricingCard = ({ 
  tier, 
  price, 
  billing, 
  description, 
  features, 
  buttonText, 
  popular = false, 
  gradient 
}) => (
  <div className={`relative flex flex-col rounded-2xl border ${popular ? 'border-blue-500/50' : 'border-slate-800/30'} backdrop-blur-md overflow-hidden`}>
    {popular && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
        Most Popular
      </div>
    )}
    <div className="absolute inset-0 z-0">
      <div className={`h-full w-full ${gradient}`} />
    </div>
    <div className="relative z-10 p-6 flex flex-col h-full">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{tier}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="ml-1 text-sm text-slate-300">/{billing}</span>
        </div>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
      
      <ul className="mb-8 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="h-5 w-5 text-blue-400 mr-2 mt-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="text-sm text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 px-4 rounded-lg font-medium ${
          popular 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
        } transition-colors duration-200`}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default function PricingPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Navbar would go here */}
      
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Creative Journey</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Select the plan that works best for your creative needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              tier="Basic"
              price="9.99"
              billing="month"
              description="Perfect for beginners exploring AI image generation"
              features={[
                "100 image generations per month",
                "Standard resolution outputs",
                "5 style presets",
                "Community support",
                "Basic editing tools"
              ]}
              buttonText="Get Started"
              gradient="bg-gradient-to-br from-blue-900/30 to-slate-900/70"
            />
            
            <PricingCard 
              tier="Gold"
              price="19.99"
              billing="month"
              description="For creators who need more power and flexibility"
              features={[
                "500 image generations per month",
                "HD resolution outputs",
                "25 style presets",
                "Priority rendering",
                "Advanced editing tools",
                "Email support",
                "Commercial usage rights"
              ]}
              buttonText="Get Gold"
              popular={true}
              gradient="bg-gradient-to-br from-blue-600/30 via-indigo-700/20 to-slate-900/70"
            />
            
            <PricingCard 
              tier="Diamond"
              price="39.99"
              billing="month"
              description="Maximum creative power for professionals"
              features={[
                "Unlimited image generations",
                "Ultra HD resolution outputs",
                "All style presets + custom styles",
                "Fastest rendering priority",
                "Complete editing suite",
                "Dedicated support",
                "API access",
                "Full commercial rights",
                "Brand voice customization"
              ]}
              buttonText="Get Diamond"
              gradient="bg-gradient-to-br from-purple-600/30 via-blue-700/20 to-slate-900/70"
            />
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm">
              All plans include our core platform features. Need a custom solution? 
              <a href="/contact" className="text-blue-400 hover:text-blue-300 ml-1">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}