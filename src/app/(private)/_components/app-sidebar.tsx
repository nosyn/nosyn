'use client';

import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  Map,
  PyramidIcon,
  PopcornIcon,
  Settings2,
  SquareTerminal,
} from 'lucide-react';
import * as React from 'react';

import { NavMain, NavMainItem } from '@/app/(private)/_components/nav-main';
import {
  NavProject,
  NavProjects,
} from '@/app/(private)/_components/nav-projects';
import { NavUser } from '@/app/(private)/_components/nav-user';
import {
  NavTeam,
  TeamSwitcher,
} from '@/app/(private)/_components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const SidebarData: {
  teams: NavTeam[];
  navMainItems: NavMainItem[];
  projects: NavProject[];
} = {
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMainItems: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',

      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Movies',
      url: '/dashboard/movies',

      icon: PopcornIcon,
      items: [
        {
          title: 'Home',
          url: '/dashboard/movies',
        },
        {
          title: 'Search Movies',
          url: '/dashboard/movies/search',
        },
        {
          title: 'Watch List',
          url: '/dashboard/movies/watch-list',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',

      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Algorithms Visualizer',
      url: '/dashboard/projects/algorithms-visualizer',
      icon: PyramidIcon,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={SidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={SidebarData.navMainItems} />
        <NavProjects projects={SidebarData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
