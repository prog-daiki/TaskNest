import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute =
    nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(
    nextUrl.pathname,
  );
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // if (isApiAuthRoute) {
  //   return Promise.resolve();
  // }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(
  //       new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
  //     );
  //   }
  //   return Promise.resolve();
  // }

  // if (isLoggedIn && isPublicRoute) {
  //   return Response.redirect(
  //     new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
  //   );
  // }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL("/", nextUrl));
  // }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return NextResponse.redirect(new URL("/", nextUrl));
  // }

  return Promise.resolve();
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
``;
