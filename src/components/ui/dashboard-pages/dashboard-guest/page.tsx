// "use client"

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import {
//   Home,
//   Users,
//   BedDouble,
//   Calendar,
//   MapPin,
//   Utensils,
//   BarChart3,
//   Settings,
//   CheckCircle2,
//   AlertCircle,
//   User,
//   Ticket,
//   History,
//   Activity,
//   StickyNote,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";
// import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const interestData = [
//   { category: "Adventure", interest: 85 },
//   { category: "Food & Dining", interest: 92 },
//   { category: "Nightlife", interest: 76 },
//   { category: "Wellness", interest: 63 },
//   { category: "Culture", interest: 65 },
//   { category: "Social", interest: 95 },
// ];

// const chartConfig = {
//   interest: {
//     label: "Interest Level",
//     color: "hsl(var(--primary))",
//   },
// } satisfies ChartConfig;

// export default function HostelDashboardGuest() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar Navigation */}
//       <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
//         {/* Logo */}
//         <div className="p-5 border-b border-gray-200 flex items-center justify-center">
//           <Image
//             src="/ceezaa-logo.svg"
//             alt="Ceezaa"
//             width={120}
//             height={40}
//             className="h-10 w-auto"
//           />
//         </div>

//         {/* Navigation Items */}
//         <nav className="flex-1 p-4 space-y-1">
//           <NavItem icon={Home} label="Dashboard" />
//           <NavItem icon={Users} label="Guests" active />
//           <NavItem icon={BedDouble} label="Rooms" />
//           <NavItem icon={Calendar} label="Bookings" />
//           <NavItem icon={MapPin} label="Experiences" />
//           <NavItem icon={Utensils} label="Dining" />
//           <NavItem icon={BarChart3} label="Analytics" />
//           <NavItem icon={Settings} label="Settings" />
//         </nav>

//         {/* User Info at Bottom */}
//         <div className="p-4 border-t border-gray-200">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
//               CK
//             </div>
//             <div>
//               <p className="text-sm font-medium">Chinni Kanu</p>
//               <p className="text-xs text-gray-500">Front Desk</p>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 overflow-hidden">
//         <div className="h-full flex flex-col p-4">
//           {/* Top Section - Profile and Interests */}
//           <div className="grid grid-cols-3 gap-3 mb-3">
//             {/* Profile Section */}
//             <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center gap-4">
//                   {/* Profile Photo */}
//                   <div className="relative">
//                     <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-bold border-2 border-white shadow-lg">
//                       SD
//                     </div>
//                     <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-gray-400 rounded-full border-2 border-white" />
//                   </div>

//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">Scott Doggett</h2>
//                     <div className="flex items-center gap-2 mt-1.5">
//                       <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
//                         Ceezaa ID: CZ-2344
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2 mt-2">
//                       <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
//                         3rd Stay
//                       </span>
//                       <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
//                         Gold Member
//                       </span>
//                       <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
//                         Check-out: Oct 25
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex items-center gap-2">
//                   <Button variant="outline" size="sm" className="h-8 px-4 text-sm">
//                     Message
//                   </Button>
//                   <Button variant="outline" size="sm" className="h-8 px-4 text-sm">
//                     Edit
//                   </Button>
//                   <Button size="sm" className="h-8 px-4 text-white text-sm bg-primary hover:bg-primary/90">
//                     Check In
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* Interests Section */}
//             <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//               <div className="flex items-center gap-2 mb-2">
//                 <Sparkles className="w-5 h-5 text-primary" />
//                 <h3 className="text-base font-semibold text-gray-900">Interests</h3>
//               </div>
//               <div className="flex flex-wrap gap-1.5">
//                 <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
//                   Yoga
//                 </span>
//                 <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
//                   Nightlife
//                 </span>
//                 <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
//                   Coffee
//                 </span>
//                 <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
//                   Photography
//                 </span>
//                 <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
//                   Solo Travel
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Content Grid */}
//           <div className="grid grid-cols-5 gap-3 flex-1 min-h-0">
//             {/* Left Column - Main Info */}
//             <div className="col-span-2 space-y-3">
//               {/* Current Stay Card */}
//               <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center gap-2">
//                     <BedDouble className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Current Stay</h3>
//                   </div>
//                   <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 border border-gray-200">
//                     <CheckCircle2 className="w-4 h-4 mr-1" />
//                     Paid
//                   </span>
//                 </div>

