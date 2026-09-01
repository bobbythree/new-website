import ContactForm from "../components/ContactForm";
import { Link } from "react-router";

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-8">
      <Link
        to="/"
        className="text-sm font-medium text-sky-700 hover:text-sky-800"
      >
        ← Back to home
      </Link>

      <h1 className="mt-8 text-4xl font-semibold text-slate-800">
        Book a consultation
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Tell me a little about what you’re working on, what’s getting in the way,
        or what you’d like to build.
      </p>

      <div className="mt-6">
        <ContactForm />
      </div>
    </main>
  )
}

