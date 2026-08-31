import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("sending");

      const response = await fetch("https://formspree.io/f/mwlklpzk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 max-w-2xl space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-800"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-800"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-800"
        >
          Company or organization
          <span className="ml-1 font-normal text-slate-500">
            (optional)
          </span>
        </label>

        <input
          id="company"
          name="company"
          type="text"
          maxLength={150}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        />
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-slate-800"
        >
          What can I help with?
        </label>

        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          required
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Building a custom application">
            Building a custom application
          </option>
          <option value="Improving existing software">
            Improving existing software
          </option>
          <option value="Workflow or process automation">
            Workflow or process automation
          </option>
          <option value="AI integration">
            AI integration
          </option>
          <option value="Technical consulting">
            Technical consulting
          </option>
          <option value="Something else">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-800"
        >
          Tell me about your project
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          required
          maxLength={5000}
          placeholder="What are you looking to build, improve, or solve?"
          className="mt-2 w-full resize-y rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-sky-700 px-6 py-3 font-medium text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending"
          ? "Sending..."
          : "Request a Consultation"}
      </button>

      {status === "success" && (
        <p className="text-sm text-slate-700">
          Thanks — your message has been sent. I'll be in touch soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong while sending your message. Please try again.
        </p>
      )}

      {status === "idle" && (
        <p className="text-sm leading-relaxed text-slate-600">
          I'll review your message and get back to you to schedule a
          conversation about your project, goals, and next steps.
        </p>
      )}
    </form>
  );
}
