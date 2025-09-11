'use client';

import { useState } from 'react';
import { BookingHeader } from '@/components/booking/BookingHeader';
import { TurfDetails } from '@/components/booking/TurfDetails';
import { BookingCalendar } from '@/components/booking/BookingCalendar';
import { BookingSummary } from '@/components/booking/BookingSummary';
import { Footer } from '@/components/landing/Footer';

export default function BookingPage({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  
  // Mock turf data - would come from API in real app
  const turf = {
    id: parseInt(params.id),
    name: 'Green Field Sports Complex',
    location: 'Sangli Central',
    sports: ['Football', 'Cricket'],
    rating: 4.8,
    reviews: 124,
    price: 800,
    image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    amenities: ['Floodlights', 'Parking', 'Washroom', 'Equipment'],
    description: 'Premium sports complex with professional-grade facilities and well-maintained turf.',
    openTime: '6:00 AM',
    closeTime: '11:00 PM',
    gallery: [
      'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2207/field-sport-game-stadium.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/163308/cricket-ground-sport-game-163308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BookingHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <TurfDetails turf={turf} />
            <BookingCalendar 
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              selectedSlots={selectedSlots}
              onSlotsChange={setSelectedSlots}
              turf={turf}
            />
          </div>
          
          <div className="lg:col-span-1">
            <BookingSummary 
              turf={turf}
              selectedDate={selectedDate}
              selectedSlots={selectedSlots}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}