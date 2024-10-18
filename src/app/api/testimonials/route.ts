import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

import { getTestimonials } from '@/services/testimonials';
import { initializeDataSource } from '@/utils/typeorm';

function getQueryParams(url: NextURL): { [key: string]: string } {
  const searchParams = url.searchParams;

  const queryParams: { [key: string]: string } = {};

  searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  return queryParams;
}

export async function GET(request: NextRequest) {
  getQueryParams(request.nextUrl);
  await initializeDataSource();
  try {
    const testimonials = await getTestimonials();

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
