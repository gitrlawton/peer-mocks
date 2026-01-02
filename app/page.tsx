import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Users, Calendar, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-semibold text-xl">MockInterview</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Practice Tech Interviews with Peers
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Connect with other developers to practice coding interviews, system design,
            and behavioral questions. Get real feedback and improve your skills.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Find a Practice Partner</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <Code2 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Coding Interviews</CardTitle>
              <CardDescription>
                Practice data structures, algorithms, and problem-solving
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-lg">System Design</CardTitle>
              <CardDescription>
                Master architecture discussions and scalability challenges
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
              <CardDescription>
                Book sessions that fit your schedule across timezones
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-lg">Real Feedback</CardTitle>
              <CardDescription>
                Get actionable insights from peers who understand the process
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="bg-slate-900 text-white border-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to start practicing?</CardTitle>
            <CardDescription className="text-slate-300">
              Join developers preparing for their next opportunity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" variant="secondary">Create Your Profile</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t mt-16 py-8 bg-slate-50">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>MockInterview Platform - Practice makes perfect</p>
        </div>
      </footer>
    </div>
  );
}
