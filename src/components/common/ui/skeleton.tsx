import { cn } from "@/utils/shad-utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-50", className)}
      {...props}
    />
  )
}

export { Skeleton }
