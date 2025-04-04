import React, { useState } from 'react';
import { 
  Briefcase, 
  Palette, 
  Database, 
  Terminal, 
  LineChart,
  ExternalLink,
  BookOpen,
  PenTool as Tool,
  GraduationCap,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Send,
  ArrowLeft
} from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
}

interface Discussion {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  type: 'tool' | 'learning' | 'community';
  discussions: Discussion[];
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  pricing?: string;
}

interface Toolkit {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  resources: {
    tools: Resource[];
    learning: Resource[];
    community: Resource[];
  };
}

const toolkits: Toolkit[] = [
  {
    id: 'product-manager',
    title: '🛠️ Product Manager Toolkit',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Essential resources and tools for aspiring Product Managers in tech.',
    resources: {
      tools: [
        {
          id: 1,
          title: 'Notion',
          description: 'All-in-one workspace for product documentation and roadmaps',
          url: 'https://notion.so',
          type: 'tool',
          longDescription: "Notion is a versatile workspace that combines notes, wikis, and project management. It is particularly powerful for product managers who need to maintain product requirements, roadmaps, and team documentation in one place.",
          features: [
            'Customizable templates for product roadmaps',
            'Real-time collaboration',
            'Database functionality for feature tracking',
            'Integration with other tools like Jira and Slack'
          ],
          useCases: [
            'Product requirement documentation',
            'Sprint planning and tracking',
            'Team wikis and knowledge bases',
            'Customer feedback management'
          ],
          pricing: 'Free for personal use, Team plan starts at $8/user/month',
          discussions: [
            {
              id: 1,
              author: "Priya Sharma",
              content: "I've been using Notion for sprint planning and documentation. The templates feature saved me hours of setup time. I particularly love how I can create linked databases for features, bugs, and customer feedback.",
              likes: 45,
              comments: [
                {
                  id: 1,
                  author: "Neha Singh",
                  content: "Could you share which templates worked best for you? I'm just getting started with Notion for my product team.",
                  timestamp: "1 hour ago",
                  likes: 12
                },
                {
                  id: 2,
                  author: "Priya Sharma",
                  content: "I use the Product Wiki template as a base and customized it for our needs. Happy to share my setup!",
                  timestamp: "30 minutes ago",
                  likes: 8
                }
              ],
              timestamp: "2 hours ago"
            }
          ]
        }
      ],
      learning: [],
      community: []
    }
  },
  {
    id: 'ux-designer',
    title: '🎨 UX Designer Toolkit',
    icon: <Palette className="w-6 h-6" />,
    description: 'Essential tools and resources for UX Designers breaking into tech.',
    resources: {
      tools: [
        {
          id: 3,
          title: 'Figma',
          description: 'Professional-grade UI design tool with real-time collaboration',
          url: 'https://figma.com',
          type: 'tool',
          longDescription: "Figma is a cloud-based design tool that enables teams to collaborate on interface design in real-time. It has become the industry standard for UI/UX design, offering powerful features for both design and prototyping.",
          features: [
            'Real-time collaboration',
            'Component libraries',
            'Auto-layout',
            'Interactive prototyping',
            'Design systems support'
          ],
          useCases: [
            'UI/UX design',
            'Wireframing',
            'Design system creation',
            'Interactive prototypes',
            'Design handoff to developers'
          ],
          pricing: 'Free for individuals, Professional plan starts at $12/user/month',
          discussions: [
            {
              id: 4,
              author: "Maya Patel",
              content: "Switching from Adobe XD to Figma was the best decision for our team. The collaboration features are unmatched, and the component system has made our design process so much more efficient.",
              likes: 56,
              comments: [
                {
                  id: 5,
                  author: "Sarah Chen",
                  content: "How long did it take your team to fully transition? We're considering making the switch.",
                  timestamp: "3 hours ago",
                  likes: 8
                },
                {
                  id: 6,
                  author: "Maya Patel",
                  content: "About 2 weeks to move our design system over, but the productivity gains were worth it!",
                  timestamp: "2 hours ago",
                  likes: 15
                }
              ],
              timestamp: "5 hours ago"
            }
          ]
        }
      ],
      learning: [],
      community: []
    }
  },
  {
    id: 'data-analyst',
    title: '📊 Data Analyst Toolkit',
    icon: <Database className="w-6 h-6" />,
    description: 'Resources and tools for aspiring Data Analysts.',
    resources: {
      tools: [
        {
          id: 5,
          title: 'Tableau',
          description: 'Industry-leading data visualization and business intelligence tool',
          url: 'https://tableau.com',
          type: 'tool',
          longDescription: "Tableau is a powerful data visualization tool that helps analysts transform raw data into actionable insights through interactive dashboards and reports.",
          features: [
            'Drag-and-drop interface',
            'Real-time data analysis',
            'Advanced visualizations',
            'Data blending capabilities',
            'Mobile-friendly dashboards'
          ],
          useCases: [
            'Business intelligence reporting',
            'Sales analytics',
            'Customer behavior analysis',
            'Performance monitoring',
            'Market research visualization'
          ],
          pricing: 'Tableau Creator starts at $70/user/month',
          discussions: [
            {
              id: 7,
              author: "Deepa Krishnan",
              content: "After 3 years of using Tableau, I still discover new features. Recently started using parameter actions for interactive filtering, and it's been a game-changer for our executive dashboards.",
              likes: 42,
              comments: [
                {
                  id: 8,
                  author: "Lisa Zhang",
                  content: "Could you share some tips on optimizing dashboard performance? Mine tend to get slow with large datasets.",
                  timestamp: "4 hours ago",
                  likes: 12
                }
              ],
              timestamp: "1 day ago"
            }
          ]
        }
      ],
      learning: [],
      community: []
    }
  },
  {
    id: 'devops-engineer',
    title: '👩‍💻 DevOps Toolkit',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Essential DevOps tools and resources for beginners.',
    resources: {
      tools: [
        {
          id: 7,
          title: 'Docker',
          description: 'Container platform for building, shipping, and running applications',
          url: 'https://docker.com',
          type: 'tool',
          longDescription: "Docker is a platform for developing, shipping, and running applications in containers. It provides a consistent environment across different stages of development and deployment.",
          features: [
            'Container orchestration',
            'Version control for containers',
            'Multi-container applications',
            'Built-in security features',
            'Docker Hub integration'
          ],
          useCases: [
            'Application containerization',
            'Microservices architecture',
            'Development environments',
            'Continuous integration',
            'Cloud deployment'
          ],
          pricing: 'Free for personal use, Pro plan starts at $5/month',
          discussions: [
            {
              id: 9,
              author: "Riya Kapoor",
              content: "Started my DevOps journey with Docker and never looked back. Pro tip: Start with docker-compose for local development before diving into Kubernetes.",
              likes: 67,
              comments: [
                {
                  id: 10,
                  author: "Emma Wilson",
                  content: "Any recommended resources for learning Docker from scratch?",
                  timestamp: "6 hours ago",
                  likes: 15
                }
              ],
              timestamp: "2 days ago"
            }
          ]
        }
      ],
      learning: [],
      community: []
    }
  },
  {
    id: 'digital-marketer',
    title: '📈 SEO/Digital Marketer Toolkit',
    icon: <LineChart className="w-6 h-6" />,
    description: 'Tools and resources for digital marketing professionals.',
    resources: {
      tools: [
        {
          id: 9,
          title: 'HubSpot',
          description: 'All-in-one marketing, sales, and CRM platform',
          url: 'https://hubspot.com',
          type: 'tool',
          longDescription: "HubSpot is a comprehensive inbound marketing, sales, and CRM platform that helps businesses attract visitors, convert leads, and close customers.",
          features: [
            'Email marketing automation',
            'Content management system',
            'SEO tools',
            'Social media management',
            'Analytics and reporting'
          ],
          useCases: [
            'Lead generation',
            'Content marketing',
            'Marketing automation',
            'Customer relationship management',
            'Sales pipeline management'
          ],
          pricing: 'Free tools available, Marketing Hub starts at $45/month',
          discussions: [
            {
              id: 11,
              author: "Aisha Khan",
              content: "HubSpot's free tools are perfect for startups. We started with the free CRM and gradually upgraded as our needs grew. The automation workflows have saved us countless hours.",
              likes: 48,
              comments: [
                {
                  id: 12,
                  author: "Maria Garcia",
                  content: "How long did it take to set up your first automation workflow?",
                  timestamp: "1 day ago",
                  likes: 9
                }
              ],
              timestamp: "3 days ago"
            }
          ]
        }
      ],
      learning: [],
      community: []
    }
  }
];

