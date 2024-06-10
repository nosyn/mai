import {
  Book,
  Bot,
  Code2,
  LifeBuoy,
  LucideIcon,
  Settings2,
  SquareUser,
  TerminalSquare,
  Square,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type Navigation = {
  Icon: LucideIcon;
  content: string;
  href: string;
}[];

const mainNavigation: Navigation = [
  {
    Icon: TerminalSquare,
    content: "Playground",
    href: "/",
  },
  {
    Icon: Bot,
    content: "Bot",
    href: "/bot",
  },
  {
    Icon: Code2,
    content: "API",
    href: "#",
  },
  {
    Icon: Book,
    content: "Documentation",
    href: "#",
  },
  {
    Icon: Settings2,
    content: "Settings",
    href: "#",
  },
];

export default function SideBar() {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Square className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        {mainNavigation.map(({ Icon, content, href }) => (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Models"
              >
                <Link href={href}>
                  <Icon className="size-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              {content}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Help"
            >
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Account"
            >
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}
