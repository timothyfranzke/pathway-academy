import React from 'react';
import { GraduationCap, Users, Heart, BookOpen } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-16 h-16 mb-4 rounded-full bg-indigo-50 flex items-center justify-center">
      <Icon className="w-8 h-8 text-indigo-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "K-6 Education",
      description: "Comprehensive elementary education focused on building strong academic foundations"
    },
    {
      icon: Heart,
      title: "Personalized Learning",
      description: "Tailored instruction that adapts to each student's unique learning style and pace"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Intimate learning environment ensuring individual attention and engagement"
    },
    {
      icon: BookOpen,
      title: "Faith Based",
      description: "Christ-centered education integrating biblical principles with academic excellence"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;