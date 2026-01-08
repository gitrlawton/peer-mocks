"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Calendar, Star, Award, Clock, TrendingUp, Edit, X, Check } from "lucide-react";
import { Navigation } from "@/components/navigation";

type AvailabilitySlot = {
  day: string;
  startHour: string;
  startMinute: string;
  startPeriod: string;
  endHour: string;
  endMinute: string;
  endPeriod: string;
};

const initialUserData = {
  firstName: "John",
  lastName: "Doe",
  initials: "JD",
  email: "john.doe@example.com",
  title: "Senior Software Engineer",
  company: "Tech Corp",
  location: "San Francisco, CA",
  timezone: "UTC-08:00 (Pacific Time)",
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
    { day: "Monday", startHour: "6", startMinute: "00", startPeriod: "PM", endHour: "9", endMinute: "00", endPeriod: "PM" },
    { day: "Wednesday", startHour: "6", startMinute: "00", startPeriod: "PM", endHour: "9", endMinute: "00", endPeriod: "PM" },
    { day: "Saturday", startHour: "10", startMinute: "00", startPeriod: "AM", endHour: "2", endMinute: "00", endPeriod: "PM" }
  ] as AvailabilitySlot[]
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const MINUTES = ["00", "15", "30", "45"];
const PERIODS = ["AM", "PM"];

