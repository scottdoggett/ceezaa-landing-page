"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Home,
  Users,
  BedDouble,
  Calendar,
  MapPin,
  Utensils,
  BarChart3,
  Settings,
  TrendingUp,
  DollarSign,
  Moon,
  Download,
  ChevronDown,
  Star,
  Smartphone,
  Award,
  Globe,
  UserCheck,
  CircleDollarSign,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

// Analytics Data
const bookingSourcesData = [
  { source: "Direct", bookings: 245, fill: "#D3D6E0" },
  { source: "OTAs", bookings: 182, fill: "#BCBFCC" },
  { source: "Walk-ins", bookings: 89, fill: "#6E7180" },
];

const demographicsData = [
  { ageGroup: "18-24", value: 285, percentage: 35, fill: "#D3D6E0" },
  { ageGroup: "25-34", value: 325, percentage: 40, fill: "#BCBFCC" },
  { ageGroup: "35-44", value: 130, percentage: 16, fill: "#6E7180" },
  { ageGroup: "45+", value: 73, percentage: 9, fill: "#1E1E24" },
];

const diningRevenueData = [
  { date: "Week 1", breakfast: 1200, lunch: 800, dinner: 1500, snacks: 400 },
  { date: "Week 2", breakfast: 1350, lunch: 920, dinner: 1680, snacks: 450 },
  { date: "Week 3", breakfast: 1180, lunch: 780, dinner: 1420, snacks: 380 },
  { date: "Week 4", breakfast: 1420, lunch: 950, dinner: 1750, snacks: 520 },
];

// Chart Configs
const bookingSourcesConfig = {
  bookings: {
    label: "Bookings",
    color: "#BCBFCC",
  },
} satisfies ChartConfig;

const diningRevenueConfig = {
  breakfast: {
    label: "Breakfast",
    color: "#D3D6E0",
  },
  lunch: {
    label: "Lunch",
    color: "#BCBFCC",
  },
  dinner: {
    label: "Dinner",
    color: "#6E7180",
  },
  snacks: {
    label: "Snacks",
    color: "#1E1E24",
  },
} satisfies ChartConfig;

