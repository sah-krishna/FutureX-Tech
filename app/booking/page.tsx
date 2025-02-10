'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const supabase = createClientComponentClient()

  // Available time slots (you can modify these)
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time')
      return
    }

    try {
      // Combine date and time
      const appointmentDateTime = new Date(selectedDate)
      const [hours, minutes] = selectedTime.split(':')
      appointmentDateTime.setHours(parseInt(hours), parseInt(minutes))

      const { data, error } = await supabase
        .from('appointments')
        .insert([
          {
            appointment_date: appointmentDateTime.toISOString(),
            status: 'pending',
            // Add any other fields you need
          }
        ])
        .select()

      if (error) throw error

      alert('Appointment booked successfully!')
      setSelectedDate(null)
      setSelectedTime('')
      
    } catch (error) {
      console.error('Error booking appointment:', error)
      alert('Failed to book appointment')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="w-full p-2 border rounded-md"
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Book Appointment
        </button>
      </form>
    </div>
  )
} 