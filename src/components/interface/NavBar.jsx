"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "@/components/theme/ButtonDarkMode";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const navigation = [
  { name: "Home Page", href: "/", current: true },
  { name: "Sobre mí", href: "/", current: false },
  { name: "Portafolio", href: "#", current: false },
  { name: "Cursos", href: "#", current: false },
  { name: "Contacto", href: "#", current: false },
  { name: "Recursos", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];


export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white   ">
      {({ open }) => (
        <>
          <div className="fixed top-0 left-0 w-full z-50 bg-white   dark:bg-transparent ">
            <div className="mx-auto max-w-7xl max-[425px]:px-6 max-[425px]:mb-1 w-[96%] max-sm:w-full">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 ">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="/">
                      <div className="max-[320px]:flex-col flex ">
                        <h5 className="font-bold mr-1 text-sky-700 hover:text-emerald-600 ">
                          Speed
                        </h5>
                        <h5 className="font-bold  text-emerald-600 hover:text-sky-700">
                          Concrete.
                        </h5>
                      </div>
                    </Link>
                  </motion.button>
                </div>
                <div className="flex text-black">
                  <Avatar>
                    <AvatarImage src="https://i.imgur.com/ITW6pUq.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              

              </div>
            </div>
          </div>

        </>
      )}
    </Disclosure>
  );
}
