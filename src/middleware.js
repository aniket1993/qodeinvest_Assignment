import { NextResponse } from 'next/server';

export function middleware(req) {
    console.log("Middleware -->", req);

    return NextResponse.next(); // Proceed with the request if everything is fine
}

// Configuration for matching paths
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
