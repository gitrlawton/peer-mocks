"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Calendar, Clock, MessageSquare, Star, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { PartnerProfileModal, Partner } from "@/components/partner-profile-modal";
import { useRouter } from "next/navigation";

// Mock data
const upcomingSessions = [
  {
    id: 1,
    partnerName: "Sarah Chen",
    partnerLevel: "Senior Engineer at Google",
    type: "Coding Interview",
    date: "Today",
    time: "2:00 PM",
    duration: "60 min",
    avatar: "SC"
  },
  {
    id: 2,
    partnerName: "Michael Kumar",
    partnerLevel: "Tech Lead at Amazon",
    type: "System Design",
    date: "Tomorrow",
    time: "10:00 AM",
    duration: "90 min",
    avatar: "MK"
  },
  {
    id: 3,
    partnerName: "Emma Rodriguez",
    partnerLevel: "Software Engineer at Meta",
    type: "Behavioral",
    date: "Jan 8",
    time: "4:30 PM",
    duration: "45 min",
    avatar: "ER"
  }
];

const availablePartners: Partner[] = [
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
  }
];

const stats = [
  { label: "Sessions Completed", value: "12", icon: Calendar, trend: "+3 this week" },
  { label: "Upcoming Sessions", value: "3", icon: Clock, trend: "Next: Today 2PM" },
  { label: "Practice Hours", value: "18.5", icon: TrendingUp, trend: "+4.5 this week" },
  { label: "Average Rating", value: "4.7", icon: Star, trend: "From 8 reviews" }
];

export default function Dashboard() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handlePartnerClick = (partner: Partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPartner(null), 300);
  };

  const handleViewAllPartners = () => {
    router.push('/partners');
  };

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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, John!</h1>
          <p className="text-slate-600">Here&apos;s what&apos;s happening with your practice sessions</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-sm">{stat.label}</CardDescription>
                    <Icon className="h-4 w-4 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <p className="text-xs text-slate-500">{stat.trend}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Upcoming Sessions</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-semibold flex-shrink-0">
                        {session.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1">{session.partnerName}</h3>
                        <p className="text-sm text-slate-600 mb-2">{session.partnerLevel}</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="inline-flex items-center gap-1 text-slate-700">
                            <Code2 className="h-3.5 w-3.5" />
                            {session.type}
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-700">
                            <Calendar className="h-3.5 w-3.5" />
                            {session.date}
                          </span>
                          <span className="inline-flex items-center gap-1 text-slate-700">
                            <Clock className="h-3.5 w-3.5" />
                            {session.time} ({session.duration})
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm">
                          <MessageSquare className="h-3.5 w-3.5 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">Reschedule</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Available Partners */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Available Partners</h2>
              <Button variant="ghost" size="sm" onClick={handleViewAllPartners}>View All</Button>
            </div>
            <div className="space-y-4">
              {availablePartners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => handlePartnerClick(partner)}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-semibold flex-shrink-0">
                        {partner.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1">{partner.name}</h3>
                        <p className="text-sm text-slate-600 mb-2">{partner.level}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {partner.specialties.slice(0, 2).map((specialty, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            {partner.rating}
                          </span>
                          <span>{partner.sessions} sessions</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 self-start" onClick={(e) => e.stopPropagation()}>
                        <Button size="sm">Request</Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-3.5 w-3.5 mr-1" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 font-medium">Completed session with Sarah Chen</p>
                  <p className="text-sm text-slate-600">Coding Interview - Arrays & Strings</p>
                  <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 font-medium">Received feedback from Michael Kumar</p>
                  <p className="text-sm text-slate-600">&quot;Great communication and problem-solving approach&quot;</p>
                  <p className="text-xs text-slate-500 mt-1">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 font-medium">New match available</p>
                  <p className="text-sm text-slate-600">Alex Thompson wants to practice system design</p>
                  <p className="text-xs text-slate-500 mt-1">2 days ago</p>
                </div>
              </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
