import React from 'react';
import { ChevronRight } from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = [
    {
      name: 'Home',
      path: '/',
      children: [
        {
          name: 'Discussions',
          path: '/discussions',
          description: 'Community discussions and knowledge sharing',
          features: [
            'Create new discussions',
            'Comment on existing topics',
            'Like and share posts',
            'Filter discussions by topics'
          ]
        },
        {
          name: 'Mentorship',
          path: '/mentorship',
          description: 'Connect with experienced mentors',
          features: [
            'Browse mentor profiles',
            'Schedule mentorship sessions',
            'View mentor availability',
            'Share career goals and expectations'
          ]
        },
        {
          name: 'Events',
          path: '/events',
          description: 'Upcoming tech events and workshops',
          features: [
            'Browse upcoming events',
            'Filter by online/offline events',
            'Register for events',
            'View event details and schedules'
          ]
        },
        {
          name: 'Toolkits',
          path: '/toolkits',
          description: 'Career-specific resources and tools',
          children: [
            {
              name: 'Product Manager Toolkit',
              features: [
                'Product management tools',
                'Roadmap templates',
                'Interview preparation resources',
                'Community discussions'
              ]
            },
            {
              name: 'UX Designer Toolkit',
              features: [
                'Design tools',
                'Portfolio platforms',
                'Client-finding resources',
                'Design community forums'
              ]
            },
            {
              name: 'Data Analyst Toolkit',
              features: [
                'SQL resources',
                'Data visualization tools',
                'Free datasets',
                'Resume templates'
              ]
            },
            {
              name: 'DevOps Toolkit',
              features: [
                'Linux basics',
                'Docker resources',
                'GitHub guides',
                'Tech bootcamp recommendations'
              ]
            },
            {
              name: 'SEO/Digital Marketer Toolkit',
              features: [
                'Google certifications',
                'Marketing platforms',
                'Freelance opportunities',
                'Analytics tools'
              ]
            }
          ]
        }
      ]
    }
  ];

  const renderFeatures = (features: string[]) => (
    <ul className="ml-6 mt-2 space-y-1">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 text-sm flex items-center">
          <ChevronRight className="w-4 h-4 mr-1" />
          {feature}
        </li>
      ))}
    </ul>
  );

  const renderSiteSection = (section: any, level = 0) => (
    <div key={section.name} className={`ml-${level * 4} mb-6`}>
      <div className="flex items-baseline">
        <h3 className={`${level === 0 ? 'text-2xl' : 'text-xl'} font-bold text-gray-800`}>
          {section.name}
        </h3>
        {section.path && (
          <span className="ml-3 text-sm text-gray-500">
            Path: {section.path}
          </span>
        )}
      </div>
      
      {section.description && (
        <p className="text-gray-600 mt-2">{section.description}</p>
      )}
      
      {section.features && renderFeatures(section.features)}
      
      {section.children && (
        <div className="mt-4 space-y-4">
          {section.children.map((child: any) => renderSiteSection(child, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Site Map</h2>
        {siteStructure.map(section => renderSiteSection(section))}
      </div>
    </div>
  );
};

export default Sitemap;