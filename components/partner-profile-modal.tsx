"use client";

import { X, MapPin, Briefcase, Star, Award, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export type Partner = {
  id: number;
  name: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  level: string;
  company?: string;
  location?: string;
  timezone?: string;
  currentTime?: string;
  avatar: string;
  specialties: string[];
  rating: number;
  sessions: number;
  bio?: string;
  experience?: string;
  totalHours?: number;
  responseRate?: string;
  memberSince?: string;
  availability?: string[];
  reviews?: Array<{
    id: number;
    from: string;
    rating: number;
    comment: string;
    date: string;
  }>;
};

type PartnerProfileModalProps = {
  partner: Partner | null;
  isOpen: boolean;
  onClose: () => void;
};

export function PartnerProfileModal({ partner, isOpen, onClose }: PartnerProfileModalProps) {
  if (!isOpen || !partner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Partner Profile</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold text-3xl mb-4">
                      {partner.avatar}
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-1">{partner.name}</h1>
                    <p className="text-slate-600 mb-1">{partner.title || partner.level}</p>
                    {partner.company && (
                      <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                        <Briefcase className="h-4 w-4" />
                        {partner.company}
                      </div>
                    )}
                    {partner.location && (
                      <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                        <MapPin className="h-4 w-4" />
                        {partner.location}
                      </div>
                    )}
                    {partner.timezone && (
                      <div className="text-sm text-slate-500 mb-1">{partner.timezone}</div>
                    )}
                    {partner.currentTime && (
                      <div className="flex items-center gap-1 text-sm text-slate-600 mb-4 font-medium">
                        <Clock className="h-4 w-4" />
                        {partner.currentTime}
                      </div>
                    )}
                    {partner.memberSince && (
                      <div className="flex items-center gap-1 text-sm text-slate-500 mb-6">
                        <Calendar className="h-4 w-4" />
                        Member since {partner.memberSince}
                      </div>
                    )}
                    <div className="flex gap-2 w-full">
                      <Button className="flex-1">Request Session</Button>
                      <Button variant="outline" className="flex-1">Message</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-slate-500" />
                        <span className="text-sm text-slate-600">Sessions Completed</span>
                      </div>
                      <span className="font-semibold">{partner.sessions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-slate-600">Average Rating</span>
                      </div>
                      <span className="font-semibold">{partner.rating}</span>
                    </div>
                    {partner.totalHours && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span className="text-sm text-slate-600">Total Hours</span>
                        </div>
                        <span className="font-semibold">{partner.totalHours}</span>
                      </div>
                    )}
                    {partner.responseRate && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-slate-500" />
                          <span className="text-sm text-slate-600">Response Rate</span>
                        </div>
                        <span className="font-semibold">{partner.responseRate}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, idx) => (
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
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-slate-900 mb-4">About</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {partner.bio || `${partner.name} is an experienced professional ready to help you with mock interviews and technical preparation.`}
                  </p>
                  {partner.experience && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 text-sm">Experience Level</h4>
                      <p className="text-slate-600">{partner.experience}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {partner.availability && partner.availability.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-slate-900 mb-4">Availability</h3>
                    <div className="space-y-2">
                      {partner.availability.map((slot, idx) => (
                        <div key={idx} className="flex items-center gap-2 py-2 px-3 bg-slate-50 rounded-md text-sm text-slate-700">
                          <Clock className="h-4 w-4 text-slate-500" />
                          {slot}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {partner.reviews && partner.reviews.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900">Recent Reviews</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{partner.rating}</span>
                        <span className="text-sm text-slate-500">({partner.sessions} reviews)</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {partner.reviews.map((review) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
