import { Input } from '@/components/ui/input';
import { createDataSource } from '@/lib/actions/data-sources';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export const CreateBotForm = () => {
  return (
    <form action={createDataSource}>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Bot Name" />
      </div>
      <Button variant="secondary" className="shadow-none mt-2" type="submit">
        Create
      </Button>
    </form>
  );
};
