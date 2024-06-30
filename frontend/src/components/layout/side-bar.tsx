import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { APP_ROUTE } from '@/lib/const';
import { Book, LifeBuoy, LucideIcon, Settings2, Square, TerminalSquare } from 'lucide-react';
import Link from 'next/link';
import AccountMenu from '../account-menu';

type Navigation = {
  Icon: LucideIcon;
  content: string;
  href: string;
}[];

const mainNavigation: Navigation = [
  {
    Icon: Icons.playground,
    content: 'Playground',
    href: APP_ROUTE.INDEX,
  },
  {
    Icon: Icons.bot,
    content: 'Bot',
    href: APP_ROUTE.BOTS.INDEX,
  },
  {
    Icon: Icons.dataSources,
    content: 'Data Sources',
    href: APP_ROUTE.DATA_SOURCES.INDEX,
  },
  {
    Icon: Book,
    content: 'Documentation',
    href: '/google',
  },
  {
    Icon: Settings2,
    content: 'Settings',
    href: '#',
  },
];

export default function SideBar() {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="link" size="icon" aria-label="Home" asChild>
          <Link href={APP_ROUTE.INDEX}>
            <Icons.logo />
          </Link>
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        {mainNavigation.map(({ Icon, content, href }, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button asChild variant="ghost" size="icon" className="rounded-lg" aria-label="Models">
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
            <Button variant="ghost" size="icon" className="mt-auto rounded-lg" aria-label="Help">
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <AccountMenu />
      </nav>
    </aside>
  );
}
