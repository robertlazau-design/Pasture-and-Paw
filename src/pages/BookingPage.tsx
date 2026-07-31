import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

export default function BookingPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<'calendar' | 'form' | 'success'>('calendar');
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', dogName: '', notes: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // Dummy available times
  const availableTimes = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const isDateDisabled = (day: number) => {
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Disable past dates and weekends (0 = Sunday, 6 = Saturday)
    return dateToCheck < today || dateToCheck.getDay() === 0 || dateToCheck.getDay() === 6;
  };

  const handleDateSelect = (day: number) => {
    if (!isDateDisabled(day)) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      setSelectedTime(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setBookingStep('success');
    }, 800);
  };

  const renderCalendar = () => {
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => <div key={`blank-${i}`} className="p-2 border border-teal-900/10"></div>);
    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const disabled = isDateDisabled(day);
      const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentDate.getMonth();
      
      return (
        <button
          key={`day-${day}`}
          disabled={disabled}
          onClick={() => handleDateSelect(day)}
          className={`p-4 border border-teal-900/10 font-bold text-lg transition-colors
            ${disabled ? 'text-teal-900/20 cursor-not-allowed bg-cream/50' : 'text-teal-900 hover:bg-sage-light cursor-pointer'}
            ${isSelected ? 'bg-sage border-teal-900 text-teal-900 shadow-inner' : ''}
          `}
        >
          {day}
        </button>
      );
    });

    return (
      <div className="bg-cream border-4 border-teal-900 rounded-[2rem] shadow-[8px_8px_0px_0px_#0B3B3C] overflow-hidden">
        <div className="flex justify-between items-center p-6 bg-sage-light border-b-4 border-teal-900">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-sage rounded-xl transition-colors border-2 border-transparent hover:border-teal-900"><ChevronLeft /></button>
          <h3 className="font-display font-bold text-2xl text-teal-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={handleNextMonth} className="p-2 hover:bg-sage rounded-xl transition-colors border-2 border-transparent hover:border-teal-900"><ChevronRight /></button>
        </div>
        <div className="grid grid-cols-7 text-center border-b-2 border-teal-900/20 bg-cream">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="py-3 font-bold text-teal-900/50 text-sm uppercase tracking-wider">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 bg-cream">
          {blanks}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-12">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6">Book a Consultation</h1>
          <p className="text-xl text-teal-900/80 font-medium max-w-2xl mx-auto">
            Schedule a free initial phone consultation to discuss your dog's training needs or to plan a farm visit.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {bookingStep === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="font-bold text-xl text-teal-900 mb-6 flex items-center gap-2">
                  <CalendarIcon className="text-sage w-6 h-6" /> Select a Date
                </h2>
                {renderCalendar()}
              </div>
              
              <div>
                <h2 className="font-bold text-xl text-teal-900 mb-6 flex items-center gap-2">
                  <Clock className="text-sage w-6 h-6" /> Available Times
                </h2>
                
                {selectedDate ? (
                  <div className="grid grid-cols-2 gap-4">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-4 font-bold text-lg rounded-xl border-4 transition-all
                          ${selectedTime === time 
                            ? 'bg-sage border-teal-900 text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]' 
                            : 'bg-cream border-teal-900/20 text-teal-900 hover:border-teal-900 hover:shadow-[4px_4px_0px_0px_#0B3B3C]'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="h-64 border-4 border-dashed border-teal-900/20 rounded-[2rem] flex items-center justify-center text-teal-900/50 font-medium text-lg bg-cream/50">
                    Please select a date first
                  </div>
                )}

                {selectedTime && (
                   <motion.div 
                     initial={{ opacity: 0, mt: 0 }} 
                     animate={{ opacity: 1, mt: 32 }}
                     className="pt-8 border-t-2 border-teal-900/10"
                   >
                     <button onClick={() => setBookingStep('form')} className={`${btnPrimary} w-full`}>
                       Continue to Details
                       <ArrowRight className="ml-2 w-5 h-5" />
                     </button>
                   </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {bookingStep === 'form' && (
             <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto bg-sage-light border-4 border-teal-900 rounded-[2rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_#0B3B3C]"
            >
              <div className="flex justify-between items-center mb-8 pb-8 border-b-2 border-teal-900/20">
                <div>
                   <h3 className="font-bold text-teal-900 text-lg">Selected Time</h3>
                   <p className="text-teal-900/80 font-medium">
                     {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                   </p>
                </div>
                <button onClick={() => setBookingStep('calendar')} className="text-teal-900 font-bold underline hover:text-teal-700">Change</button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-bold text-teal-900 mb-2">Your Name</label>
                      <input required type="text" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                    </div>
                    <div>
                      <label className="block font-bold text-teal-900 mb-2">Dog's Name & Breed</label>
                      <input required type="text" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                    </div>
                    <div>
                      <label className="block font-bold text-teal-900 mb-2">Email</label>
                      <input required type="email" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                    </div>
                    <div>
                      <label className="block font-bold text-teal-900 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                    </div>
                 </div>
                 <div>
                    <label className="block font-bold text-teal-900 mb-2">What are your primary goals or concerns?</label>
                    <textarea rows={4} className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage"></textarea>
                 </div>
                 <button type="submit" className={`${btnPrimary} w-full mt-4`}>
                   Confirm Booking
                 </button>
              </form>
            </motion.div>
          )}

          {bookingStep === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-cream border-4 border-teal-900 rounded-[2rem] p-12 shadow-[12px_12px_0px_0px_#0B3B3C] text-center"
            >
              <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center border-4 border-teal-900 mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-teal-900" />
              </div>
              <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">Booking Confirmed!</h2>
              <p className="text-xl text-teal-900/80 font-medium mb-8">
                We've received your request for {selectedDate?.toLocaleDateString()} at {selectedTime}. Check your email for the calendar invitation.
              </p>
              <Link to="/" className={btnPrimary}>
                Return to Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
