import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  File,
  FileText,
  FrownIcon,
  HelpCircle,
  Image,
  Loader2,
  type LucideIcon,
  Moon,
  Package,
  PackagePlus,
  Plus,
  Settings,
  SquareUser,
  SunMedium,
  TerminalSquare,
  Trash,
  Twitter,
  X,
} from 'lucide-react';
import { Docx } from './docx';
import { Github } from './github';
import { Logo } from './logo';
import { OpenAI } from './openai';
import { Pdf } from './pdf';
import { Sheet } from './sheet';
import { Txt } from './txt';

export type Icon = LucideIcon;

export const Icons = {
  notFound: FrownIcon,
  playground: TerminalSquare,
  bot: Bot,
  createDataSource: PackagePlus,
  dataSources: Package,
  logo: Logo,
  docx: Docx,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  txt: Txt,
  sheet: Sheet,
  add: Plus,
  warning: AlertTriangle,
  user: SquareUser,
  arrowRight: ArrowRight,
  help: HelpCircle,
  sun: SunMedium,
  moon: Moon,
  pdf: Pdf,
  gitHub: Github,
  openAI: OpenAI,
  twitter: Twitter,
  check: Check,
};
