import { CalendarDays, CheckCircle2, MessageCircleMore, Users } from "lucide-react";
import { CommunityButton } from "../CommunityButton";
import { communityPageData } from "../site-data";
import { 
  Award, 
  Shield, 
  Star, 
  Monitor, 
  Palette, 
  Code, 
  Megaphone, 
  PenTool,
  ChevronRight,
  Crown,
  UserCheck,
  Phone,
  MessageCircle,
  UsersRound,
  Briefcase,
  Calendar,
  Clock,
  BadgeCheck,
  Sparkles
} from 'lucide-react';

// ============================================
// ALL DATA AT THE TOP - EDIT HERE ONLY
// ============================================
const communityData = {
  // Header
  header: {
    title: "CommunityAdmins",
    subtitle: "Leading our community with passion and dedication.",
    badge: "Community Leaders"
  },

  // Founder
  founder: {
    name: "Kazi Robin",
    role: "Founder & LeadAdmin",
    image: "/images/founder.jpg", // ← Add your image path here
    whatsapp: "+880 1787-881334",
    manages: "All Community Groups"
  },

  // Co-Admins
  coAdmins: [
    { 
      name: "Tanvir Hasan", 
      role: "Co-Admin",
      image: "/images/tanvir.jpg", // ← Add your image path here
      whatsapp: "+880 1234-567891",
      manages: "Web Development & Programming Groups"
    },
    { 
      name: "Rakibul Islam", 
      role: "Co-Admin",
      image: "/images/rakibul.jpg", // ← Add your image path here
      whatsapp: "+880 1234-567892",
      manages: "Design & Marketing Groups"
    }
  ],

  // Management Team
  managers: [
    { name: "Atikur Rahman", image: "/images/atikur.jpg", manages: "General Support & Queries", whatsapp: "+880 1234-567893" },
    { name: "Farjana Akter", image: "/images/farjana.jpg", manages: "Event Management & Scheduling", whatsapp: "+880 1234-567894" },
    { name: "Mehedi Hasan", image: "/images/mehedi.jpg", manages: "Content Moderation & Quality", whatsapp: "+880 1234-567895" },
    { name: "Nusrat Jahan", image: "/images/nusrat.jpg", manages: "Member Engagement & Feedback", whatsapp: "+880 1234-567896" },
    { name: "Sabbir Ahmed", image: "/images/sabbir.jpg", manages: "Technical Support & Issues", whatsapp: "+880 1234-567897" },
    { name: "Jannatul Ferdous", image: "/images/jannatul.jpg", manages: "New Member Onboarding", whatsapp: "+880 1234-567898" }
  ],

  // Teachers
  teachers: [
    { 
      name: "Arafat Hossain", 
      subject: "Web Development", 
      icon: Monitor, 
      color: "blue",
      image: "/images/arafat.jpg",
      whatsapp: "+880 1234-567899",
      group: "Web Dev Mastery Group",
      schedule: "Mon, Wed, Fri • 8:00 PM"
    },
    { 
      name: "Sadia Afrin", 
      subject: "Graphic Design", 
      icon: Palette, 
      color: "pink",
      image: "/images/sadia.jpg",
      whatsapp: "+880 1234-567900",
      group: "Design Creators Hub",
      schedule: "Tue, Thu • 7:00 PM"
    },
    { 
      name: "Mahmudul Hasan", 
      subject: "Programming", 
      icon: Code, 
      color: "purple",
      image: "/images/mahmudul.jpg",
      whatsapp: "+880 1234-567901",
      group: "Code Masters Community",
      schedule: "Mon, Wed • 9:00 PM"
    },
    { 
      name: "Sumaiya Islam", 
      subject: "Digital Marketing", 
      icon: Megaphone, 
      color: "orange",
      image: "/images/sumaiya.jpg",
      whatsapp: "+880 1234-567902",
      group: "Digital Growth Network",
      schedule: "Tue, Thu, Sat • 6:00 PM"
    },
    { 
      name: "Hasibul Hasan", 
      subject: "Content Writing", 
      icon: PenTool, 
      color: "green",
      image: "/images/hasibul.jpg",
      whatsapp: "+880 1234-567903",
      group: "Content Writers Guild",
      schedule: "Fri, Sat • 8:00 PM"
    }
  ]
};

