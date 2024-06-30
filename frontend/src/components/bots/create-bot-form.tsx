import { Input } from '@/components/ui/input';
import { createBotFormAction } from '@/lib/actions/bots';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export const CreateBotForm = () => {
  return (
    <form action={createBotFormAction} className="space-y-2">
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="description">Name</Label>
        <Input type="text" id="name" name="description" placeholder="Description" />
      </div>
      <Button variant="secondary" className="shadow-none mt-2" type="submit">
        Create
      </Button>
    </form>
  );
};
