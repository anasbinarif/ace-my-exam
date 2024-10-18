export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError, ZodIssueCode } from 'zod';

import { verifyUser } from '@/services/auth';
import AuthError from '@/types/auth-error';
import { initializeDataSource } from '@/utils/typeorm';

export async function GET(request: NextRequest) {
  await initializeDataSource();
  
  try {
    const token = request.nextUrl.searchParams.get('token');

    if (!token || token === 'null')
      throw new ZodError([
        {
          path: ['token'],
          message: 'Token is either missing or invalid.',
          code: ZodIssueCode.custom,
        },
      ]);

    const user = await verifyUser(token);

    return NextResponse.json(user, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      return NextResponse.json({ errors: error.message, name: error.name }, { status: error.statusCode });
    }
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
