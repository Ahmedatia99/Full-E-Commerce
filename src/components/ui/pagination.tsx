import * as React from "react";
import { cn } from "@/lib/utils";

export function Pagination({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

export function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    />
  );
}

export function PaginationItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("", className)} {...props} />;
}

export function PaginationLink({
  className,
  isActive,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) {
  return (
    <a
      className={cn(
        "flex h-9 w-9  items-center justify-center rounded-md border text-sm font-medium  transition-colors hover:bg-main hover:text-white",
        isActive ? " bg-black  text-white" : "bg-background",
        className
      )}
      {...props}
    />
  );
}

export function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "flex h-9 items-center  justify-center rounded-md border px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      Previous
    </a>
  );
}

export function PaginationNext({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "flex h-9 items-center  justify-center rounded-md border px-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      Next
    </a>
  );
}

export function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      ...
    </span>
  );
}
