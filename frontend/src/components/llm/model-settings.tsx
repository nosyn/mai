import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';
import { getAvailableModels } from '@/lib/actions/llm';
import type { ALL_AVAILABLE_OPENAI_MODELS } from 'llamaindex';
import { Icons } from '../ui/icons';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const renderOpenAIModels = (models: typeof ALL_AVAILABLE_OPENAI_MODELS) => {
  return Object.keys(models).map((model) => (
    <SelectItem value={model} key={model}>
      <div className="flex items-start gap-3 text-muted-foreground">
        <div className="grid gap-0.5">
          <p>
            <span className="font-normal text-foreground">{model}</span>
          </p>
          <p className="text-xs" data-description>
            Context window:{' '}
            <span className="font-medium text-foreground">
              {models[model as keyof typeof ALL_AVAILABLE_OPENAI_MODELS].contextWindow}
            </span>
          </p>
        </div>
      </div>
    </SelectItem>
  ));
};

export default async function ModelSettings() {
  const { openAI } = await getAvailableModels();

  return (
    <div className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
          <div className="grid gap-3">
            <Label htmlFor="model">Model</Label>
            <Select name="model">
              <SelectTrigger id="model-button" className="items-start [&_[data-description]]:hidden">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="flex gap-2">
                    <Icons.openAI className="size-5" />
                    Open AI
                  </SelectLabel>
                  {renderOpenAIModels(openAI)}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="temperature">Temperature</Label>
              <Input id="temperature" type="number" defaultValue={0.4} min={0} max={1} step={0.1} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="top-p">Top P</Label>
              <Input id="top-p" type="number" defaultValue={0.4} min={0} max={1} step={0.1} />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
          <div className="grid gap-3">
            <Label htmlFor="role">Role</Label>
            <Select defaultValue="system">
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="assistant">Assistant</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="You are a..." className="min-h-[9.5rem]" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
