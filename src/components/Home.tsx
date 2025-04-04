import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Users, Calendar, Mailbox as Toolbox, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-purple-600">AspirHer</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering women in technology through community, mentorship, and resources.
          Join us in creating a more inclusive tech industry.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Link
          to="/discussions"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center mb-4">
            <MessageCircle className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-semibold ml-3">Community Discussions</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Connect with like-minded professionals, share experiences, and learn from others in the tech industry.
          </p>
          <span className="text-purple-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
            Join the conversation <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </Link>

        <Link
          to="/mentorship"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-semibold ml-3">Mentorship</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Get guidance from experienced professionals who understand your journey and can help you grow.
          </p>
          <span className="text-purple-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
            Find a mentor <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </Link>

        <Link
          to="/events"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center mb-4">
            <Calendar className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-semibold ml-3">Events</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Attend workshops, conferences, and networking events designed to help you advance in your tech career.
          </p>
          <span className="text-purple-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
            Browse events <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </Link>

        <Link
          to="/toolkits"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
        >
          <div className="flex items-center mb-4">
            <Toolbox className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-semibold ml-3">Career Toolkits</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Access curated resources, tools, and guides for different tech career paths.
          </p>
          <span className="text-purple-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
            Explore toolkits <ArrowRight className="w-5 h-5 ml-2" />
          </span>
        </Link>
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
            <div className="text-gray-600">Community Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Expert Mentors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-gray-600">Monthly Events</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-purple-600 text-white rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8">
          Join AspirHer today and connect with a community that supports your growth in tech.
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;