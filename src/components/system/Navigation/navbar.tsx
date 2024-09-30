"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../toggleBtnThemeMode";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Image from 'next/image';

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuBar() {
  return (
    <nav className="flex justify-center m-5">
      <NavigationMenu>
        <NavigationMenuList className="space-x-3">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="h-6 w-6">
                        <Image
                          src="/logo.png"
                          alt="RBX Robótica"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Desenvolvimento Web
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Nossa equipe altamente qualificada está pronta para
                        entregar soluções digitais garatindo a proteção
                        dos seus dados e o sucesso do seu negócio.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/nosso-modelo-de-negocios" title="Nosso Modelo de Negócios">
                  Atuamos como parceiros estratégicos desenvolvendo sistemas personalizados.
                </ListItem>
                <ListItem href="/nossa-infraestrutura" title="Nossa infraestrutura">
                  Segurança e hiperconvergência para Experiência do Usuário.
                </ListItem>
                <ListItem href="/processo-de-desenvolvimento" title="Processo de Desenvolvimento">
                  Desde a concepção da ideia até a sua implementação e manutenção.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Portfólio</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/quem-somos" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Quem Somos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <ModeToggle />

          <div className="flex space-x-4 md:hidden lg:hidden">
            <InstagramLogoIcon className="cursor-pointer h-5 w-5 hover:text-primary md:hidden lg:hidden" />
            <LinkedInLogoIcon className="cursor-pointer h-5 w-5 hover:text-primary md:hidden lg:hidden" />
            <GitHubLogoIcon className="cursor-pointer h-5 w-5 hover:text-primary md:hidden lg:hidden" />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
