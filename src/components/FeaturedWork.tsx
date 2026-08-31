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
          A company that produces and sells compliance content was relying on several
          separate tools to showcase its catalog of video and SCORM microlearning
          materials to prospective customers. The experience was fragmented,
          difficult to search and organize, and limited the company's ability to
          create a polished, cohesive sales experience around its content.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          I initially came in to solve a specific technical problem: making SCORM
          microlearning modules accessible directly through a modern web application.
          That work expanded into the design and development of a custom platform that
          brought the company's video, SCORM, and supporting materials into one place.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          The platform now gives the company a central system for managing its content
          catalog, assembling curated presentations for prospects, controlling
          customer access, delivering purchased materials, and tracking engagement. I
          continue to maintain and expand the platform while consulting on new
          capabilities, workflow improvements, and the technical direction of the
          product.
        </p>

        <h4 className="mt-8 text-lg font-semibold">
          What I built
        </h4>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 marker:text-slate-500">
          <li>
            A web-based SCORM player that runs existing microlearning packages
            directly within the customer-facing platform
          </li>
          <li>
            An admin dashboard for uploading, organizing, searching, and managing a
            large catalog of compliance content
          </li>
          <li>
            Presentation tools for assembling selected videos, SCORM modules, and
            related materials into polished customer demos
          </li>
          <li>
            A secure customer portal for accessing assigned presentations and
            purchased materials
          </li>
          <li>
            User access controls, expiration settings, downloads, and account
            management
          </li>
          <li>
            Support for client-specific and language-specific versions of existing
            content
          </li>
          <li>
            Analytics for tracking content views and customer engagement
          </li>
        </ul>

        <p className="mt-8 text-lg font-medium leading-relaxed">
          The result replaced a fragmented sales and demo workflow with a
          purpose-built platform for managing, showcasing, delivering, and expanding
          the company's compliance content.
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
