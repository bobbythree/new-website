export default function FeaturedWork() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 text-slate-800">
      <h2 className="text-4xl font-semibold md:text-5xl">
        Featured Work
      </h2>

      <div className="mt-10 max-w-3xl">
        <h3 className="text-2xl font-semibold md:text-3xl">
          Content Management and Delivery Platform
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          A company that makes compliance training materials came to me looking
          for a better way to preview and present SCORM packages to prospective
          customers. Their content was spread across separate tools for video,
          SCORM, storage, and sharing, which made the sales and demo process
          harder than it needed to be.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          I designed and built a single custom platform that brought those needs
          together in one place, with an administrative system for managing the
          company's training library and a customer-facing portal for presenting
          that content to prospects and clients.
        </p>

        <h4 className="mt-8 text-lg font-semibold">
          What I built
        </h4>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 marker:text-slate-500">
          <li>
            An admin dashboard for uploading, organizing, and managing training
            content
          </li>
          <li>
            A customer portal for securely previewing and accessing assigned
            materials
          </li>
          <li>
            Presentation tools for grouping videos, SCORM courses, and related
            content into polished demos
          </li>
          <li>
            User access controls, expiration settings, downloads, and account
            management
          </li>
          <li>
            Analytics for tracking content views and customer engagement
          </li>
        </ul>

        <p className="mt-8 text-lg font-medium leading-relaxed">
          The result is a simpler workflow for the team and a much better way
          to organize, present, and sell their training content.
        </p>
      </div>

      <div className="mt-20 max-w-3xl">
        <h3 className="text-2xl font-semibold md:text-3xl">
          Technical Leadership for a Production Mobile Platform
        </h3>

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          I work directly with the owner of an established production mobile
          application as the technical lead and consulting partner for the
          platform. He drives the product vision and business direction; I help
          translate that vision into architecture, engineering decisions,
          infrastructure, and working software.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          My role spans the overall health and direction of the product,
          including simplifying deployments, improving CI/CD, cleaning up and
          restructuring the codebase, modernizing parts of the stack, managing
          the repository, and designing the architecture for new mobile and web
          capabilities. I also contribute production code across the
          application and backend.
        </p>

        <h4 className="mt-8 text-lg font-semibold">
          Current work
        </h4>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 marker:text-slate-500">
          <li>
            Improving application architecture and cleaning up a complex
            existing codebase
          </li>
          <li>
            Managing the repository, branching strategy, and technical
            direction of the project
          </li>
          <li>
            Improving build, release, deployment, and CI/CD workflows
          </li>
          <li>
            Rebuilding search so users can more reliably find relevant
            facilities and services
          </li>
          <li>
            Advising on AI integration for handling customer queries and
            connecting users with appropriate resources
          </li>
          <li>
            Designing the architecture for an agency portal that allows
            organizations to manage multiple facilities
          </li>
          <li>
            Contributing production code across the mobile application,
            backend, and supporting web functionality
          </li>
        </ul>

        <p className="mt-8 text-lg font-medium leading-relaxed">
          The work is helping move the product toward a cleaner architecture, a
          more dependable release process, and a stronger technical foundation
          for future growth.
        </p>
      </div>
    </section>
  )
}
