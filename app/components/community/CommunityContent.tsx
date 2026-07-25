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
    image: "/assets/community/robin.png",
    whatsapp: "8801787881334", // Remove + and spaces for wa.me link
    manages: "All Community Groups"
  },

  // Co-Admins
  coAdmins: [
    { 
      name: "Tanvir Hasan", 
      role: "Co-Admin",
      image: "/images/tanvir.jpg",
      whatsapp: "8801234567891",
      manages: "Web Development & Programming Groups"
    },
    { 
      name: "Rakibul Islam", 
      role: "Co-Admin",
      image: "/images/rakibul.jpg",
      whatsapp: "8801234567892",
      manages: "Design & Marketing Groups"
    }
  ],

  // Management Team
  managers: [
    { name: "Atikur Rahman", image: "/images/atikur.jpg", manages: "General Support & Queries", whatsapp: "8801234567893" },
    { name: "Farjana Akter", image: "/images/farjana.jpg", manages: "Event Management & Scheduling", whatsapp: "8801234567894" },
    { name: "Mehedi Hasan", image: "/images/mehedi.jpg", manages: "Content Moderation & Quality", whatsapp: "8801234567895" },
    { name: "Nusrat Jahan", image: "/images/nusrat.jpg", manages: "Member Engagement & Feedback", whatsapp: "8801234567896" },
    { name: "Sabbir Ahmed", image: "/images/sabbir.jpg", manages: "Technical Support & Issues", whatsapp: "8801234567897" },
    { name: "Jannatul Ferdous", image: "/images/jannatul.jpg", manages: "New Member Onboarding", whatsapp: "8801234567898" }
  ],

  // Teachers
  teachers: [
    { 
      name: "Arafat Hossain", 
      subject: "Web Development", 
      icon: Monitor, 
      color: "blue",
      image: "/images/arafat.jpg",
      whatsapp: "8801234567899",
      group: "Web Dev Mastery Group",
      schedule: "Mon, Wed, Fri • 8:00 PM"
    },
    { 
      name: "Sadia Afrin", 
      subject: "Graphic Design", 
      icon: Palette, 
      color: "pink",
      image: "/images/sadia.jpg",
      whatsapp: "8801234567900",
      group: "Design Creators Hub",
      schedule: "Tue, Thu • 7:00 PM"
    },
    { 
      name: "Mahmudul Hasan", 
      subject: "Programming", 
      icon: Code, 
      color: "purple",
      image: "/images/mahmudul.jpg",
      whatsapp: "8801234567901",
      group: "Code Masters Community",
      schedule: "Mon, Wed • 9:00 PM"
    },
    { 
      name: "Sumaiya Islam", 
      subject: "Digital Marketing", 
      icon: Megaphone, 
      color: "orange",
      image: "/images/sumaiya.jpg",
      whatsapp: "8801234567902",
      group: "Digital Growth Network",
      schedule: "Tue, Thu, Sat • 6:00 PM"
    },
    { 
      name: "Hasibul Hasan", 
      subject: "Content Writing", 
      icon: PenTool, 
      color: "green",
      image: "/images/hasibul.jpg",
      whatsapp: "8801234567903",
      group: "Content Writers Guild",
      schedule: "Fri, Sat • 8:00 PM"
    }
  ]
};

// Helper function to format WhatsApp number for display
const formatWhatsApp = (number: string) => {
  if (number.startsWith('880')) {
    return `+${number.slice(0, 4)} ${number.slice(4, 8)}-${number.slice(8)}`;
  }
  return number;
};

