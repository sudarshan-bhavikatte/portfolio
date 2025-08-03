import { Mail, Github, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="animate-slide-up">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">{"Let's connect!"}</h2>
      <p className="text-slate-600 mb-6">
        {
          "Always up for a good conversation about tech, projects, or just life in general. Drop me a message and let's chat!"
        }
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:sudarshanbhavikatte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-teal-600 hover:bg-teal-700 text-amber-50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
        </a>
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="border-slate-300 hover:bg-amber-100 bg-transparent text-slate-700 hover:border-teal-300 hover:text-teal-700 hover:scale-105 transition-all duration-200"
          >
            <Clipboard className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </a>
      </div>
    </section>
  );
}
