'use client'
import { motion } from 'motion/react'
import { ArrowUpRightIcon, MailIcon, XIcon } from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import {
  EducationPreview,
  JobExperienceDropdown,
} from '@/components/ui/work-exp'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const ROLE_TAGS = [
  'Backend AI',
  'LLM workflows',
  'Production systems',
  'Platform reliability',
]

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 border-b border-zinc-200/80 pb-3 dark:border-zinc-800/80">
      <div>
        <p className="mb-1 font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-500">
          {eyebrow}
        </p>
        <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
          {title}
        </h3>
      </div>
    </div>
  )
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-20 sm:space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="grid gap-6 border-y border-zinc-200 py-8 sm:grid-cols-[1.25fr_0.75fr] sm:gap-10 sm:py-10 dark:border-zinc-800">
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-500">
              Available for backend and AI product roles
            </p>
            <h1 className="max-w-2xl text-3xl leading-tight font-semibold text-zinc-950 sm:text-5xl dark:text-zinc-50">
              I build dependable AI systems after the prototype stage.
            </h1>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Backend AI Engineer focused on production-grade backend systems,
              LLM-powered workflows, agentic applications, and
              reliability-focused infrastructure.
            </p>
            <div className="flex flex-wrap gap-2">
              {ROLE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-7 max-w-2xl space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            I work at the intersection of backend engineering, AI product
            development, and systems that need to become dependable production
            software.
          </p>
          <p>
            My experience includes AI SDR/CRM automation, lead enrichment,
            campaign orchestration, billing workflows, real-time communication,
            document extraction, and RAG-based research systems.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionHeading eyebrow="Proof" title="Selected Projects" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name + project.id}
              className="group space-y-3"
            >
              <div className="relative rounded-xl bg-zinc-100 p-1 ring-1 ring-zinc-200/70 transition-colors duration-200 ring-inset group-hover:bg-zinc-200/60 dark:bg-zinc-900 dark:ring-zinc-800 dark:group-hover:bg-zinc-800">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1 pb-3">
                <header className="mb-2 flex items-start justify-between gap-4">
                  <Link
                    href={project.blog}
                    className="text-base leading-snug font-semibold text-zinc-950 transition-colors duration-200 hover:text-[oklch(0.58_0.16_45)] dark:text-zinc-50 dark:hover:text-[oklch(0.78_0.12_65)]"
                    aria-label={`Read more about ${project.name}`}
                  >
                    {project.name}
                  </Link>
                  <a
                    className="relative inline-flex shrink-0 items-center gap-1 rounded-full border border-zinc-200 px-2 py-1 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} project`}
                  >
                    Link
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </header>

                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <Link
                  href={project.blog}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.5_0.14_45)] transition-colors duration-200 hover:text-zinc-950 dark:text-[oklch(0.74_0.11_65)] dark:hover:text-zinc-50"
                  aria-label={`Read more about ${project.name}`}
                >
                  Read more
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionHeading eyebrow="History" title="Work Experience" />
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <JobExperienceDropdown key={job.id} job={job} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionHeading eyebrow="Training" title="Education" />
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((education) => (
            <EducationPreview key={education.school} education={education} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SectionHeading eyebrow="Contact" title="Connect" />
        <p className="mb-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Reach out for AI engineering, backend platform, or full-stack roles
          with strong backend ownership.
        </p>
        <div className="flex flex-wrap items-center justify-start gap-3">
          <MagneticSocialLink link={`mailto:${EMAIL}`}>
            <MailIcon className="h-3.5 w-3.5" />
            {EMAIL}
          </MagneticSocialLink>
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
