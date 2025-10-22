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
  Share2,
  Award,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
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
const occupancyData = [
  { date: "Sep 23", occupancy: 72 },
  { date: "Sep 24", occupancy: 75 },
  { date: "Sep 25", occupancy: 68 },
  { date: "Sep 26", occupancy: 82 },
  { date: "Sep 27", occupancy: 88 },
  { date: "Sep 28", occupancy: 91 },
  { date: "Sep 29", occupancy: 94 },
  { date: "Sep 30", occupancy: 89 },
  { date: "Oct 1", occupancy: 85 },
  { date: "Oct 2", occupancy: 78 },
  { date: "Oct 3", occupancy: 73 },
  { date: "Oct 4", occupancy: 76 },
  { date: "Oct 5", occupancy: 79 },
  { date: "Oct 6", occupancy: 82 },
  { date: "Oct 7", occupancy: 86 },
  { date: "Oct 8", occupancy: 90 },
  { date: "Oct 9", occupancy: 92 },
  { date: "Oct 10", occupancy: 88 },
  { date: "Oct 11", occupancy: 84 },
  { date: "Oct 12", occupancy: 81 },
  { date: "Oct 13", occupancy: 85 },
  { date: "Oct 14", occupancy: 89 },
  { date: "Oct 15", occupancy: 93 },
  { date: "Oct 16", occupancy: 96 },
  { date: "Oct 17", occupancy: 94 },
  { date: "Oct 18", occupancy: 91 },
  { date: "Oct 19", occupancy: 87 },
  { date: "Oct 20", occupancy: 83 },
  { date: "Oct 21", occupancy: 86 },
  { date: "Oct 22", occupancy: 90 },
];

const bookingSourcesData = [
  { source: "Ceezaa Direct", bookings: 245 },
  { source: "OTAs", bookings: 182 },
  { source: "Walk-ins", bookings: 89 },
  { source: "Returning Guests", bookings: 134 },
];

const demographicsData = [
  { ageGroup: "18-24", value: 285, percentage: 35 },
  { ageGroup: "25-34", value: 325, percentage: 40 },
  { ageGroup: "35-44", value: 130, percentage: 16 },
  { ageGroup: "45+", value: 73, percentage: 9 },
];

const nationalitiesData = [
  { country: "🇺🇸 USA", guests: 156 },
  { country: "🇬🇧 UK", guests: 124 },
  { country: "🇩🇪 Germany", guests: 98 },
  { country: "🇦🇺 Australia", guests: 87 },
  { country: "🇨🇦 Canada", guests: 76 },
  { country: "🇫🇷 France", guests: 69 },
];

const diningRevenueData = [
  { date: "Week 1", breakfast: 1200, lunch: 800, dinner: 1500, snacks: 400 },
  { date: "Week 2", breakfast: 1350, lunch: 920, dinner: 1680, snacks: 450 },
  { date: "Week 3", breakfast: 1180, lunch: 780, dinner: 1420, snacks: 380 },
  { date: "Week 4", breakfast: 1420, lunch: 950, dinner: 1750, snacks: 520 },
];

const ratingTrendData = [
  { week: "Week 1", rating: 4.3 },
  { week: "Week 2", rating: 4.4 },
  { week: "Week 3", rating: 4.5 },
  { week: "Week 4", rating: 4.6 },
];

const revenueByCategory = [
  { category: "Accommodations", value: 42500, percentage: 65 },
  { category: "Experiences", value: 12800, percentage: 20 },
  { category: "Dining", value: 7800, percentage: 12 },
  { category: "Upsells", value: 1950, percentage: 3 },
];

const dailyRevenueData = [
  { day: "Oct 1", current: 2100, previous: 1800 },
  { day: "Oct 3", current: 2350, previous: 2000 },
  { day: "Oct 5", current: 1980, previous: 1750 },
  { day: "Oct 7", current: 2600, previous: 2200 },
  { day: "Oct 9", current: 2850, previous: 2400 },
  { day: "Oct 11", current: 2420, previous: 2100 },
  { day: "Oct 13", current: 2780, previous: 2350 },
  { day: "Oct 15", current: 3100, previous: 2650 },
  { day: "Oct 17", current: 2950, previous: 2500 },
  { day: "Oct 19", current: 2680, previous: 2300 },
  { day: "Oct 21", current: 2890, previous: 2450 },
];

const socialActivityData = [
  { week: "Week 1", posts: 124, events: 45, reviews: 38 },
  { week: "Week 2", posts: 145, events: 52, reviews: 43 },
  { week: "Week 3", posts: 132, events: 48, reviews: 41 },
  { week: "Week 4", posts: 158, events: 61, reviews: 49 },
];

