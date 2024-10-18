import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { createFeedback } from '@/services/feedback';
import { feedbackSchema } from '@/types/feedback';
import { initializeDataSource } from '@/utils/typeorm';

export async function POST(request: NextRequest) {
  await initializeDataSource();
  try {
    const body = await request.json();
    const validatedData = feedbackSchema.parse(body);

    const feedback = await createFeedback(validatedData);

    return NextResponse.json(feedback, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
