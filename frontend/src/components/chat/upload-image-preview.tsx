import { cn } from '@/components/lib/utils';
import { XCircleIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function UploadImagePreview({ url, onRemove }: { url: string; onRemove: () => void }) {
  return (
    <div className="relative w-20 h-20 group m-2">
      <Image
        src={url}
        alt="Uploaded image"
        fill
        className="object-cover w-full h-full rounded-xl hover:brightness-75"
      />
      <div
        className={cn(
          'absolute -top-2 -right-2 w-6 h-6 z-10 bg-gray-500 text-white rounded-full hidden group-hover:block',
        )}
      >
        <Button size="icon" onClick={onRemove} className="w-6 h-6 bg-gray-500 text-white rounded-full">
          <XCircleIcon />
        </Button>
      </div>
    </div>
  );
}
