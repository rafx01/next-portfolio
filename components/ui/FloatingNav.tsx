"use client";
import React, { useState, useTransition } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { languages } from "@/data/data";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const t = useTranslations("Nav");
  const tLanguages = useTranslations("Languages");

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className,
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{t(navItem.name)}</span>
          </Link>
        ))}
        <div className="flex flex-row items-center">
          {languages.map((item) => (
            <button
              key={item.locale}
              type="button"
              onClick={() => switchLocale(item.locale)}
              disabled={isPending}
              title={tLanguages(item.locale)}
              aria-label={tLanguages(item.locale)}
              aria-current={item.locale === locale}
              className={cn(
                "lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transition-opacity duration-200",
                item.locale === locale
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-80",
                isPending && "cursor-wait",
              )}
            >
              <img
                src={item.icon}
                alt={tLanguages(item.locale)}
                className="p-2 cursor-pointer"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
