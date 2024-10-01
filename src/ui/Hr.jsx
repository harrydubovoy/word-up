import { cn } from '../lib/utils';

export function Hr({ className }) {
  return <div className={cn('bg-primary/20 w-full h-[1px]', className)} />;
}
