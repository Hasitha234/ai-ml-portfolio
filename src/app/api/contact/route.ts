import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, projectType, budget, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Since the frontend uses mailto, we just validate and return success
    // In a real implementation, you could send to an email service or database
    console.log('Contact form submission:', { name, email, projectType, budget, message })

    return NextResponse.json(
      { message: 'Contact form submitted successfully', success: true }, 
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 