//                 <div className="space-y-2">
//                   <div>
//                     <p className="text-sm text-gray-500">Room</p>
//                     <p className="text-base font-semibold">204 - Deluxe Dorm</p>
//                   </div>

//                   <div className="grid grid-cols-3 gap-3">
//                     <div>
//                       <p className="text-sm text-gray-500">Check-in</p>
//                       <p className="text-sm font-medium">Oct 20, 2025</p>
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-500">Check-out</p>
//                       <p className="text-sm font-medium">Oct 25, 2025</p>
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-500">Duration</p>
//                       <p className="text-sm font-medium">5 nights</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Guest Information */}
//               <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center gap-2">
//                     <User className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Guest Information</h3>
//                   </div>
//                   <button className="text-sm text-primary font-medium hover:underline">
//                     View All →
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2.5">
//                     <div>
//                       <p className="text-sm text-gray-500 mb-1">Email</p>
//                       <p className="text-sm font-medium">myemail@email.com</p>
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-500 mb-1">Phone</p>
//                       <p className="text-sm font-medium">+1 (416) 942-4493</p>
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-500 mb-1">Nationality</p>
//                       <p className="text-sm font-medium">Canadian</p>
//                     </div>
//                   </div>

//                   <div className="space-y-2.5">
//                     <div>
//                       <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
//                       <p className="text-sm font-medium">March 19, 2003 (22 years)</p>
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-500 mb-1.5">Dietary Preferences</p>
//                       <div className="flex flex-wrap gap-1.5">
//                         <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md">
//                           Vegan
//                         </span>
//                         <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md">
//                           Gluten-Free
//                         </span>
//                       </div>
//                     </div>

//                     <div>
//                       <p className="text-sm text-gray-500 mb-1">Languages</p>
//                       <p className="text-sm font-medium">English, French</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Active Bookings */}
//               <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center gap-2">
//                     <Ticket className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Active Bookings</h3>
//                   </div>
//                   <button className="text-sm text-primary font-medium hover:underline">
//                     View All →
//                   </button>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                     <div>
//                       <p className="text-sm font-medium">City Walking Tour</p>
//                       <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-semibold">$35</p>
//                       <span className="text-sm text-gray-600">Confirmed</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                     <div>
//                       <p className="text-sm font-medium">Morning Yoga Session</p>
//                       <p className="text-sm text-gray-500">Oct 24, 7:00 AM</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-semibold">Free</p>
//                       <span className="text-sm text-gray-600">Registered</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Additional Info */}
//             <div className="col-span-3 flex flex-col gap-3">
//               {/* Top Row - Booking History and Recent Activity */}
//               <div className="grid grid-cols-2 gap-3">
//                 {/* Booking History */}
//                 <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//                   <div className="flex items-center gap-2 mb-3">
//                     <History className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Booking History</h3>
//                   </div>

//                   <div className="space-y-2">
//                     <div className="pb-2 border-b border-gray-100 last:border-0">
//                       <p className="text-sm font-medium text-gray-900">Summer 2024</p>
//                       <p className="text-sm text-gray-500 mt-1">Aug 15-22 · 7 nights</p>
//                     </div>
//                     <div className="pb-2 border-b border-gray-100 last:border-0">
//                       <p className="text-sm font-medium text-gray-900">Spring Break</p>
//                       <p className="text-sm text-gray-500 mt-1">Mar 10-14 · 4 nights</p>
//                     </div>
//                     <div className="pb-2 border-b border-gray-100 last:border-0">
//                       <p className="text-sm font-medium text-gray-900">New Year 2024</p>
//                       <p className="text-sm text-gray-500 mt-1">Dec 29-Jan 2 · 4 nights</p>
//                     </div>
//                   </div>

//                   <button className="text-sm text-primary font-medium hover:underline mt-3">
//                     View All →
//                   </button>
//                 </div>

