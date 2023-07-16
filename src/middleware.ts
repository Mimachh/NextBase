// export default withAuth(
//     function middleware(request) {
//         console.log(request.nextauth.token)
//         if(request.nextUrl.pathname === "/userpost" && request.nextauth.token?.role !== "admin"){
//             return new NextResponse("not allowed");
//         }
//     },
//     {
//         callbacks: {
//             authorized: (params) => {
//                 let { token } = params;
//                 return !!token;
//             },
//         },
//     }
// )

// export const config = {
//     matcher: ["/auth/user/dashboard", "/userpost/:path*"]
// }


import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";


const locales = ['en', 'fr'];
const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: 'en'
});

const publicPages = ['/', '/auth/signIn', '/auth/signUp'];
const whitelist = RegExp(
    `^(\\/(${locales.join("|")})\\/)?(${publicPages.join("|")})$`,
    "i"
  );
  const authMiddleware = withAuth(
    // Note that this callback is only invoked if
    // the `authorized` callback has returned `true`
    // and not for pages listed in `pages`.
    function onSuccess(req) {
      return intlMiddleware(req);
    },
    {
      callbacks: {
        authorized: ({token}) => token != null
      },
      pages: {
        signIn: '/auth/signIn'
      }
    }
  );

export default function middleware(req: NextRequest) {
    const publicPathnameRegex = RegExp(
      `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
      'i'
    );
    const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
   
    if (isPublicPage) {
      return intlMiddleware(req);
    } else {
      return (authMiddleware as any)(req);
    }
  }

export const config = {
    // matcher: ["/auth/user/dashboard", "/userpost/:path*"]
    matcher: ['/((?!api|_next|.*\\..*).*)']
}
