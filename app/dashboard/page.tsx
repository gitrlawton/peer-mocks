import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Calendar, Clock, MessageSquare, Star, TrendingUp } from "lucide-react";
import { Navigation } from "@/components/navigation";

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

const availablePartners = [
  {
    id: 1,
    name: "Alex Thompson",
    level: "Senior Engineer at Microsoft",
    specialties: ["Algorithms", "System Design"],
    rating: 4.9,
    sessions: 127,
    avatar: "AT"
  },
  {
    id: 2,
    name: "Priya Patel",
    level: "Staff Engineer at Stripe",
    specialties: ["Frontend", "React"],
    rating: 4.8,
    sessions: 89,
    avatar: "PP"
  },
  {
    id: 3,
    name: "James Wilson",
    level: "Engineering Manager at Netflix",
    specialties: ["Leadership", "Behavioral"],
    rating: 5.0,
    sessions: 156,
    avatar: "JW"
  }
];

const stats = [
  { label: "Sessions Completed", value: "12", icon: Calendar, trend: "+3 this week" },
  { label: "Upcoming Sessions", value: "3", icon: Clock, trend: "Next: Today 2PM" },
  { label: "Practice Hours", value: "18.5", icon: TrendingUp, trend: "+4.5 this week" },
  { label: "Average Rating", value: "4.7", icon: Star, trend: "From 8 reviews" }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

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
              <Button variant="ghost" size="sm">Browse All</Button>
            </div>
            <div className="space-y-4">
              {availablePartners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-semibold flex-shrink-0">
                        {partner.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 mb-1">{partner.name}</h3>
                        <p className="text-sm text-slate-600 mb-2">{partner.level}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {partner.specialties.map((specialty, idx) => (
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
                      <div className="flex flex-col gap-2 self-start">
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
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest practice sessions and feedback</CardDescription>
          </CardHeader>
          <CardContent>
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
      </main>
    </div>
  );
}
