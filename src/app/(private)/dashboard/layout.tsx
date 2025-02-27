'use client';

import { AppSidebar } from '@/app/(private)/_components/app-sidebar';
import { ModeToggle } from '@/components/mode-toggle';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const paths = pathname.split('/');

  return (
    <SidebarProvider>
      <AppSidebar variant='inset' />
      <SidebarInset className='overflow-hidden'>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 justify-between'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                {paths.slice(1).map((path, index) => (
                  <Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink className='capitalize' asChild>
                        <Link href={paths.slice(0, index - 1).join('/')}>
                          {path}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < paths.length - 2 && (
                      <BreadcrumbSeparator className='hidden md:block' />
                    )}
                  </Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='px-4'>
            <ModeToggle />
          </div>
        </header>
        <main className='p-4'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