//                 {/* Recent Activity */}
//                 <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
//                   <div className="flex items-center gap-2 mb-3">
//                     <Activity className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
//                   </div>

//                   <div className="space-y-2.5">
//                     <div className="flex gap-3">
//                       <div className="w-2 h-2 rounded-full bg-gray-400 mt-2" />
//                       <div>
//                         <p className="text-sm text-gray-900">Checked in</p>
//                         <p className="text-sm text-gray-500">2 days ago</p>
//                       </div>
//                     </div>

//                     <div className="flex gap-3">
//                       <div className="w-2 h-2 rounded-full bg-gray-400 mt-2" />
//                       <div>
//                         <p className="text-sm text-gray-900">Booked City Tour</p>
//                         <p className="text-sm text-gray-500">1 day ago</p>
//                       </div>
//                     </div>

//                     <div className="flex gap-3">
//                       <div className="w-2 h-2 rounded-full bg-gray-400 mt-2" />
//                       <div>
//                         <p className="text-sm text-gray-900">Registered for Yoga</p>
//                         <p className="text-sm text-gray-500">5 hours ago</p>
//                       </div>
//                     </div>

//                     <div className="flex gap-3">
//                       <div className="w-2 h-2 rounded-full bg-gray-400 mt-2" />
//                       <div>
//                         <p className="text-sm text-gray-900">Dinner reservation</p>
//                         <p className="text-sm text-gray-500">2 hours ago</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Row - Notes & Alerts and Interest Profile */}
//               <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
//                 {/* Notes & Alerts */}
//                 <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col">
//                   <div className="flex items-center gap-2 mb-3">
//                     <StickyNote className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Notes & Alerts</h3>
//                   </div>

//                   <div className="space-y-2.5 flex-1 overflow-y-auto">
//                     <div className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                       <AlertCircle className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">Special Request</p>
//                         <p className="text-sm text-gray-700 mt-1">
//                           Quiet room away from common areas
//                         </p>
//                       </div>
//                     </div>

//                     <div className="p-3 bg-gray-50 rounded-lg">
//                       <p className="text-sm text-gray-500 mb-1">Staff Note - Oct 20</p>
//                       <p className="text-sm text-gray-900">
//                         Interested in photography spots. Recommended Hidden Gems tour.
//                       </p>
//                     </div>
//                     <div className="p-3 bg-gray-50 rounded-lg">
//                       <p className="text-sm text-gray-500 mb-1">Staff Note - Oct 20</p>
//                       <p className="text-sm text-gray-900">
//                         Loves Pinot Sage from the cafe. Offer discount.
//                       </p>
//                     </div>
//                   </div>

//                   <button className="text-sm text-primary font-medium hover:underline mt-3">
//                     Add Note +
//                   </button>
//                 </div>

//                 {/* Interest Profile */}
//                 <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col">
//                   <div className="flex items-center gap-2 mb-3">
//                     <TrendingUp className="w-5 h-5 text-primary" />
//                     <h3 className="text-base font-semibold text-gray-900">Interest Profile</h3>
//                   </div>

//                   <div className="flex-1 flex items-center justify-center">
//                     <ChartContainer
//                       config={chartConfig}
//                       className="w-full h-full max-h-[250px]"
//                     >
//                       <RadarChart data={interestData}>
//                         <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//                         <PolarAngleAxis dataKey="category" />
//                         <PolarGrid />
//                         <Radar
//                           dataKey="interest"
//                           fill="var(--color-secondary)"
//                           fillOpacity={0.5}
//                           dot={{
//                             r: 4,
//                             fillOpacity: 1,
//                           }}
//                         />
//                       </RadarChart>
//                     </ChartContainer>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// // Helper component for navigation items
// function NavItem({
//   icon: Icon,
//   label,
//   active = false,
// }: {
//   icon: React.ElementType;
//   label: string;
//   active?: boolean;
// }) {
//   return (
//     <button
//       className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
//         active
//           ? "bg-primary/10 text-primary font-medium"
//           : "text-gray-600 hover:bg-gray-50"
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//       <span className="text-sm">{label}</span>
//     </button>
//   );
// }