const Toolkits: React.FC = () => {
  const [selectedToolkit, setSelectedToolkit] = useState<Toolkit>(toolkits[0]);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [newComment, setNewComment] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [showResourceDetails, setShowResourceDetails] = useState(false);

  const handleLike = (discussionId: number) => {
    if (!likedPosts.includes(discussionId)) {
      setLikedPosts([...likedPosts, discussionId]);
    } else {
      setLikedPosts(likedPosts.filter(id => id !== discussionId));
    }
  };

  const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-gray-800">{resource.title}</h4>
          <p className="text-sm text-gray-600">{resource.description}</p>
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-700"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setSelectedResource(resource);
            setShowResourceDetails(true);
          }}
          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
        >
          View Details
        </button>
        <button
          onClick={() => setSelectedResource(resource)}
          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
        >
          View Discussions ({resource.discussions.length})
        </button>
      </div>
    </div>
  );

  if (showResourceDetails && selectedResource) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setShowResourceDetails(false)}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Toolkit
        </button>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{selectedResource.title}</h2>
              <p className="text-gray-600 mt-2">{selectedResource.description}</p>
            </div>
            <a
              href={selectedResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Visit Website
            </a>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
              <p className="text-gray-600">{selectedResource.longDescription}</p>
            </div>

            {selectedResource.features && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedResource.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedResource.useCases && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Use Cases</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedResource.useCases.map((useCase, index) => (
                    <li key={index} className="text-gray-600">{useCase}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedResource.pricing && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pricing</h3>
                <p className="text-gray-600">{selectedResource.pricing}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (selectedResource) {
    return (
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedResource(null)}
          className="flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Toolkit
        </button>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{selectedResource.title}</h3>
              <p className="text-gray-600">{selectedResource.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your experience with this tool..."
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              rows={3}
            />
            <button 
              className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Share Experience
            </button>
          </div>

          <div className="space-y-6">
            {selectedResource.discussions.map((discussion) => (
              <div key={discussion.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-800">{discussion.author}</span>
                  <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                </div>
                <p className="text-gray-600 mb-4">{discussion.content}</p>
                
                <div className="flex items-center space-x-4 text-gray-500">
                  <button 
                    className={`flex items-center space-x-2 ${
                      likedPosts.includes(discussion.id) ? 'text-purple-600' : 'hover:text-purple-600'
                    }`}
                    onClick={() => handleLike(discussion.id)}
                  >
                    <Heart className={`w-5 h-5 ${likedPosts.includes(discussion.id) ? 'fill-current' : ''}`} />
                    <span>{discussion.likes + (likedPosts.includes(discussion.id) ? 1 : 0)}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-purple-600">
                    <MessageCircle className="w-5 h-5" />
                    <span>{discussion.comments.length}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-purple-600">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>

                {discussion.comments.length > 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-200 space-y-3">
                    {discussion.comments.map((comment) => (
                      <div key={comment.id} className="bg-white rounded-lg p-3">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-800">{comment.author}</span>
                          <span className="text-sm text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-600">{comment.content}</p>
                        <div className="flex items-center mt-2 text-gray-500">
                          <button 
                            className="flex items-center space-x-2 hover:text-purple-600"
                            onClick={() => handleLike(comment.id)}
                          >
                            <Heart className="w-4 h-4" />
                            <span>{comment.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Career Toolkits</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          {toolkits.map((toolkit) => (
            <button
              key={toolkit.id}
              onClick={() => setSelectedToolkit(toolkit)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                selectedToolkit.id === toolkit.id
                  ? 'bg-purple-100 text-purple-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                {toolkit.icon}
                <span className="font-medium">{toolkit.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedToolkit.title}</h3>
            <p className="text-gray-600 mb-6">{selectedToolkit.description}</p>

            {/* Tools Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                <Tool className="w-5 h-5 mr-2" />
                Essential Tools
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {selectedToolkit.resources.tools.map((tool) => (
                  <ResourceCard key={tool.id} resource={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkits;