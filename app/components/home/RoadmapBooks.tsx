import Link from "next/link";
import { 
  Users, 
  Volume2, 
  Mic, 
  BarChart3, 
  Calendar, 
  GraduationCap,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
  Star,
  Sparkles,
  Award
} from "lucide-react";

export function RoadmapBooks() {
  return (
    <div className="bg-linear-to-b from-white via-slate-50 to-white">
      {/* Main Roadmap Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Title */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-emerald-500" />
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                Your Learning Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              How to Get Started?
            </h2>
            <div className="mx-auto mt-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-emerald-500" />
              <div className="h-1 w-6 rounded-full bg-emerald-300" />
              <div className="h-1 w-3 rounded-full bg-emerald-200" />
            </div>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Follow these steps to begin your Chinese learning journey with us
            </p>
          </div>

          {/* Enhanced Steps with Premium Design */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              <div className="absolute -top-4 left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">
                  1
                </div>
              </div>
              
              <div className="mt-6 mb-5 text-emerald-500">
                <Users className="h-10 w-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Join Community
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Start your learning journey by joining our WhatsApp Community. 
                Connect with fellow learners and get ready to begin.
              </p>
              
              <div className="absolute -right-3 top-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-emerald-300 group-hover:text-emerald-500 transition-colors" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              <div className="absolute -top-4 left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">
                  2
                </div>
              </div>
              
              <div className="mt-6 mb-5 text-emerald-500">
                <Volume2 className="h-10 w-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Learn Pinyin
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Master Chinese pronunciation with our comprehensive Pinyin video 
                lessons. Perfect your tones and sounds.
              </p>
              
              <Link
                href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-emerald-200 hover:scale-[1.02]"
              >
                Start Learning Pinyin
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <div className="absolute -right-3 top-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-emerald-300 group-hover:text-emerald-500 transition-colors" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              <div className="absolute -top-4 left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">
                  3
                </div>
              </div>
              
              <div className="mt-6 mb-5 text-emerald-500">
                <Mic className="h-10 w-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Submit Voice Recording
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Join our New Member Practice Group and submit your pronunciation 
                recordings. Get feedback from our moderators.
              </p>
              
              <Link
                href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-emerald-200 hover:scale-[1.02]"
              >
                Join Practice Group
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <div className="absolute -right-3 top-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-emerald-300 group-hover:text-emerald-500 transition-colors" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              <div className="absolute -top-4 left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-200">
                  4
                </div>
              </div>
              
              <div className="mt-6 mb-5 text-emerald-500">
                <BarChart3 className="h-10 w-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Join Level 1
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Once your pronunciation is verified, you'll be added to Level 1 
                classes. Begin your regular Chinese learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Class Routine & Learning Path Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-emerald-200 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 relative">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            
            {/* Left Card - Class Routine with Premium Design */}
            <div className="group relative rounded-3xl bg-linear-to-br from-slate-50 to-white p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              {/* Decorative badge */}
              <div className="absolute -top-3 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-emerald-200">
                  <Star className="h-3 w-3 fill-white" />
                  Weekly Schedule
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 p-2.5 shadow-lg shadow-emerald-200">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Class Routine
                  </h2>
                  <p className="text-sm text-slate-500">
                    5 days of live classes every week
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {/* Sunday - Thursday Live Classes */}
                {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"].map((day) => (
                  <div
                    key={day}
                    className="flex items-center justify-between rounded-2xl bg-white px-5 py-3.5 shadow-sm hover:shadow-md transition-all border border-slate-100 hover:border-emerald-100 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="font-semibold text-slate-700">{day}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Class
                    </span>
                  </div>
                ))}

                {/* Thursday - Exam */}
                <div className="flex items-center justify-between rounded-2xl bg-orange-50/70 px-5 py-3.5 shadow-sm hover:shadow-md transition-all border border-orange-100 hover:border-orange-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Award className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-slate-700">Thursday</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-600">
                    Weekly Exam
                  </span>
                </div>

                {/* Friday - Holiday */}
                <div className="flex items-center justify-between rounded-2xl bg-rose-50/70 px-5 py-3.5 shadow-sm hover:shadow-md transition-all border border-rose-100 hover:border-rose-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-slate-700">Friday</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-600">
                    Weekly Off
                  </span>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50/50 px-5 py-4 border border-emerald-100">
                <Clock className="mt-0.5 h-5 w-5 text-emerald-500 shrink-0" />
                <p className="text-sm text-emerald-700 font-medium">
                  Attendance is taken for every class. Stay consistent!
                </p>
              </div>
            </div>

            {/* Right Card - Learning Path with Premium Design */}
            <div className="group relative rounded-3xl bg-linear-to-br from-slate-50 to-white p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
              {/* Decorative badge */}
              <div className="absolute -top-3 right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-amber-500 to-orange-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-amber-200">
                  <GraduationCap className="h-3 w-3" />
                  Learning Path
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-linear-to-br from-amber-500 to-orange-500 p-2.5 shadow-lg shadow-amber-200">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Learning Path
                  </h2>
                  <p className="text-sm text-slate-500">
                    Progress through levels systematically
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                {/* Timeline */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-3 bottom-8 w-1 bg-linear-to-b from-emerald-400 via-emerald-300 to-amber-300 rounded-full" />

                  {[
                    "Pinyin Foundation",
                    "Level 1 - Basics",
                    "Level 2 - Beginner",
                    "Level 3 - Elementary",
                    "...",
                    "Level 12 - Advanced",
                  ].map((level, i) => (
                    <div key={i} className="relative z-10 mb-5 flex items-center gap-4 last:mb-0">
                      <div
                        className={`h-4 w-4 shrink-0 rounded-full border-2 ${
                          level === "..."
                            ? "border-slate-300 bg-white"
                            : "border-emerald-500 bg-emerald-500 shadow-lg shadow-emerald-200"
                        }`}
                      />
                      <span
                        className={`rounded-xl px-4 py-2 text-sm font-medium ${
                          level === "..."
                            ? "text-slate-400 bg-slate-50"
                            : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                        }`}
                      >
                        {level}
                      </span>
                    </div>
                  ))}

                  {/* HSK Preparation */}
                  <div className="relative z-10 mt-2 flex items-center gap-4">
                    <div className="h-4 w-4 shrink-0 rounded-full border-2 border-amber-400 bg-amber-400 shadow-lg shadow-amber-200" />
                    <span className="rounded-xl bg-linear-to-r from-amber-100 to-orange-100 px-4 py-2 text-sm font-semibold text-amber-700">
                      HSK Preparation
                    </span>
                  </div>
                </div>

                {/* Illustration */}
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <div className="relative h-32 w-32">
                      {/* Premium books stack with 3D effect */}
                      <div className="absolute bottom-0 left-3 h-20 w-24 -rotate-6 transform rounded-xl bg-linear-to-br from-blue-400 to-blue-600 shadow-xl shadow-blue-200 transition-transform hover:rotate-0 duration-300" />
                      <div className="absolute bottom-3 left-5 h-20 w-24 -rotate-3 transform rounded-xl bg-linear-to-br from-red-400 to-red-600 shadow-xl shadow-red-200 transition-transform hover:rotate-0 duration-300" />
                      <div className="absolute bottom-6 left-7 h-20 w-24 rotate-2 transform rounded-xl bg-linear-to-br from-amber-400 to-amber-600 shadow-xl shadow-amber-200 transition-transform hover:rotate-0 duration-300" />
                      
                      {/* Graduation cap */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <div className="relative">
                          <GraduationCap className="h-12 w-14 text-slate-800 drop-shadow-lg" />
                          <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="max-w-50px text-sm leading-relaxed text-slate-500 font-medium">
                    Progress to the next level after successfully completing each stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}