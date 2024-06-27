import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import Link from 'next/link';
import { Icons } from '../icons';
import { Button } from '../ui/button';

export function DataSource({ name }: { name: string }) {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle>{name}</CardTitle>
        <CardDescription>Last updated: 2 hours ago</CardDescription>
      </CardHeader>
      <CardContent className="grid px-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Vector Dimension</div>
          <div>768</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Number of Points</div>
          <div>1.2 billion</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Index Type</div>
          <div>Hnsw</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Metric</div>
          <div>Cosine</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end px-2">
        <Button variant="outline" size="sm">
          <Icons.settings className="w-4 h-4 mr-2" />
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CreateDataSource() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="space-y-2">
        <CardTitle>Data Sources</CardTitle>
        <CardDescription>
          Uploading your existing documents or connect to your existing data sources such as Google Drive, Notion...
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="shadow-none gap-2" asChild>
          <Link href={'/data-sources/create'}>
            <Icons.createDataSource className="h-4 w-4" />
            Create
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
