import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { APP_ROUTE } from '@/lib/const';
import { Bot } from '@/lib/database/schema';

type BotCardProps = {
  bot: Bot;
};
export function BotCard({ bot }: BotCardProps) {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>{bot.name}</CardTitle>
        <CardDescription>{bot.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid px-4 pb-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>GPT</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">ChatGPT</p>
            <p className="text-sm text-muted-foreground">Conversational AI assistant</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end px-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={`${APP_ROUTE.BOTS.INDEX}/${bot.id}`}>
            <Icons.settings className="w-4 h-4 mr-2" />
            Manage
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CreateBotCard() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="space-y-2">
        <CardTitle>Create New Bot</CardTitle>
        <CardDescription>Click the button below to start building your own AI bot.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="shadow-none gap-2" asChild>
          <Link href={APP_ROUTE.BOTS.CREATE}>
            <Icons.createDataSource className="h-4 w-4" />
            Create
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
