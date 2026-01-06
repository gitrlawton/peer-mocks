import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Calendar, Star, Award, Clock, TrendingUp, Edit } from "lucide-react";
import { Navigation } from "@/components/navigation";

const mockUser = {
  firstName: "John",
  lastName: "Doe",
  initials: "JD",
  email: "john.doe@example.com",
  title: "Senior Software Engineer",
  company: "Tech Corp",
  location: "San Francisco, CA",
  memberSince: "January 2024",
  bio: "Passionate software engineer with 8 years of experience in full-stack development. Love helping others prepare for technical interviews and sharing knowledge about algorithms, system design, and best practices.",
  experience: "Senior Level",
  specialties: ["Algorithms", "System Design", "React", "Node.js", "AWS"],
  stats: {
    sessionsCompleted: 42,
    averageRating: 4.8,
    totalHours: 63,
    responseRate: "95%"
  },
  availability: [
    "Monday: 6:00 PM - 9:00 PM",
    "Wednesday: 6:00 PM - 9:00 PM",
    "Saturday: 10:00 AM - 2:00 PM"
  ]
};

const recentReviews = [
  {
    id: 1,
    from: "Sarah Chen",
    rating: 5,
    comment: "Excellent practice partner! Very patient and provided great feedback on my system design approach.",
    date: "2 days ago"
  },
  {
    id: 2,
    from: "Michael Kumar",
    rating: 4.5,
    comment: "John helped me prepare for coding interviews. His explanations were clear and insightful.",
    date: "1 week ago"
  },
  {
    id: 3,
    from: "Emma Rodriguez",
    rating: 5,
    comment: "Great session! John asked thoughtful questions and gave constructive feedback.",
    date: "2 weeks ago"
  }
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold text-3xl mb-4">
                    {mockUser.initials}
                  </div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-1">
                    {mockUser.firstName} {mockUser.lastName}
                  </h1>
                  <p className="text-slate-600 mb-1">{mockUser.title}</p>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                    <Briefcase className="h-4 w-4" />
                    {mockUser.company}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    {mockUser.location}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-6">
                    <Calendar className="h-4 w-4" />
                    Member since {mockUser.memberSince}
                  </div>
                  <Button className="w-full mb-2">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Public Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Sessions Completed</span>
                  </div>
                  <span className="font-semibold">{mockUser.stats.sessionsCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-slate-600">Average Rating</span>
                  </div>
                  <span className="font-semibold">{mockUser.stats.averageRating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Total Hours</span>
                  </div>
                  <span className="font-semibold">{mockUser.stats.totalHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Response Rate</span>
                  </div>
                  <span className="font-semibold">{mockUser.stats.responseRate}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mockUser.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">{mockUser.bio}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900 text-sm">Experience Level</h3>
                  <p className="text-slate-600">{mockUser.experience}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>
                  Times when I&apos;m typically available for practice sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockUser.availability.map((slot, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 py-2 px-3 bg-slate-50 rounded-md"
                    >
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-700">{slot}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Reviews</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-lg">{mockUser.stats.averageRating}</span>
                    <span className="text-sm text-slate-500">({mockUser.stats.sessionsCompleted} reviews)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-900">{review.from}</h4>
                          <p className="text-sm text-slate-500">{review.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