export default function HostelDashboardAnalytics() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation - Same as dashboard-guests */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-center">
          <Image
            src="/ceezaa-logo.svg"
            alt="Ceezaa"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1">
          <NavItem icon={Home} label="Dashboard" />
          <NavItem icon={Users} label="Guests" />
          <NavItem icon={BedDouble} label="Rooms" />
          <NavItem icon={Calendar} label="Bookings" />
          <NavItem icon={MapPin} label="Experiences" />
          <NavItem icon={Utensils} label="Dining" />
          <NavItem icon={BarChart3} label="Analytics" active />
          <NavItem icon={Settings} label="Settings" />
        </nav>

        {/* User Info at Bottom */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
              CK
            </div>
            <div>
              <p className="text-sm font-medium">Chinni Kanu</p>
              <p className="text-xs text-gray-500">Owner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Analytics Dashboard */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full p-4 flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
              <p className="text-gray-500 text-sm mt-0.5">Track your hostel performance and insights</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Date Range Selector */}
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Last 30 Days</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {/* Export Button */}
              <Button variant="outline" size="sm" className="gap-2 h-8">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-5 gap-3">
            {/* Total Guests */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="flex items-center text-xs font-medium text-green-600">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  12.5%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">813</p>
              <p className="text-xs text-gray-500 mt-0.5">Total Guests</p>
            </div>

            {/* Occupancy Rate */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <BedDouble className="w-4 h-4 text-primary" />
                <span className="flex items-center text-xs font-medium text-green-600">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  8.3%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">86%</p>
              <p className="text-xs text-gray-500 mt-0.5">Occupancy Rate</p>
            </div>

            {/* Average Stay Duration */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <Moon className="w-4 h-4 text-primary" />
                <span className="flex items-center text-xs font-medium text-green-600">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  5.2%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">4.2</p>
              <p className="text-xs text-gray-500 mt-0.5">Avg Stay (nights)</p>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="flex items-center text-xs font-medium text-green-600">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  15.8%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">$65,050</p>
              <p className="text-xs text-gray-500 mt-0.5">Total Revenue</p>
            </div>

            {/* Revenue per Available Bed */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <CircleDollarSign className="w-4 h-4 text-primary" />
                <span className="flex items-center text-xs font-medium text-green-600">
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                  9.2%
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">$42.50</p>
              <p className="text-xs text-gray-500 mt-0.5">Revenue per Available Bed</p>
            </div>
          </div>

          {/* Row 1: Booking Sources, Guest Demographics & Dining Revenue */}
          <div className="grid grid-cols-3 gap-3 flex-1">
            {/* Booking Sources */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Booking Sources</h3>
              <ChartContainer config={bookingSourcesConfig} className="h-[180px]">
                <BarChart data={bookingSourcesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="source"
                    tick={{ fontSize: 11 }}
                    tickMargin={6}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickMargin={6}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Bar dataKey="bookings" radius={[4, 4, 0, 0]}>
                    {bookingSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
              <Button variant="outline" size="sm" className="mt-auto w-full">
                Explore More
              </Button>
            </div>

            {/* Guest Demographics */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Guest Demographics</h3>
              <div className="flex items-center justify-center h-[140px]">
                <ChartContainer config={{}} className="w-full h-full">
                  <PieChart>
                    <Pie
                      data={demographicsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {demographicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartTooltip content={ChartTooltipContent} />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2 flex-wrap">
                {demographicsData.map((item) => (
                  <div key={item.ageGroup} className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span className="text-xs text-gray-700">{item.ageGroup}</span>
                    <span className="text-xs font-semibold text-gray-900">{item.percentage}%</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="mt-auto w-full">
                Explore More
              </Button>
            </div>

            {/* Dining Revenue */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Dining Revenue</h3>
              <ChartContainer config={diningRevenueConfig} className="h-[180px]">
                <AreaChart data={diningRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11 }}
                    tickMargin={6}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickMargin={6}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Area type="monotone" dataKey="breakfast" stackId="1" stroke="#D3D6E0" fill="#D3D6E0" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="lunch" stackId="1" stroke="#BCBFCC" fill="#BCBFCC" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="dinner" stackId="1" stroke="#6E7180" fill="#6E7180" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="snacks" stackId="1" stroke="#1E1E24" fill="#1E1E24" fillOpacity={0.6} />
                  <ChartLegend content={ChartLegendContent} />
                </AreaChart>
              </ChartContainer>
              <Button variant="outline" size="sm" className="mt-auto w-full">
                Explore More
              </Button>
            </div>
          </div>

          {/* Row 2: Ceezaa App Usage, Most Popular Experiences & Loyalty Program */}
          <div className="grid grid-cols-3 gap-3 flex-1">
            {/* Ceezaa App Usage */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-4 h-4 text-primary" />
                <h3 className="text-base font-semibold text-gray-900">Ceezaa App Usage</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Active Users</span>
                    <span className="text-base font-bold text-gray-900">78%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full" style={{ width: "78%", backgroundColor: "#6E7180" }} />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2">Most Viewed Sections</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Experiences</span>
                      <span className="font-semibold text-gray-900">342</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Social Feed</span>
                      <span className="font-semibold text-gray-900">298</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Dining Menu</span>
                      <span className="font-semibold text-gray-900">245</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Events</span>
                      <span className="font-semibold text-gray-900">187</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Map</span>
                      <span className="font-semibold text-gray-900">156</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Profile</span>
                      <span className="font-semibold text-gray-900">134</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Popular Experiences */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Most Popular Experiences</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-gray-200 text-[10px] font-medium text-gray-500">
                  <div>Experience</div>
                  <div className="text-right">Bookings</div>
                  <div className="text-right">Rating</div>
                </div>
                {[
                  { name: "City Tour", bookings: 89, rating: 4.8 },
                  { name: "Surfing", bookings: 67, rating: 4.9 },
                  { name: "Cooking", bookings: 54, rating: 4.7 },
                  { name: "Pub Crawl", bookings: 48, rating: 4.6 },
                  { name: "Yoga", bookings: 43, rating: 4.9 },
                  { name: "Hiking", bookings: 38, rating: 4.7 },
                ].map((exp) => (
                  <div key={exp.name} className="grid grid-cols-3 gap-2 py-1.5 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-[10px] font-medium text-gray-900">{exp.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-semibold text-gray-900">{exp.bookings}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-[10px] font-semibold text-gray-900">{exp.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-primary" />
                <h3 className="text-base font-semibold text-gray-900">Loyalty Program</h3>
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#D3D6E0" }} />
                      <span className="text-xs text-gray-700">Bronze</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">324</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#BCBFCC" }} />
                      <span className="text-xs text-gray-700">Silver</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">189</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#6E7180" }} />
                      <span className="text-xs text-gray-700">Gold</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">76</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#1E1E24" }} />
                      <span className="text-xs text-gray-700">Platinum</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#000000" }} />
                      <span className="text-xs text-gray-700">Diamond</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-900">18</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-0.5">Points Redeemed</p>
                  <p className="text-xl font-bold text-gray-900">12,450</p>
                  <p className="text-xs text-green-600 mt-0.5">+18% from last period</p>
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