const TIMEZONES = [
  "UTC-12:00 (Baker Island)",
  "UTC-11:00 (American Samoa)",
  "UTC-10:00 (Hawaii)",
  "UTC-09:00 (Alaska)",
  "UTC-08:00 (Pacific Time)",
  "UTC-07:00 (Mountain Time)",
  "UTC-06:00 (Central Time)",
  "UTC-05:00 (Eastern Time)",
  "UTC-04:00 (Atlantic Time)",
  "UTC-03:00 (Buenos Aires)",
  "UTC-02:00 (Mid-Atlantic)",
  "UTC-01:00 (Azores)",
  "UTC+00:00 (London)",
  "UTC+01:00 (Paris, Berlin)",
  "UTC+02:00 (Cairo, Athens)",
  "UTC+03:00 (Moscow, Istanbul)",
  "UTC+04:00 (Dubai)",
  "UTC+05:00 (Pakistan)",
  "UTC+05:30 (India)",
  "UTC+06:00 (Bangladesh)",
  "UTC+07:00 (Bangkok)",
  "UTC+08:00 (Singapore, Beijing)",
  "UTC+09:00 (Tokyo, Seoul)",
  "UTC+10:00 (Sydney)",
  "UTC+11:00 (Solomon Islands)",
  "UTC+12:00 (New Zealand)"
];

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
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialUserData);
  const [newSpecialty, setNewSpecialty] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const getTimeInTimezone = (timezone: string) => {
    const match = timezone.match(/UTC([+-]\d{1,2}):(\d{2})/);
    if (!match) return "";

    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const offsetMinutes = hours * 60 + (hours < 0 ? -minutes : minutes);

    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (offsetMinutes * 60000));

    return localTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(getTimeInTimezone(userData.timezone));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [userData.timezone]);

  const formatAvailabilitySlot = (slot: AvailabilitySlot) => {
    return `${slot.day}: ${slot.startHour}:${slot.startMinute} ${slot.startPeriod} - ${slot.endHour}:${slot.endMinute} ${slot.endPeriod}`;
  };

  const handleSave = () => {
    const initials = `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`.toUpperCase();
    setUserData({ ...userData, initials });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUserData(initialUserData);
    setIsEditing(false);
  };

  const handleAddSpecialty = () => {
    if (newSpecialty.trim() && !userData.specialties.includes(newSpecialty.trim())) {
      setUserData({
        ...userData,
        specialties: [...userData.specialties, newSpecialty.trim()]
      });
      setNewSpecialty("");
    }
  };

  const handleRemoveSpecialty = (index: number) => {
    setUserData({
      ...userData,
      specialties: userData.specialties.filter((_, i) => i !== index)
    });
  };

  const updateAvailabilitySlot = (index: number, field: keyof AvailabilitySlot, value: string) => {
    const newAvailability = [...userData.availability];
    newAvailability[index] = { ...newAvailability[index], [field]: value };
    setUserData({ ...userData, availability: newAvailability });
  };

  const removeAvailabilitySlot = (index: number) => {
    setUserData({
      ...userData,
      availability: userData.availability.filter((_, i) => i !== index)
    });
  };

  const addAvailabilitySlot = () => {
    setUserData({
      ...userData,
      availability: [
        ...userData.availability,
        { day: "Monday", startHour: "9", startMinute: "00", startPeriod: "AM", endHour: "5", endMinute: "00", endPeriod: "PM" }
      ]
    });
  };

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
                    {userData.initials}
                  </div>
                  {isEditing ? (
                    <div className="w-full space-y-3 mb-4">
                      <input
                        type="text"
                        value={userData.firstName}
                        onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-center text-lg font-bold"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        value={userData.lastName}
                        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-center text-lg font-bold"
                        placeholder="Last Name"
                      />
                      <input
                        type="text"
                        value={userData.title}
                        onChange={(e) => setUserData({ ...userData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md text-center"
                        placeholder="Title"
                      />
                    </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold text-slate-900 mb-1">
                        {userData.firstName} {userData.lastName}
                      </h1>
                      <p className="text-slate-600 mb-1">{userData.title}</p>
                    </>
                  )}
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-4">
                    <Briefcase className="h-4 w-4" />
                    {isEditing ? (
                      <input
                        type="text"
                        value={userData.company}
                        onChange={(e) => setUserData({ ...userData, company: e.target.value })}
                        className="px-2 py-1 border border-slate-300 rounded text-center text-sm w-full"
                        placeholder="Company"
                      />
                    ) : (
                      userData.company
                    )}
                  </div>
                  <div className="w-full space-y-2 mb-2">
                    <div className="flex items-center gap-1 text-sm text-slate-500 justify-center">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      {isEditing ? (
                        <input
                          type="text"
                          value={userData.location}
                          onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                          className="px-2 py-1 border border-slate-300 rounded text-center text-sm flex-1"
                          placeholder="Location"
                        />
                      ) : (
                        userData.location
                      )}
                    </div>
                    <div className="w-full">
                      {isEditing ? (
                        <div className="flex justify-center">
                          <select
                            value={userData.timezone}
                            onChange={(e) => setUserData({ ...userData, timezone: e.target.value })}
                            className="px-2 py-1 border border-slate-300 rounded text-sm w-full max-w-xs"
                          >
                            {TIMEZONES.map((tz) => (
                              <option key={tz} value={tz}>{tz}</option>
                            ))}
                          </select>
                        </div>
                      ) : (
                        <div className="text-sm text-slate-500 text-center">
                          {userData.timezone}
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-1 text-sm text-slate-600 mt-1 font-medium">
                        <Clock className="h-4 w-4" />
                        {currentTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500 mb-6">
                    <Calendar className="h-4 w-4" />
                    Member since {userData.memberSince}
                  </div>
                  {isEditing ? (
                    <div className="flex gap-2 w-full">
                      <Button onClick={handleSave} className="flex-1">
                        <Check className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline" className="flex-1">
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsEditing(true)} className="w-full">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
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
                  <span className="font-semibold">{userData.stats.sessionsCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-slate-600">Average Rating</span>
                  </div>
                  <span className="font-semibold">{userData.stats.averageRating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Total Hours</span>
                  </div>
                  <span className="font-semibold">{userData.stats.totalHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Response Rate</span>
                  </div>
                  <span className="font-semibold">{userData.stats.responseRate}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specialties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userData.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium inline-flex items-center gap-1"
                    >
                      {specialty}
                      {isEditing && (
                        <button
                          onClick={() => handleRemoveSpecialty(idx)}
                          className="hover:text-red-600 ml-1"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={newSpecialty}
                      onChange={(e) => setNewSpecialty(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSpecialty()}
                      className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm"
                      placeholder="Add new specialty"
                    />
                    <Button size="sm" onClick={handleAddSpecialty}>Add</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <textarea
                    value={userData.bio}
                    onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-700 leading-relaxed mb-4 min-h-[120px]"
                    placeholder="Tell us about yourself"
                  />
                ) : (
                  <p className="text-slate-700 leading-relaxed mb-4">{userData.bio}</p>
                )}
                <div className="space-y-2">
                  <h3 className="font-semibold text-slate-900 text-sm">Experience Level</h3>
                  {isEditing ? (
                    <select
                      value={userData.experience}
                      onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md text-slate-600"
                    >
                      <option value="Junior Level">Junior Level</option>
                      <option value="Mid Level">Mid Level</option>
                      <option value="Senior Level">Senior Level</option>
                      <option value="Staff Level">Staff Level</option>
                      <option value="Principal Level">Principal Level</option>
                    </select>
                  ) : (
                    <p className="text-slate-600">{userData.experience}</p>
                  )}
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
                <div className="space-y-3">
                  {userData.availability.map((slot, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 py-2 px-3 bg-slate-50 rounded-md"
                    >
                      <Clock className="h-4 w-4 text-slate-500 mt-1" />
                      {isEditing ? (
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <select
                              value={slot.day}
                              onChange={(e) => updateAvailabilitySlot(idx, "day", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm"
                            >
                              {DAYS.map((day) => (
                                <option key={day} value={day}>{day}</option>
                              ))}
                            </select>
                            <button
                              onClick={() => removeAvailabilitySlot(idx)}
                              className="text-red-600 hover:text-red-700 ml-auto"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-slate-600">From:</span>
                            <select
                              value={slot.startHour}
                              onChange={(e) => updateAvailabilitySlot(idx, "startHour", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm"
                            >
                              {HOURS.map((hour) => (
                                <option key={hour} value={hour}>{hour}</option>
                              ))}
                            </select>
                            <span>:</span>
                            <select
                              value={slot.startMinute}
                              onChange={(e) => updateAvailabilitySlot(idx, "startMinute", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm"
                            >
                              {MINUTES.map((minute) => (
                                <option key={minute} value={minute}>{minute}</option>
                              ))}
                            </select>
                            <select
                              value={slot.startPeriod}
                              onChange={(e) => updateAvailabilitySlot(idx, "startPeriod", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm"
                            >
                              {PERIODS.map((period) => (
                                <option key={period} value={period}>{period}</option>
                              ))}
                            </select>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-slate-600">To:</span>
                            <select
                              value={slot.endHour}
                              onChange={(e) => updateAvailabilitySlot(idx, "endHour", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm ml-4"
                            >
                              {HOURS.map((hour) => (
                                <option key={hour} value={hour}>{hour}</option>
                              ))}
                            </select>
                            <span>:</span>
                            <select
                              value={slot.endMinute}
                              onChange={(e) => updateAvailabilitySlot(idx, "endMinute", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm"
                            >
                              {MINUTES.map((minute) => (
                                <option key={minute} value={minute}>{minute}</option>
                              ))}
                            </select>
                            <select
                              value={slot.endPeriod}
                              onChange={(e) => updateAvailabilitySlot(idx, "endPeriod", e.target.value)}
                              className="px-2 py-1 border border-slate-300 rounded text-sm"
                            >
                              {PERIODS.map((period) => (
                                <option key={period} value={period}>{period}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ) : (
                        <span className="text-sm text-slate-700">{formatAvailabilitySlot(slot)}</span>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={addAvailabilitySlot}
                      className="w-full mt-2"
                    >
                      Add Time Slot
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Reviews</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-lg">{userData.stats.averageRating}</span>
                    <span className="text-sm text-slate-500">({userData.stats.sessionsCompleted} reviews)</span>
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
