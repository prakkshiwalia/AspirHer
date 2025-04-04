import React, { useState } from 'react';
import { User, Calendar, MapPin, Briefcase, Clock } from 'lucide-react';

interface TimeSlot {
  id: number;
  day: string;
  time: string;
  available: boolean;
}

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  expertise: string[];
  image: string;
  availableSlots: TimeSlot[];
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Ritu Kapur",
    role: "Senior Engineering Manager",
    company: "Google",
    location: "Bangalore",
    expertise: ["Leadership", "Software Architecture", "Career Growth"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    availableSlots: [
      { id: 1, day: "Monday", time: "10:00 AM", available: true },
      { id: 2, day: "Wednesday", time: "2:00 PM", available: true },
      { id: 3, day: "Friday", time: "4:00 PM", available: true }
    ]
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "Product Director",
    company: "Microsoft",
    location: "Hyderabad",
    expertise: ["Product Management", "UX Design", "Team Building"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    availableSlots: [
      { id: 4, day: "Tuesday", time: "11:00 AM", available: true },
      { id: 5, day: "Thursday", time: "3:00 PM", available: true },
      { id: 6, day: "Saturday", time: "10:00 AM", available: true }
    ]
  }
];

interface MentorshipFormProps {
  mentor: Mentor;
  onClose: () => void;
}

const MentorshipForm: React.FC<MentorshipFormProps> = ({ mentor, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goals: '',
    background: '',
    expectations: '',
    selectedSlot: null as TimeSlot | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold">Connect with {mentor.name}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}>
              1
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'
            }`}>
              2
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are your career goals?
                </label>
                <textarea 
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full p-3 border rounded-md"
                  rows={3}
                  placeholder="Describe your short-term and long-term career goals..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your background
                </label>
                <textarea 
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full p-3 border rounded-md"
                  rows={3}
                  placeholder="Share your educational and professional background..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What do you hope to learn from {mentor.name}?
                </label>
                <textarea 
                  value={formData.expectations}
                  onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                  className="w-full p-3 border rounded-md"
                  rows={3}
                  placeholder="Explain what you hope to gain from this mentorship..."
                  required
                />
              </div>
            </>
          ) : (
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Select a time slot</h4>
              <div className="space-y-3">
                {mentor.availableSlots.map(slot => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, selectedSlot: slot })}
                    className={`w-full p-4 rounded-lg border ${
                      formData.selectedSlot?.id === slot.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">{slot.day}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-600" />
                        <span>{slot.time}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            {step === 1 ? 'Next' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

const Mentorship: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Find a Mentor</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {mentors.map(mentor => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-4">
              <img 
                src={mentor.image} 
                alt={mentor.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{mentor.name}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{mentor.role} at {mentor.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{mentor.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map(skill => (
                  <span 
                    key={skill}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedMentor(mentor)}
              className="mt-6 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
              Connect
            </button>
          </div>
        ))}
      </div>

      {selectedMentor && (
        <MentorshipForm 
          mentor={selectedMentor} 
          onClose={() => setSelectedMentor(null)} 
        />
      )}
    </div>
  );
};

export default Mentorship;