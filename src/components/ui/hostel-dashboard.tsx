import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  BedDouble,
  Calendar,
  MapPin,
  Utensils,
  BarChart3,
  Settings,
  Mail,
  Phone,
  Globe,
  Wifi,
  Copy,
  Clock,
  CheckCircle2,
  Star,
  Camera,
  Music,
  Dumbbell,
  Coffee,
  AlertCircle,
} from "lucide-react";

export function HostelDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Ceezaa</span>
            <span className="text-gray-600 text-sm ml-2">Staff</span>
          </h1>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1">
          <NavItem icon={Home} label="Dashboard" />
          <NavItem icon={Users} label="Guests" active />
          <NavItem icon={BedDouble} label="Rooms" />
          <NavItem icon={Calendar} label="Bookings" />
          <NavItem icon={MapPin} label="Experiences" />
          <NavItem icon={Utensils} label="Dining" />
          <NavItem icon={BarChart3} label="Analytics" />
          <NavItem icon={Settings} label="Settings" />
        </nav>

        {/* User Info at Bottom */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Front Desk</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Profile Photo */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg">
                    SC
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Sarah Chen</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      Ceezaa ID: CZ-2847
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                      3rd Stay
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-yellow-50 text-yellow-700">
                      <Star className="w-3 h-3 mr-1" />
                      Gold Member
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                      Check-out: Oct 25
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Check In
                </Button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Stay Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Current Stay</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Paid
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <BedDouble className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Room</p>
                        <p className="text-lg font-semibold">204 - Deluxe Dorm</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Check-in</p>
                          <p className="text-sm font-medium">Oct 20, 2024</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Check-out</p>
                          <p className="text-sm font-medium">Oct 25, 2024</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500">Nights</p>
                          <p className="text-sm font-medium">5 nights</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-primary" />
                        <p className="text-sm font-medium">WiFi Password</p>
                      </div>
                      <button className="p-1 hover:bg-white rounded transition-colors">
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <p className="text-lg font-mono font-semibold text-gray-900">CeezaaGuest2024</p>
                  </div>
                </div>
              </div>

              {/* Guest Information */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Guest Information</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <p className="text-sm font-medium">sarah.chen@email.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                        <p className="text-sm font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Nationality</p>
                        <p className="text-sm font-medium">🇺🇸 United States</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                      <p className="text-sm font-medium">March 15, 1995 (29 years)</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Dietary Preferences</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md">
                          Vegan
                        </span>
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-md">
                          Gluten-Free
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 mb-2">Languages</p>
                      <p className="text-sm font-medium">English, Mandarin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Bookings */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Bookings</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">City Walking Tour</p>
                        <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">$35</p>
                      <span className="text-xs text-green-600 font-medium">Confirmed</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Utensils className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Rooftop Dinner</p>
                        <p className="text-xs text-gray-500">Oct 23, 7:00 PM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">$45</p>
                      <span className="text-xs text-green-600 font-medium">Confirmed</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Dumbbell className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Morning Yoga Session</p>
                        <p className="text-xs text-gray-500">Oct 24, 7:00 AM</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">Free</p>
                      <span className="text-xs text-green-600 font-medium">Registered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              {/* Booking History */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking History</h3>

                <div className="space-y-3">
                  <div className="pb-3 border-b border-gray-100 last:border-0">
                    <p className="text-sm font-medium text-gray-900">Summer 2024</p>
                    <p className="text-xs text-gray-500 mt-1">Aug 15-22, 2024 · 7 nights</p>
                  </div>
                  <div className="pb-3 border-b border-gray-100 last:border-0">
                    <p className="text-sm font-medium text-gray-900">Spring Break</p>
                    <p className="text-xs text-gray-500 mt-1">Mar 10-14, 2024 · 4 nights</p>
                  </div>
                  <div className="pb-3 border-b border-gray-100 last:border-0">
                    <p className="text-sm font-medium text-gray-900">New Year 2024</p>
                    <p className="text-xs text-gray-500 mt-1">Dec 29-Jan 2 · 4 nights</p>
                  </div>
                </div>

                <button className="text-sm text-primary font-medium hover:underline mt-4">
                  View All History →
                </button>
              </div>

              {/* Preferences & Interests */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Interests & Preferences</h3>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                    <Dumbbell className="w-3 h-3 mr-1.5" />
                    Yoga
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-pink-50 text-pink-700 text-xs font-medium rounded-full">
                    <Music className="w-3 h-3 mr-1.5" />
                    Nightlife
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                    <Coffee className="w-3 h-3 mr-1.5" />
                    Coffee Lover
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                    <Camera className="w-3 h-3 mr-1.5" />
                    Photography
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
                    Solo Traveler
                  </span>
                </div>
              </div>

              {/* Notes & Alerts */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes & Alerts</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">Special Request</p>
                      <p className="text-xs text-blue-700 mt-1">
                        Guest requested a quiet room away from common areas
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Staff Note - Oct 20</p>
                    <p className="text-sm text-gray-900">
                      Guest mentioned interest in local photography spots. Recommended Hidden Gems tour.
                    </p>
                  </div>
                </div>

                <button className="text-sm text-primary font-medium hover:underline mt-4">
                  Add Note +
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="text-sm text-gray-900">Checked in</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <p className="text-sm text-gray-900">Booked City Tour</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <div>
                      <p className="text-sm text-gray-900">Registered for Yoga</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                    <div>
                      <p className="text-sm text-gray-900">Made dinner reservation</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper component for navigation items
function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
        active
          ? "bg-primary/10 text-primary font-medium"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{label}</span>
    </button>
  );
}