export function CommunityContent() {
  const { benefits, groups, events } = communityPageData;
  
  return (
    <>
      {/* Main Community Section - No Background */}
      <div className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 border border-gray-200 px-4 sm:px-6 py-2 rounded-full mb-6">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">{communityData.header.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900">
              {communityData.header.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              {communityData.header.subtitle}
            </p>
          </div>

          {/* Founder & Co-Admins */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Founder */}
              <div className="md:col-span-1 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <Crown className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-600">{communityData.founder.role}</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 mb-4">
                  <img 
                    src={communityData.founder.image} 
                    alt={communityData.founder.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-300"
                  />
                  <div className="text-center">
                    <p className="text-xl font-semibold text-gray-900">{communityData.founder.name}</p>
                    <span className="text-sm text-yellow-600">✦ Lead Admin</span>
                  </div>
                </div>
                {/* WhatsApp Card */}
                <div className="mt-4 border border-green-200 rounded-xl p-4 hover:border-green-300 transition-all duration-300">
                  <a 
                    href={`https://wa.me/${communityData.founder.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <MessageCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                          <p className="text-xs text-gray-500">{formatWhatsApp(communityData.founder.whatsapp)}</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <UsersRound className="w-3 h-3" />
                      <span>Manages: {communityData.founder.manages}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Co-Admins */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {communityData.coAdmins.map((admin, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <Shield className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{admin.name}</p>
                        <span className="text-sm text-gray-500">{admin.role}</span>
                      </div>
                    </div>
                    {/* WhatsApp Card */}
                    <div className="border border-blue-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-300">
                      <a 
                        href={`https://wa.me/${admin.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <MessageCircle className="w-4 h-4 text-blue-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                              <p className="text-xs text-gray-500">{formatWhatsApp(admin.whatsapp)}</p>
                            </div>
                          </div>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Active</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                          <UsersRound className="w-3 h-3" />
                          <span>Manages: {admin.manages}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Community Management Team
                </h2>
                <p className="text-sm text-gray-500 mt-1">Working behind the scenes to keep everything organized and smooth.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {communityData.managers.map((manager, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center gap-3 mb-3">
                    <img 
                      src={manager.image} 
                      alt={manager.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{manager.name}</p>
                      <span className="text-xs text-emerald-600">Manager</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-3">
                    <Briefcase className="w-3 h-3 text-emerald-600" />
                    <span>{manager.manages}</span>
                  </div>
                  {/* WhatsApp Card */}
                  <div className="border border-emerald-200 rounded-lg p-3 hover:border-emerald-300 transition-all duration-300">
                    <a 
                      href={`https://wa.me/${manager.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span className="text-xs text-gray-600">{formatWhatsApp(manager.whatsapp)}</span>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Active</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teachers Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-pink-50 rounded-lg">
                <Award className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our Teachers
                </h2>
                <p className="text-sm text-gray-500 mt-1">Experienced mentors who guide you on your learning journey.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {communityData.teachers.map((teacher, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 bg-${teacher.color}-50 rounded-lg`}>
                      <teacher.icon className={`w-5 h-5 text-${teacher.color}-500`} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">{teacher.subject}</span>
                      <div className="flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3 text-blue-500" />
                        <span className="text-xs text-blue-600">Verified Mentor</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 mb-3">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className={`w-16 h-16 rounded-full object-cover border-2 border-${teacher.color}-200`}
                    />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">{teacher.name}</p>
                      <span className="text-xs text-gray-500">Teacher</span>
                    </div>
                  </div>
                  {/* WhatsApp & Group Details */}
                  <div className="space-y-2">
                    <div className={`border border-${teacher.color}-200 rounded-lg p-3 hover:border-${teacher.color}-300 transition-all duration-300`}>
                      <a 
                        href={`https://wa.me/${teacher.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MessageCircle className={`w-3 h-3 text-${teacher.color}-500`} />
                            <span className="text-xs text-gray-600">{formatWhatsApp(teacher.whatsapp)}</span>
                          </div>
                          <span className={`text-xs bg-${teacher.color}-100 text-${teacher.color}-700 px-2 py-0.5 rounded-full`}>Active</span>
                        </div>
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <UsersRound className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-600">{teacher.group}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3 text-gray-400" />
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