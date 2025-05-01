"use client";
import { Home, Inbox, Calculator, LogOutIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

const items = [
  {
    title: "হোম",
    url: "/",
    icon: Home,
  },
  {
    title: "মাসিক চাঁদার সদস্যবৃন্দ",
    url: "/memberlists",
    icon: Inbox,
  },
  {
    title: "আয় ও ব্যায়ের হিসাব",
    url: "/accoundante",
    icon: Calculator,
  },
];

const AppSidebar = () => {
  const handleLogout = () => {
    // Clear the user cookie by setting it to expire in the past
    document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/login";
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={50}
                  height={50}
                  className="object-cover"
                />
                <span>ড্যাশবোর্ড</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="hover:bg-teal-800 hover:text-white"
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto px-2">
          <SidebarMenu>
            <SidebarMenuItem onClick={handleLogout}>
              <SidebarMenuButton className="flex gap-2 items-center cursor-pointer hover:bg-teal-800 hover:text-white">
                <LogOutIcon />
                <span>লগ আউট</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
