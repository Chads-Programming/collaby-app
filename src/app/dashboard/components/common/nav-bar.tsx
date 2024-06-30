"use client";
import Link from "next/link"
import {
  Home,
  Package,
  Icon,
  Type
} from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";

const routes = [
  {
    label: 'Dashboard',
    icon: Home,
    url: '/dashboard'
  },
  {
    label: 'Projects',
    icon: Package,
    url: '/dashboard/projects'
  }

] as const


export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {
        routes.map(({ icon: Icon, label, url }) => (
          <Link
            href={url}
            className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === url && "bg-muted text-primary")}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))
      }
    </nav>
  )
}
