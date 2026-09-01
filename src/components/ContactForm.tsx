import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback": () => void;
          "expired-callback": () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = "0x4AAAAAAEjWa0Ld8JOCYQfN";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let retryTimer: number | undefined;

    function renderTurnstile() {
      if (cancelled || !turnstileContainerRef.current) return;

      if (!window.turnstile) {
        retryTimer = window.setTimeout(renderTurnstile, 100);
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: TURNSTILE_SITE_KEY,
          callback: setTurnstileToken,
          "error-callback": () => setTurnstileToken(null),
          "expired-callback": () => setTurnstileToken(null),
        },
      );
    }

    renderTurnstile();

    return () => {
      cancelled = true;
      if (retryTimer !== undefined) window.clearTimeout(retryTimer);
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
      }
    };
  }, []);

  function resetTurnstile() {
    setTurnstileToken(null);
    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  }

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!turnstileToken) {
      setErrorMessage("Please complete the security check and try again.");
      setStatus("error");
      return;
    }

    formData.set("cf-turnstile-response", turnstileToken);

    try {
      setStatus("sending");
      setErrorMessage("");

      const response = await fetch("https://formspree.io/f/mwlklpzk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          errors?: Array<{ message?: string }>;
          error?: string;
        } | null;
        const message =
          result?.errors?.map((error) => error.message).filter(Boolean).join(" ") ||
          result?.error ||
          "Form submission failed. Please try again.";

        throw new Error(message);
      }

      form.reset();
      resetTurnstile();
      setStatus("success");
    } catch (error) {
      resetTurnstile();
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Form submission failed. Please try again.",
      );
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

      <div ref={turnstileContainerRef} />

      <button
        type="submit"
        disabled={status === "sending" || !turnstileToken}
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
        <p className="text-sm text-red-700">{errorMessage}</p>
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
