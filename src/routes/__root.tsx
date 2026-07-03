import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Avo Plumbers and Construction | Durban Plumbing & Building Services" },
      { name: "description", content: "Avo Plumbers and Construction (Pty) Ltd provides reliable, high-quality plumbing and construction services in Durban, KwaMashu and surrounding areas. Licensed professionals for residential, commercial and industrial projects." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  const app = (
    <>
      <HeadContent />
      {children}
      <Scripts />
    </>
  );

  if (typeof window === "undefined") {
    return (
      <html lang="en">
        <head>
          <HeadContent />
        </head>
        <body>
          {children}
          <Scripts />
        </body>
      </html>
    );
  }

  return app;
}
