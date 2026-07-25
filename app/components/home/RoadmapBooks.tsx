import Link from "next/link";

export function RoadmapBooks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            কীভাবে শুরু করবেন?
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-rose-400"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                1
              </div>
            </div>
            <div className="mb-4 text-emerald-500">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-bold text-slate-800">কমিউনিটিতে যোগ দিন</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              প্রথমে আমাদের WhatsApp Community-তে যোগ দিন। এখানে থেকেই আপনার শেখার যাত্রা শুরু হবে।
            </p>

            {/* Arrow (desktop only) */}
            <div className="absolute -right-4 top-16 hidden text-slate-300 lg:block">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                2
              </div>
            </div>
            <div className="mb-4 text-emerald-500">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-bold text-slate-800">Pinyin উচ্চারণ শিখুন</h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              চাইনিজ শেখার প্রথম ধাপ হলো Pinyin Pronunciation। আমাদের Pinyin পেজেই ভিডিও লেসন রয়েছে। সেগুলো দেখে প্রতিটি উচ্চারণ ভালোভাবে শিখুন।
            </p>
            <Link
              href="https://drive.google.com/drive/folders/12fEKjDBRU5NgnpgE4WluoRMer94LIkaQ"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Pinyin শিখুন
            </Link>

            {/* Arrow */}
            <div className="absolute -right-4 top-16 hidden text-slate-300 lg:block">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                3
              </div>
            </div>
            <div className="mb-4 text-emerald-500">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-bold text-slate-800">Voice Recording জমা দিন</h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              উচ্চারণ শেখা হলে New Member Practice Group-এ যোগ দিয়ে নিজের উচ্চারণের Voice Recording পাঠান। আমাদের মডারেটররা আপনার উচ্চারণ যাচাই করবেন।
            </p>
            <Link
              href="https://chat.whatsapp.com/EBP79wEaAfAEvMtMee6HTY"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Practice Group - এ যোগ দিন
            </Link>

            {/* Arrow */}
            <div className="absolute -right-4 top-16 hidden text-slate-300 lg:block">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                4
              </div>
            </div>
            <div className="mb-4 text-emerald-500">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="mb-3 text-lg font-bold text-slate-800">Level 1-এ যোগ দিন</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              উচ্চারণ ঠিক হলে আপনাকে Level 1 ক্লাস গ্রুপে যোগ করা হবে। এরপর আপনার নিয়মিত Chinese Learning Journey শুরু হবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}