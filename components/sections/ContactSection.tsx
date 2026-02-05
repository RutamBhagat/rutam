"use client"

import { useEffect, useRef } from "react"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function ContactSection() {
  gsap.registerPlugin(ScrollTrigger)
  const t = useTranslations("contact")
  const sectionRef = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".title-animation"),
            {
              y: "200%",
            },
            {
              y: 0,
            }
          )

          gsap.fromTo(
            q(".end-title"),
            { scale: 0 },
            { scale: 1, ease: "back.inOut" }
          )
        },
      },
    })
  }, [])

  // Set Active Session

  const contactSectionOnView = useScrollActive(sectionRef)

  const { setSection } = useSectionStore()

  useEffect(() => {
    contactSectionOnView && setSection("#contact")
  }, [contactSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="max-h-max bg-gray-100 dark:bg-[#161D1F] py-[140px] px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-40 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <div className="title-animation dark:text-white text-lg">
              {t("question")}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="title-animation text-5xl navlink text-accentColor">
              {t("cta")}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href={t("links.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("linkedin")}
              className="rounded-full group hover:border-accentColor flex items-center gap-3 border py-2 px-5 text-sm"
            >
              <div className="font-semibold group-hover:scale-105 dark:text-white text-base">
                in
              </div>
              <div className="dark:text-white group-hover:scale-105">
                {t("linkedin")}
              </div>
            </Link>

            <Link
              href={t("links.twitter")}
              aria-label={t("twitter")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full group hover:border-accentColor flex items-center gap-3 border py-2 px-5 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="stroke-black group-hover:scale-105 dark:stroke-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <div className="dark:text-white group-hover:scale-105">
                {t("twitter")}
              </div>
            </Link>

            <Link
              href={t("links.github")}
              aria-label={t("github")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full group flex transition-all items-center gap-3 hover:border-accentColor border py-2 px-5 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="dark:fill-white fill-black group-hover:fill-accentColor transition-colors"
              >
                <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
              </svg>
              <div className="dark:text-white group-hover:scale-105">
                {t("github")}
              </div>
            </Link>

            <Link
              href={t("links.email")}
              aria-label={t("email")}
              className="rounded-full group flex transition-all items-center gap-3 hover:border-accentColor border py-2 px-5 text-sm"
            >
              <svg
                viewBox="0 49.4 512 399.42"
                width="18"
                height="18"
                className="dark:fill-white fill-black group-hover:fill-accentColor transition-colors"
              >
                <path d="M48 448h81.454V251L0 163.727V414c0 19.287 15.622 34 34.91 34H48z" />
                <path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251v197.818z" />
                <path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891l-32.582 24.436z" />
                <path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727 116.364 251z" />
                <path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" />
              </svg>
              <div className="dark:text-white group-hover:scale-105">
                {t("email")}
              </div>
            </Link>

            <Link
              href={t("links.cal")}
              aria-label={t("cal")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full group flex transition-all items-center gap-3 hover:border-accentColor border py-2 px-5 text-sm"
            >
              <svg
                viewBox="0 0 101 22"
                width="18"
                height="18"
                className="dark:fill-white fill-black group-hover:fill-accentColor transition-colors"
              >
                <path d="M10.0582 20.817C4.32115 20.817 0 16.2763 0 10.6704C0 5.04589 4.1005 0.467773 10.0582 0.467773C13.2209 0.467773 15.409 1.43945 17.1191 3.66311L14.3609 5.96151C13.2025 4.72822 11.805 4.11158 10.0582 4.11158C6.17833 4.11158 4.04533 7.08268 4.04533 10.6704C4.04533 14.2582 6.38059 17.1732 10.0582 17.1732C11.7866 17.1732 13.2577 16.5566 14.4161 15.3233L17.1375 17.7151C15.501 19.8453 13.2577 20.817 10.0582 20.817Z" />
                <path d="M29.0161 5.88601H32.7304V20.4612H29.0161V18.331C28.2438 19.8446 26.9566 20.8536 24.4927 20.8536C20.5577 20.8536 17.4133 17.4341 17.4133 13.2297C17.4133 9.02528 20.5577 5.60571 24.4927 5.60571C26.9383 5.60571 28.2438 6.61477 29.0161 8.12835V5.88601ZM29.1264 13.2297C29.1264 10.95 27.5634 9.06266 25.0995 9.06266C22.7274 9.06266 21.1828 10.9686 21.1828 13.2297C21.1828 15.4346 22.7274 17.3967 25.0995 17.3967C27.5451 17.3967 29.1264 15.4907 29.1264 13.2297Z" />
                <path d="M35.3599 0H39.0742V20.4427H35.3599V0Z" />
                <path d="M40.7291 18.5182C40.7291 17.3223 41.6853 16.3132 42.9908 16.3132C44.2964 16.3132 45.2158 17.3223 45.2158 18.5182C45.2158 19.7515 44.278 20.7605 42.9908 20.7605C41.7037 20.7605 40.7291 19.7515 40.7291 18.5182Z" />
                <path d="M59.4296 18.1068C58.0505 19.7885 55.9543 20.8536 53.4719 20.8536C49.0404 20.8536 45.7858 17.4341 45.7858 13.2297C45.7858 9.02528 49.0404 5.60571 53.4719 5.60571C55.8623 5.60571 57.9402 6.61477 59.3193 8.20309L56.4508 10.6136C55.7336 9.71667 54.7958 9.04397 53.4719 9.04397C51.0999 9.04397 49.5553 10.95 49.5553 13.211C49.5553 15.472 51.0999 17.378 53.4719 17.378C54.9062 17.378 55.8991 16.6306 56.6346 15.6215L59.4296 18.1068Z" />
                <path d="M59.7422 13.2297C59.7422 9.02528 62.9968 5.60571 67.4283 5.60571C71.8598 5.60571 75.1144 9.02528 75.1144 13.2297C75.1144 17.4341 71.8598 20.8536 67.4283 20.8536C62.9968 20.8349 59.7422 17.4341 59.7422 13.2297ZM71.3449 13.2297C71.3449 10.95 69.8003 9.06266 67.4283 9.06266C65.0563 9.04397 63.5117 10.95 63.5117 13.2297C63.5117 15.4907 65.0563 17.3967 67.4283 17.3967C69.8003 17.3967 71.3449 15.4907 71.3449 13.2297Z" />
                <path d="M100.232 11.5482V20.4428H96.518V12.4638C96.518 9.94119 95.3412 8.85739 93.576 8.85739C91.921 8.85739 90.7442 9.67958 90.7442 12.4638V20.4428H87.0299V12.4638C87.0299 9.94119 85.8346 8.85739 84.0878 8.85739C82.4329 8.85739 80.9802 9.67958 80.9802 12.4638V20.4428H77.2659V5.8676H80.9802V7.88571C81.7525 6.31607 83.15 5.53125 85.3014 5.53125C87.3425 5.53125 89.0525 6.5403 89.9903 8.24074C90.9281 6.50293 92.3072 5.53125 94.8079 5.53125C97.8603 5.54994 100.232 7.86702 100.232 11.5482Z" />
              </svg>
              <div className="dark:text-white group-hover:scale-105">
                {t("cal")}
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-accentColor text-lg font-semibold">
              {t("name")}
            </div>
            <div className="dark:text-white text-sm">{t("role")}</div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="title-animation w-full md:max-w-[80%] text-center dark:text-gray-400">
              {t("description")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