// Chart Configs
const occupancyConfig = {
  occupancy: {
    label: "Occupancy %",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const bookingSourcesConfig = {
  bookings: {
    label: "Bookings",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const diningRevenueConfig = {
  breakfast: {
    label: "Breakfast",
    color: "#f97316",
  },
  lunch: {
    label: "Lunch",
    color: "#eab308",
  },
  dinner: {
    label: "Dinner",
    color: "#06b6d4",
  },
  snacks: {
    label: "Snacks",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

const ratingConfig = {
  rating: {
    label: "Average Rating",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const revenueConfig = {
  current: {
    label: "Current Period",
    color: "hsl(var(--primary))",
  },
  previous: {
    label: "Previous Period",
    color: "#94a3b8",
  },
} satisfies ChartConfig;

const socialConfig = {
  posts: {
    label: "Posts Created",
    color: "#f97316",
  },
  events: {
    label: "Events Joined",
    color: "#06b6d4",
  },
  reviews: {
    label: "Reviews Left",
    color: "#8b5cf6",
  },
} satisfies ChartConfig;

const COLORS = ["#f97316", "#06b6d4", "#8b5cf6", "#eab308"];

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
              <p className="text-xs text-gray-500">Front Desk</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Analytics Dashboard */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Overview</h1>
              <p className="text-gray-500 mt-1">Track your hostel performance and insights</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Date Range Selector */}
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Last 30 Days</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              {/* Export Button */}
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-4 gap-4">
            {/* Total Guests */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  12.5%
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">813</p>
              <p className="text-sm text-gray-500 mt-1">Total Guests</p>
            </div>

            {/* Occupancy Rate */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <BedDouble className="w-5 h-5 text-primary" />
                <span className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  8.3%
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">86%</p>
              <p className="text-sm text-gray-500 mt-1">Occupancy Rate</p>
            </div>

            {/* Average Stay Duration */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <Moon className="w-5 h-5 text-primary" />
                <span className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  5.2%
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">4.2</p>
              <p className="text-sm text-gray-500 mt-1">Avg Stay (nights)</p>
            </div>

            {/* Revenue */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  15.8%
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">$65,050</p>
              <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
            </div>
          </div>

          {/* Occupancy & Bookings Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Occupancy Over Time */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Occupancy Over Time</h3>
              <ChartContainer config={occupancyConfig} className="h-[250px]">
                <LineChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                    domain={[0, 100]}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Line
                    type="monotone"
                    dataKey="occupancy"
                    stroke="var(--color-occupancy)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-occupancy)", r: 3 }}
                  />
                </LineChart>
              </ChartContainer>
            </div>

            {/* Booking Sources */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Sources</h3>
              <ChartContainer config={bookingSourcesConfig} className="h-[250px]">
                <BarChart data={bookingSourcesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="source"
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Bar dataKey="bookings" fill="var(--color-bookings)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          {/* Guest Analytics Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Guest Demographics */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Guest Demographics</h3>
              <div className="flex items-center justify-center h-[250px]">
                <ChartContainer config={{}} className="w-full h-full">
                  <PieChart>
                    <Pie
                      data={demographicsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {demographicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={ChartTooltipContent} />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {demographicsData.map((item, index) => (
                  <div key={item.ageGroup} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-700">{item.ageGroup}</span>
                    <span className="text-sm font-semibold text-gray-900 ml-auto">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Nationalities */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Nationalities</h3>
              <div className="space-y-3">
                {nationalitiesData.map((item) => (
                  <div key={item.country} className="flex items-center">
                    <span className="text-sm font-medium text-gray-700 w-32">{item.country}</span>
                    <div className="flex-1 mx-3">
                      <div className="h-7 bg-gray-100 rounded-md overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.guests / nationalitiesData[0].guests) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">{item.guests}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Dining Performance */}
          <div className="grid grid-cols-2 gap-4">
            {/* Most Popular Experiences */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Most Popular Experiences</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-4 gap-4 pb-2 border-b border-gray-200 text-sm font-medium text-gray-500">
                  <div className="col-span-2">Experience Name</div>
                  <div className="text-right">Bookings</div>
                  <div className="text-right">Rating</div>
                </div>
                {[
                  { name: "City Walking Tour", bookings: 89, revenue: "$3,115", rating: 4.8, trend: "+12%" },
                  { name: "Surfing Lessons", bookings: 67, revenue: "$4,690", rating: 4.9, trend: "+8%" },
                  { name: "Cooking Class", bookings: 54, revenue: "$2,430", rating: 4.7, trend: "+15%" },
                  { name: "Pub Crawl", bookings: 48, revenue: "$1,680", rating: 4.6, trend: "+5%" },
                  { name: "Yoga Sessions", bookings: 43, revenue: "$860", rating: 4.9, trend: "+22%" },
                ].map((exp) => (
                  <div key={exp.name} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-0">
                    <div className="col-span-2">
                      <p className="text-sm font-medium text-gray-900">{exp.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{exp.revenue}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{exp.bookings}</p>
                      <p className="text-xs text-green-600">{exp.trend}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{exp.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dining Revenue */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dining Revenue</h3>
              <ChartContainer config={diningRevenueConfig} className="h-[250px]">
                <AreaChart data={diningRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Area type="monotone" dataKey="breakfast" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="lunch" stackId="1" stroke="#eab308" fill="#eab308" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="dinner" stackId="1" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="snacks" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  <ChartLegend content={ChartLegendContent} />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          {/* Guest Engagement Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {/* Ceezaa App Usage */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Ceezaa App Usage</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <span className="text-lg font-bold text-gray-900">78%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "78%" }} />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Most Viewed Sections</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Experiences</span>
                      <span className="font-semibold text-gray-900">342</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Social Feed</span>
                      <span className="font-semibold text-gray-900">298</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">Dining Menu</span>
                      <span className="font-semibold text-gray-900">245</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Share2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Social Activity</h3>
              </div>
              <ChartContainer config={socialConfig} className="h-[180px]">
                <BarChart data={socialActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 11 }}
                    tickMargin={8}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickMargin={8}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Bar dataKey="posts" fill="var(--color-posts)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="events" fill="var(--color-events)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="reviews" fill="var(--color-reviews)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Loyalty Program */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">Loyalty Program</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-600" />
                      <span className="text-sm text-gray-700">Bronze</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">324</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400" />
                      <span className="text-sm text-gray-700">Silver</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">189</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="text-sm text-gray-700">Gold</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">76</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Points Redeemed</p>
                  <p className="text-2xl font-bold text-gray-900">12,450</p>
                  <p className="text-xs text-green-600 mt-1">+18% from last period</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews & Satisfaction */}
          <div className="grid grid-cols-2 gap-4">
            {/* Average Rating Trend */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Rating Trend</h3>
              <ChartContainer config={ratingConfig} className="h-[200px]">
                <LineChart data={ratingTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="week"
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                    domain={[4.0, 5.0]}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Line
                    type="monotone"
                    dataKey="rating"
                    stroke="var(--color-rating)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-rating)", r: 4 }}
                  />
                  {/* Target line */}
                  <Line
                    type="monotone"
                    dataKey={() => 4.5}
                    stroke="#94a3b8"
                    strokeWidth={1}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>

            {/* Review Sentiment */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Sentiment</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">82%</p>
                  <p className="text-sm text-gray-600 mt-2">Positive</p>
                  <p className="text-xs text-gray-500 mt-1">+5% vs last month</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-3xl font-bold text-gray-600">13%</p>
                  <p className="text-sm text-gray-600 mt-2">Neutral</p>
                  <p className="text-xs text-gray-500 mt-1">-2% vs last month</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">5%</p>
                  <p className="text-sm text-gray-600 mt-2">Negative</p>
                  <p className="text-xs text-gray-500 mt-1">-3% vs last month</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-2">Top Keywords</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Clean</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Friendly Staff</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Great Location</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Social</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">Value</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-2 gap-4">
            {/* Revenue by Category */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Category</h3>
              <div className="flex items-center justify-center h-[220px]">
                <ChartContainer config={{}} className="w-full h-full">
                  <PieChart>
                    <Pie
                      data={revenueByCategory}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={(entry) => `${entry.percentage}%`}
                    >
                      {revenueByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={ChartTooltipContent} />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {revenueByCategory.map((item, index) => (
                  <div key={item.category} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <div>
                      <p className="text-xs text-gray-600">{item.category}</p>
                      <p className="text-sm font-semibold text-gray-900">${item.value.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Revenue Trend */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Revenue Trend</h3>
              <ChartContainer config={revenueConfig} className="h-[220px]">
                <AreaChart data={dailyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickMargin={8}
                  />
                  <ChartTooltip content={ChartTooltipContent} />
                  <Area
                    type="monotone"
                    dataKey="current"
                    stroke="var(--color-current)"
                    fill="var(--color-current)"
                    fillOpacity={0.3}
                  />
                  <Area
                    type="monotone"
                    dataKey="previous"
                    stroke="var(--color-previous)"
                    fill="var(--color-previous)"
                    fillOpacity={0.1}
                    strokeDasharray="5 5"
                  />
                  <ChartLegend content={ChartLegendContent} />
                </AreaChart>
              </ChartContainer>
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
