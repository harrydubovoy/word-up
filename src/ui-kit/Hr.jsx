import { cn } from '../shared/utils/cn';

export function Divider({ className }) {
  return <div className={cn('bg-primary/20 w-full h-[1px]', className)} />;
}
