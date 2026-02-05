import { useState } from "react"
import { HambergerMenu } from "iconsax-react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"

export default function MobileNav() {
  const [opened, setOpened] = useState<boolean>(false)
  const t = useTranslations()

  const router = useRouter()

  const navlinks = [
    { title: t("nav.about"), href: "#about" },
    { title: t("nav.project"), href: "#project" },
    { title: t("nav.contact"), href: "#contact" },
  ]

  return (
    <Sheet open={opened} onOpenChange={(open) => setOpened(open)}>
      <SheetTrigger asChild className="block md:hidden">
        <Button
          className="dark:text-white px-2 flex justify-center items-center"
          variant="default"
          aria-label="Toggle Navbar"
        >
          <HambergerMenu />
          <span className="sr-only">Toggle Navbar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        style={{ zIndex: 1000 }}
        className="w-full  h-full [&>svg]:text-zinc-900 border-0"
      >
        <div className="py-20 w-full flex flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 gap-10 items-center">
          {navlinks.map((navLink) => (
            <div
              // href={navLink.href}
              className="dark:text-white hover:dark:text-accentColor"
              key={navLink.title}
              onClick={(e) => {
                e.preventDefault()
                router.push(navLink.href)

                setOpened(false)
              }}
            >
              {navLink.title}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
