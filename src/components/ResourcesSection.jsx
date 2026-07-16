import { Link } from "react-router-dom";
import {
  BookOpen,
  PlayCircle,
  Download,
  ExternalLink,
} from "lucide-react";

const books = [
  {
    level: "HSK 1",
    color: "bg-green-500",
    image: "https://dummyimage.com/320x420/22c55e/ffffff&text=HSK+1",
    pdf: "https://drive.google.com/file/d/HSK1_BOOK_ID/view",
  },
  {
    level: "HSK 2",
    color: "bg-orange-500",
    image: "https://dummyimage.com/320x420/f97316/ffffff&text=HSK+2",
    pdf: "https://drive.google.com/file/d/HSK2_BOOK_ID/view",
  },
  {
    level: "HSK 3",
    color: "bg-cyan-500",
    image: "https://dummyimage.com/320x420/06b6d4/ffffff&text=HSK+3",
    pdf: "https://drive.google.com/file/d/HSK3_BOOK_ID/view",
  },
  {
    level: "HSK 4",
    color: "bg-red-500",
    image: "https://dummyimage.com/320x420/ef4444/ffffff&text=HSK+4",
    pdf: "https://drive.google.com/file/d/HSK4_BOOK_ID/view",
  },
  {
    level: "HSK 5",
    color: "bg-blue-600",
    image: "https://dummyimage.com/320x420/2563eb/ffffff&text=HSK+5",
    pdf: "https://drive.google.com/file/d/HSK5_BOOK_ID/view",
  },
  {
    level: "HSK 6",
    color: "bg-purple-600",
    image: "https://dummyimage.com/320x420/9333ea/ffffff&text=HSK+6",
    pdf: "https://drive.google.com/file/d/HSK6_BOOK_ID/view",
  },
];

const videos = [
  {
    title: "HSK 1 Lesson 1",
    image: "https://dummyimage.com/600x350/22c55e/ffffff&text=HSK+1+Video",
    link: "https://drive.google.com/file/d/VIDEO1_ID/view",
  },
  {
    title: "HSK 2 Grammar",
    image: "https://dummyimage.com/600x350/f97316/ffffff&text=HSK+2+Video",
    link: "https://drive.google.com/file/d/VIDEO2_ID/view",
  },
  {
    title: "HSK 3 Reading",
    image: "https://dummyimage.com/600x350/06b6d4/ffffff&text=HSK+3+Video",
    link: "https://drive.google.com/file/d/VIDEO3_ID/view",
  },
  {
    title: "HSK 4 Listening",
    image: "https://dummyimage.com/600x350/ef4444/ffffff&text=HSK+4+Video",
    link: "https://drive.google.com/file/d/VIDEO4_ID/view",
  },
];

export default function ResourcesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
            RESOURCES
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Chinese Learning Resources
          </h2>

          <p className="mt-3 text-slate-500">
            HSK 1-6 Books, PDF, Videos and Practice Materials.
          </p>
        </div>

        {/* Books */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <BookOpen className="text-red-500" />
              HSK Books
            </h3>

            <Link
              to="/books"
              className="flex items-center gap-2 text-red-600 hover:text-red-700"
            >
              View All <ExternalLink size={18} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {books.map((book) => (
              <div
                key={book.level}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={book.image}
                  alt={book.level}
                  className="h-64 w-full object-cover"
                />

                <div className="p-4">
                  <h4 className="font-bold">{book.level}</h4>

                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="mb-8 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <PlayCircle className="text-blue-600" />
              Video Lessons
            </h3>

            <Link
              to="/videos"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              View All <ExternalLink size={18} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((video) => (
              <div
                key={video.title}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle
                      size={60}
                      className="text-white drop-shadow-lg"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold">{video.title}</h4>

                  <a
                    href={video.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}