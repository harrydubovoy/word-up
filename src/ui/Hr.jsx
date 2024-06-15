import { cn } from '../lib/utils';

function Hr({ className }) {
  return <hr className={cn('bg-slate-900 dark:bg-slate-100', className)} />;
}

export { Hr };
