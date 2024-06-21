import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { LogIn, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Logo from "@/assets/logo.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface RouteProps {
  href?: string;
  label: string;
  items?: RouteProps[];
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Xususiaytlar",
  },
  {
    href: "#sponsors",
    label: "Hamkorlar",
  },
  {
    href: "#about",
    label: "Biz haqimizda",
  },
  {
    href: "#faq",
    label: "TSS",
  },
  {
    href: "/vacancy",
    label: "Vakansiya",
  },
  {
    label: "Reyting",
    items: [
      {
        label: "OTM",
        items: [
          {
            href: "rating/otm/davlat",
            label: "Davlat sectoriga tegishli",
          },
          {
            href: "rating/otm/nodavlat",
            label: "Nodavlat sectoriga tegishli",
          },
          {
            href: "rating/otm/umumiy",
            label: "Umumiy",
          },
        ],
      },
      {
        label: "XTM",
        items: [
          {
            href: "rating/xtm/davlat",
            label: "Davlat sectoriga tegishli",
          },
          {
            href: "rating/xtm/nodavlat",
            label: "Nodavlat sectoriga tegishli",
          },
        ],
      },
    ],
  },
  {
    label: "Taqqoslash",
    items: [
      {
        href: '/compare/otm',
        label: "OTM",
      },
      {
        href: '/compare/xtm',
        label: "XTM",
      },
      {
        href: '/compare/mtm',
        label: "MTM",
      },
    ],
  },
];

const CollapsibleNavItem = ({ label, items }: RouteProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full relative "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
           variant='secondary'
           className="hover:bg-green-500 hover:bg-opacity-40"
          >
            {label}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {items && (
            <div className="absolute p-4 mt-2 rounded-md bg-muted top-5 left-5 z-10">
              {items.map((subItem) =>
                subItem.items ? (
                  <CollapsibleNavItem key={subItem.label} {...subItem} />
                ) : (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    className={`${buttonVariants({ variant: "link" })}`}
                  >
                    {subItem.label}
                  </a>
                )
              )}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img src={Logo} alt="Logo" className="w-9 mr-2" />
              Reyting
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Reyting</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map((route) =>
                    route.items ? (
                      <CollapsibleNavItem key={route.label} {...route} />
                    ) : (
                      <a
                        key={route.label}
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {route.label}
                      </a>
                    )
                  )}
                  <a
                    rel="noreferrer noopener"
                    href=""
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <LogIn className="mr-2 w-5 h-5" />
                    Kirish
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route) =>
              route.items ? (
                <CollapsibleNavItem key={route.label} {...route} />
              ) : (
                <a
                  key={route.label}
                  href={route.href}
                  className={`text-[17px] ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href=""
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <LogIn className="mr-2 w-5 h-5" />
              Kirish
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
