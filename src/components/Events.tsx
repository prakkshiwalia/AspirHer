import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'online' | 'offline';
  image: string;
  attendees: number;
  organizer: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Women in Tech Conference 2024",
    description: "Join us for a day of inspiring talks, networking, and workshops focused on women in technology.",
    date: "2024-04-15",
    time: "10:00 AM",
    location: "Bangalore",
    type: "offline",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 250,
    organizer: "TechWomen India"
  },
  {
    id: 2,
    title: "Virtual Leadership Workshop",
    description: "Learn essential leadership skills from top women executives in the tech industry.",
    date: "2024-04-20",
    time: "2:00 PM",
    location: "Zoom",
    type: "online",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    attendees: 100,
    organizer: "Women Leaders Network"
  }
];

interface RegistrationFormProps {
  event: Event;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    dietaryRequirements: '',
    specialRequirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Registration submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold">Register for {event.title}</h3>
            <p className="text-gray-600 mt-1">
              {event.date} at {event.time}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {event.type === 'offline' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Requirements
              </label>
              <input
                type="text"
                value={formData.dietaryRequirements}
                onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                placeholder="Vegetarian, Vegan, etc."
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requirements
            </label>
            <textarea
              value={formData.specialRequirements}
              onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
              rows={3}
              placeholder="Any accessibility requirements or special accommodations needed?"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'online' | 'offline'>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('online')}
            className={`px-4 py-2 rounded-md ${
              filter === 'online' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Online
          </button>
          <button 
            onClick={() => setFilter('offline')}
            className={`px-4 py-2 rounded-md ${
              filter === 'offline' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Offline
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    event.type === 'online' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mt-2">{event.description}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                    <Users className="w-4 h-4 ml-4 mr-2" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <button 
                  className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
                  onClick={() => setSelectedEvent(event)}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <RegistrationForm 
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;