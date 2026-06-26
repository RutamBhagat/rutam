import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Education, WorkExperience } from '@/app/data'

interface JobExperienceDropdownProps {
  job: WorkExperience
}

interface EducationDropdownProps {
  education: Education
}

export function JobExperienceDropdown({ job }: JobExperienceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <Spotlight
        className="bgr bg-neutral-200 from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div className="relative h-full w-full rounded-[15px] bg-white dark:bg-zinc-950">
        <button
          onClick={toggleOpen}
          className="flex w-full cursor-pointer flex-row justify-between p-4 text-left"
        >
          <div>
            <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {job.start} - {job.end}
            </p>
            {isOpen ? (
              <ChevronUpIcon className="h-4 w-4 text-zinc-500" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-zinc-500" />
            )}
          </div>
        </button>

        <motion.div
          variants={{
            open: { height: 'auto', opacity: 1, paddingBottom: '1rem' },
            closed: { height: 0, opacity: 0, paddingBottom: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="h-full overflow-hidden px-4"
        >
          {job.details && job.details.length > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
              {job.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
export function EducationPreview({ education }: EducationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <Spotlight
        className="bgr bg-neutral-200 from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div className="relative h-full w-full rounded-[15px] bg-white dark:bg-zinc-950">
        <button
          onClick={toggleOpen}
          className="flex w-full cursor-pointer flex-row justify-between p-4 text-left"
        >
          <div>
            <h4 className="font-normal dark:text-zinc-100">
              {education.degree}
            </h4>
            {/* <p className="text-zinc-500 dark:text-zinc-400">
              {education.degree}
            </p> */}
          </div>
          <div className="flex items-center gap-2">
            {isOpen ? (
              <ChevronUpIcon className="h-4 w-4 text-zinc-500" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-zinc-500" />
            )}
          </div>
        </button>

        <motion.div
          variants={{
            open: { height: 'auto', opacity: 1, paddingBottom: '1rem' },
            closed: { height: 0, opacity: 0, paddingBottom: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="h-full overflow-hidden px-4"
        >
          <p className="text-zinc-600 dark:text-zinc-400">{education.school}</p>
          <p className="text-zinc-600 dark:text-zinc-400">
            {education.start} - {education.end}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            CGPA: {education.cgpa}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
