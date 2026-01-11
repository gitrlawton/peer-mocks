"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Search, Filter } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { PartnerProfileModal, Partner } from "@/components/partner-profile-modal";

const allPartners: Partner[] = [
  {
    id: 1,
    name: "Alex Thompson",
    firstName: "Alex",
    lastName: "Thompson",
    title: "Senior Engineer",
    level: "Senior Engineer at Microsoft",
    company: "Microsoft",
    location: "Seattle, WA",
    timezone: "UTC-08:00 (Pacific Time)",
    currentTime: "2:30 PM",
    specialties: ["Algorithms", "System Design", "Cloud Architecture"],
    rating: 4.9,
    sessions: 127,
    avatar: "AT",
    bio: "Senior engineer with 10+ years of experience at Microsoft. Passionate about helping others master algorithms and system design. Have conducted 100+ technical interviews and love sharing interview strategies.",
    experience: "Senior Level",
    totalHours: 190,
    responseRate: "98%",
    memberSince: "March 2023",
    availability: [
      "Monday: 6:00 PM - 9:00 PM",
      "Wednesday: 6:00 PM - 9:00 PM",
      "Saturday: 10:00 AM - 4:00 PM"
    ],
    reviews: [
      {
        id: 1,
        from: "Jennifer Lee",
        rating: 5,
        comment: "Alex helped me understand system design patterns that were crucial for my interview. Highly recommended!",
        date: "1 week ago"
      },
      {
        id: 2,
        from: "David Kim",
        rating: 4.8,
        comment: "Great session on algorithms. Alex explained complex concepts in a simple way.",
        date: "2 weeks ago"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Patel",
    firstName: "Priya",
    lastName: "Patel",
    title: "Staff Engineer",
    level: "Staff Engineer at Stripe",
    company: "Stripe",
    location: "San Francisco, CA",
    timezone: "UTC-08:00 (Pacific Time)",
    currentTime: "2:30 PM",
    specialties: ["Frontend", "React", "TypeScript", "UI/UX"],
    rating: 4.8,
    sessions: 89,
    avatar: "PP",
    bio: "Staff engineer at Stripe specializing in frontend development. Love helping candidates prepare for frontend interviews and discussing best practices in React and TypeScript.",
    experience: "Staff Level",
    totalHours: 134,
    responseRate: "95%",
    memberSince: "June 2023",
    availability: [
      "Tuesday: 7:00 PM - 10:00 PM",
      "Thursday: 7:00 PM - 10:00 PM",
      "Sunday: 2:00 PM - 6:00 PM"
    ],
    reviews: [
      {
        id: 1,
        from: "Michael Chang",
        rating: 5,
        comment: "Priya's feedback on my React code was incredibly valuable. She helped me identify performance issues I didn't know existed.",
        date: "3 days ago"
      },
      {
        id: 2,
        from: "Lisa Anderson",
        rating: 4.5,
        comment: "Great session on TypeScript patterns. Very knowledgeable and patient.",
        date: "1 week ago"
      }
    ]
  },
  {
    id: 3,
    name: "James Wilson",
    firstName: "James",
    lastName: "Wilson",
    title: "Engineering Manager",
    level: "Engineering Manager at Netflix",
    company: "Netflix",
    location: "Los Angeles, CA",
    timezone: "UTC-08:00 (Pacific Time)",
    currentTime: "2:30 PM",
    specialties: ["Leadership", "Behavioral", "System Design", "Team Management"],
    rating: 5.0,
    sessions: 156,
    avatar: "JW",
    bio: "Engineering manager at Netflix with experience leading teams of 15+ engineers. Specialized in behavioral interviews and helping engineers transition to leadership roles.",
    experience: "Staff Level",
    totalHours: 234,
    responseRate: "99%",
    memberSince: "January 2023",
    availability: [
      "Monday: 5:00 PM - 8:00 PM",
      "Friday: 6:00 PM - 9:00 PM",
      "Saturday: 9:00 AM - 12:00 PM"
    ],
    reviews: [
      {
        id: 1,
        from: "Rachel Green",
        rating: 5,
        comment: "James provided excellent guidance on behavioral questions. His experience as a manager really shows.",
        date: "2 days ago"
      },
      {
        id: 2,
        from: "Tom Bradford",
        rating: 5,
        comment: "Best behavioral interview practice I've had. James asked thoughtful questions and gave actionable feedback.",
        date: "1 week ago"
      }
    ]
  },
  {
    id: 4,
    name: "Sarah Chen",
    firstName: "Sarah",
    lastName: "Chen",
    title: "Senior Engineer",
    level: "Senior Engineer at Google",
    company: "Google",
    location: "Mountain View, CA",
    timezone: "UTC-08:00 (Pacific Time)",
    currentTime: "2:30 PM",
    specialties: ["Algorithms", "Data Structures", "Python", "Java"],
    rating: 4.9,
    sessions: 203,
    avatar: "SC",
    bio: "Senior engineer at Google with extensive experience in algorithms and data structures. Love helping candidates ace their coding interviews.",
    experience: "Senior Level",
    totalHours: 305,
    responseRate: "97%",
    memberSince: "February 2023",
    availability: [
      "Tuesday: 6:00 PM - 9:00 PM",
      "Thursday: 6:00 PM - 9:00 PM",
      "Sunday: 1:00 PM - 5:00 PM"
    ],
    reviews: [
      {
        id: 1,
        from: "Kevin Liu",
        rating: 5,
        comment: "Sarah's approach to solving problems is methodical and easy to follow. Learned a lot!",
        date: "4 days ago"
      }
    ]
  },
  {
    id: 5,
    name: "Michael Kumar",
    firstName: "Michael",
    lastName: "Kumar",
    title: "Tech Lead",
    level: "Tech Lead at Amazon",
    company: "Amazon",
    location: "Austin, TX",
    timezone: "UTC-06:00 (Central Time)",
    currentTime: "4:30 PM",
    specialties: ["System Design", "Distributed Systems", "AWS", "Microservices"],
    rating: 4.7,
    sessions: 178,
    avatar: "MK",
    bio: "Tech lead at Amazon focusing on distributed systems and microservices architecture. Passionate about system design interviews.",
    experience: "Senior Level",
    totalHours: 267,
    responseRate: "96%",
    memberSince: "April 2023",
    availability: [
      "Monday: 7:00 PM - 10:00 PM",
      "Wednesday: 7:00 PM - 10:00 PM"
    ],
    reviews: [
      {
        id: 1,
        from: "Amanda Foster",
        rating: 4.5,
        comment: "Great insights into system design. Michael knows his stuff.",
        date: "1 week ago"
      }
    ]
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    firstName: "Emma",
    lastName: "Rodriguez",
    title: "Software Engineer",
    level: "Software Engineer at Meta",
    company: "Meta",
    location: "Menlo Park, CA",
    timezone: "UTC-08:00 (Pacific Time)",
    currentTime: "2:30 PM",
    specialties: ["Frontend", "Mobile", "React Native", "iOS"],
    rating: 4.8,
    sessions: 94,
    avatar: "ER",
    bio: "Software engineer at Meta specializing in mobile development. Experienced in React Native and iOS development.",
    experience: "Mid Level",
    totalHours: 141,
    responseRate: "94%",
    memberSince: "July 2023",
    availability: [
      "Friday: 6:00 PM - 9:00 PM",
      "Saturday: 11:00 AM - 3:00 PM"
    ],
    reviews: [
      {
        id: 1,
        from: "Brian Clark",
        rating: 5,
        comment: "Emma helped me understand mobile development best practices. Very helpful!",
        date: "5 days ago"
      }
    ]
  }
];

const specialtyFilters = [
  "All",
  "Algorithms",
  "System Design",
  "Frontend",
  "Backend",
  "Leadership",
  "Behavioral"
];

export default function Partners() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const handlePartnerClick = (partner: Partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPartner(null), 300);
  };

  const filteredPartners = allPartners.filter((partner) => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpecialty = selectedSpecialty === "All" ||
                            partner.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <PartnerProfileModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Find Your Practice Partner</h1>
          <p className="text-slate-600">Connect with experienced professionals to practice your interview skills</p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, company, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-slate-500" />
            <span className="text-sm text-slate-600 font-medium">Filter by specialty:</span>
            {specialtyFilters.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedSpecialty === specialty
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-sm text-slate-600">
          Showing {filteredPartners.length} {filteredPartners.length === 1 ? 'partner' : 'partners'}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <Card
              key={partner.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handlePartnerClick(partner)}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold text-2xl mb-4">
                    {partner.avatar}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">{partner.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{partner.level}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-slate-900">{partner.rating}</span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-600">{partner.sessions} sessions</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {partner.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {partner.specialties.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded-full">
                        +{partner.specialties.length - 3} more
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {partner.bio}
                  </p>

                  <Button className="w-full" onClick={(e) => {
                    e.stopPropagation();
                  }}>
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg mb-2">No partners found matching your criteria</p>
            <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
}