export function CommunityContent() {
  const { benefits, groups, events } = communityPageData;
  
  return (
    <>
   

      {/* Main Community Section - Original Design */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full border border-white/10 mb-6">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-200">{communityData.header.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {communityData.header.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
              {communityData.header.subtitle}
            </p>
          </div>

          {/* Founder & Co-Admins with WhatsApp */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Founder */}
              <div className="md:col-span-1 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400">{communityData.founder.role}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={communityData.founder.image} 
                    alt={communityData.founder.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400/50 shadow-lg shadow-yellow-500/20"
                  />
                  <div>
                    <p className="text-xl font-semibold">{communityData.founder.name}</p>
                    <span className="text-sm text-yellow-400/80">✦ Lead Admin</span>
                  </div>
                </div>
                {/* WhatsApp Card */}
                <div className="mt-4 bg-green-500/10 rounded-xl p-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <MessageCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-300">WhatsApp</p>
                        <p className="text-xs text-gray-400">{communityData.founder.whatsapp}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                    <UsersRound className="w-3 h-3" />
                    <span>Manages: {communityData.founder.manages}</span>
                  </div>
                </div>
              </div>

              {/* Co-Admins */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {communityData.coAdmins.map((admin, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{admin.name}</p>
                        <span className="text-sm text-gray-400">{admin.role}</span>
                      </div>
                    </div>
                    {/* WhatsApp Card */}
                    <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <MessageCircle className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-200">WhatsApp</p>
                            <p className="text-xs text-gray-400">{admin.whatsapp}</p>
                          </div>
                        </div>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Active</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                        <UsersRound className="w-3 h-3" />
                        <span>Manages: {admin.manages}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Management Team with WhatsApp */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Community Management Team
                </h2>
                <p className="text-sm text-gray-400 mt-1">Working behind the scenes to keep everything organized and smooth.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {communityData.managers.map((manager, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={manager.image} 
                      alt={manager.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-200">{manager.name}</p>
                      <span className="text-xs text-emerald-400/70">Manager</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Briefcase className="w-3 h-3 text-emerald-400/50" />
                    <span>{manager.manages}</span>
                  </div>
                  {/* WhatsApp Card */}
                  <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-gray-300">{manager.whatsapp}</span>
                      </div>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teachers Section with WhatsApp & Group Details */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Award className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Our Teachers
                </h2>
                <p className="text-sm text-gray-400 mt-1">Experienced mentors who guide you on your learning journey.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {communityData.teachers.map((teacher, idx) => (
                <div key={idx} className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 bg-${teacher.color}-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <teacher.icon className={`w-5 h-5 text-${teacher.color}-400`} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-400">{teacher.subject}</span>
                      <div className="flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">Verified Mentor</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className={`w-10 h-10 rounded-full object-cover border-2 border-${teacher.color}-400/30`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-200">{teacher.name}</p>
                      <span className="text-xs text-gray-400">Teacher</span>
                    </div>
                  </div>
                  {/* WhatsApp & Group Details */}
                  <div className="space-y-2">
                    <div className={`bg-${teacher.color}-500/10 rounded-lg p-3 border border-${teacher.color}-500/20`}>
                      <div className="flex-col items-center justify-between">
                        <div className="flex items-center gap-2 pb-4">
                          <MessageCircle className={`w-3 h-3 text-${teacher.color}-400`} />
                          <span className="text-xs text-gray-300">{teacher.whatsapp}</span>
                        </div>
                        <span className={`text-xs bg-${teacher.color}-500/20 text-${teacher.color}-300 px-2 py-0.5 rounded-full`}>Active</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <UsersRound className="w-3 h-3 text-gray-500" />
                      <span className="text-gray-300">{teacher.group}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span>{teacher.schedule}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="community-events section site-container">
        <div className="library-heading"><span>{events.kicker}</span><h2>{events.title}</h2></div>
        <div className="event-grid">
          {events.items.map((item) => (
            <article key={item.title}><CalendarDays /><div><b>{item.date}</b><h3>{item.title}</h3><p>{item.time}</p></div></article>
          ))}
        </div>
        <div className="community-join"><MessageCircleMore /><div><h2>{events.joinTitle}</h2><p>{events.joinDescription}</p></div><CommunityButton /></div>
      </section>
    </>
  );
}