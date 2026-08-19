import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Mail, MapPin, Instagram } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

type ServiceType = 'farm' | 'training' | 'talent' | 'boarding' | 'wellness' | 'general' | null;

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<'service' | 'calendar' | 'form' | 'success'>('service');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const serviceParam = searchParams.get('service');
    if (serviceParam === 'farm' || serviceParam === 'training' || serviceParam === 'boarding' || serviceParam === 'wellness') {
      setServiceType(serviceParam as ServiceType);
      setBookingStep('calendar');
    } else if (serviceParam === 'talent') {
      setServiceType('talent');
      setBookingStep('form');
    }
  }, [searchParams]);

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
    setTimeout(() => setBookingStep('success'), 800);
  };

  const handleServiceSelect = (type: ServiceType) => {
    setServiceType(type);
    if (type === 'general' || type === 'talent') {
      setBookingStep('form');
    } else {
      setBookingStep('calendar');
    }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6">Let's Connect</h1>
              <p className="text-xl text-teal-900/80 font-medium">
                Whether you're looking for expert dog training, a farm visit, or just have a general question, we're here to help.
              </p>
            </div>

            <div className="bg-sage-light border-4 border-teal-900 p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_#0B3B3C] space-y-8">
              <div className="flex items-center gap-4 pb-6 border-b-2 border-teal-900/20">
                <div className="w-16 h-16 bg-cream rounded-2xl border-2 border-teal-900 p-2 shadow-[3px_3px_0px_0px_#0B3B3C] flex items-center justify-center shrink-0">
                  <img src="/images/logo-teal.png" alt="Pasture & Paw Emblem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-teal-900 leading-tight">Pasture &amp; Paw</h3>
                  <p className="text-teal-900/70 text-xs font-bold uppercase tracking-wider">Working Farm &amp; Academy</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-teal-900 text-lg mb-4 flex items-center gap-2">
                  <Mail className="text-sage w-6 h-6" /> Email Us
                </h4>
                <a href="mailto:hello@pastureandpaw.com" className="text-teal-900/80 font-medium hover:text-teal-900 hover:underline">
                  hello@pastureandpaw.com
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-teal-900 text-lg mb-4 flex items-center gap-2">
                  <MapPin className="text-sage w-6 h-6" /> Visit the Farm
                </h4>
                <p className="text-teal-900/80 font-medium">
                  123 Farm Road<br />
                  Seattle County, WA 98000
                </p>
                <p className="text-sm text-teal-900/60 mt-2 font-medium italic">*Visits by appointment only</p>
              </div>

              <div>
                <h4 className="font-bold text-teal-900 text-lg mb-4 flex items-center gap-2">
                  <Instagram className="text-sage w-6 h-6" /> Follow Along
                </h4>
                <a href="#" className="text-teal-900/80 font-medium hover:text-teal-900 hover:underline">
                  @pastureandpaw
                </a>
              </div>
            </div>
            
            <div className="aspect-square rounded-[2rem] border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C] overflow-hidden bg-clay">
               <img src="/images/farm-hero.png" alt="Map Location" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Interactive Flow */}
          <div className="lg:col-span-8">
             <div className="bg-white border-4 border-teal-900 rounded-[2rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_#0B3B3C] min-h-[600px]">
                
                {bookingStep !== 'service' && bookingStep !== 'success' && (
                  <button onClick={() => {
                      if (bookingStep === 'form' && serviceType !== 'general') setBookingStep('calendar');
                      else setBookingStep('service');
                    }} 
                    className="flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-8"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back
                  </button>
                )}

                <AnimatePresence mode="wait">
                  {bookingStep === 'service' && (
                    <motion.div
                      key="service"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h2 className="font-display font-bold text-4xl text-teal-900 mb-8">What are you reaching out for?</h2>
                      <div className="space-y-4">
                        <button onClick={() => handleServiceSelect('training')} className="w-full text-left p-6 rounded-2xl border-4 border-teal-900/20 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group">
                          <h3 className="font-bold text-2xl text-teal-900 mb-2 group-hover:text-teal-950">Dog Training Consultation</h3>
                          <p className="text-teal-900/70 font-medium">Book a free phone consultation to discuss your dog's behavioral goals.</p>
                        </button>
                        <button onClick={() => handleServiceSelect('boarding')} className="w-full text-left p-6 rounded-2xl border-4 border-teal-900/20 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group">
                          <h3 className="font-bold text-2xl text-teal-900 mb-2 group-hover:text-teal-950">Farm Boarding</h3>
                          <p className="text-teal-900/70 font-medium">Schedule a drop-off for overnight, extended, or recurring boarding stays.</p>
                        </button>
                        <button onClick={() => handleServiceSelect('farm')} className="w-full text-left p-6 rounded-2xl border-4 border-teal-900/20 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group">
                          <h3 className="font-bold text-2xl text-teal-900 mb-2 group-hover:text-teal-950">Farm Tour or Visit</h3>
                          <p className="text-teal-900/70 font-medium">Schedule a time to visit the farm, see the animals, and pick up local goods.</p>
                        </button>
                        <button onClick={() => handleServiceSelect('wellness')} className="w-full text-left p-6 rounded-2xl border-4 border-teal-900/20 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group">
                          <h3 className="font-bold text-2xl text-teal-900 mb-2 group-hover:text-teal-950">Farm Wellness Experience</h3>
                          <p className="text-teal-900/70 font-medium">Book a full-day farm immersion for yourself, your group, or your team.</p>
                        </button>
                        <button onClick={() => handleServiceSelect('talent')} className="w-full text-left p-6 rounded-2xl border-4 border-teal-900/20 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group">
                          <h3 className="font-bold text-2xl text-teal-900 mb-2 group-hover:text-teal-950">Talent &amp; Production Inquiry</h3>
                          <p className="text-teal-900/70 font-medium">Inquire about hiring our dogs and handler for film, TV, or commercial work.</p>
                        </button>
                        <button onClick={() => handleServiceSelect('general')} className="w-full text-left p-6 rounded-2xl border-4 border-teal-900/20 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group">
                          <h3 className="font-bold text-2xl text-teal-900 mb-2 group-hover:text-teal-950">General Inquiry</h3>
                          <p className="text-teal-900/70 font-medium">Have a different question? Send us a message directly.</p>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {bookingStep === 'calendar' && (
                    <motion.div
                      key="calendar"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                      <div className="col-span-1 md:col-span-2 mb-4">
                        <h2 className="font-display font-bold text-3xl text-teal-900">
                          {serviceType === 'training' ? 'Schedule a Consultation' : serviceType === 'boarding' ? 'Schedule a Drop-Off' : serviceType === 'wellness' ? 'Book Your Experience' : 'Book a Farm Visit'}
                        </h2>
                        <p className="text-teal-900/80 font-medium mt-2">Select a date and time that works for you.</p>
                      </div>

                      <div>
                        {renderCalendar()}
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-xl text-teal-900 mb-6 flex items-center gap-2">
                          <Clock className="text-sage w-6 h-6" /> Available Times
                        </h3>
                        
                        {selectedDate ? (
                          <div className="grid grid-cols-2 gap-4">
                            {availableTimes.map(time => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 font-bold text-base rounded-xl border-4 transition-all
                                  ${selectedTime === time 
                                    ? 'bg-sage border-teal-900 text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]' 
                                    : 'bg-cream border-teal-900/20 text-teal-900 hover:border-teal-900 hover:shadow-[4px_4px_0px_0px_#0B3B3C]'}`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="h-64 border-4 border-dashed border-teal-900/20 rounded-[2rem] flex items-center justify-center text-teal-900/50 font-medium text-lg bg-cream/50 text-center px-6">
                            Please select a date on the calendar first
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
                    >
                      {serviceType !== 'general' && (
                        <div className="mb-8 p-4 bg-sage-light border-2 border-teal-900 rounded-xl flex justify-between items-center">
                          <div>
                             <p className="text-teal-900/80 font-bold text-sm uppercase tracking-wider mb-1">Selected Time</p>
                             <p className="font-medium text-teal-900">
                               {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                             </p>
                          </div>
                          <button onClick={() => setBookingStep('calendar')} className="text-teal-900 font-bold underline hover:text-teal-700">Change</button>
                        </div>
                      )}

                      <h2 className="font-display font-bold text-3xl text-teal-900 mb-8">
                        {serviceType === 'general' || serviceType === 'talent' ? 'Send a Message' : 'Your Details'}
                      </h2>

                      <form onSubmit={handleFormSubmit} className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block font-bold text-teal-900 mb-2">Your Name</label>
                              <input required type="text" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                            </div>
                            <div>
                              <label className="block font-bold text-teal-900 mb-2">Email Address</label>
                              <input required type="email" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                            </div>
                            
                            {serviceType !== 'general' && (
                              <div>
                                <label className="block font-bold text-teal-900 mb-2">Phone Number</label>
                                <input required type="tel" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                              </div>
                            )}

                            {serviceType === 'talent' && (
                              <>
                                <div>
                                  <label className="block font-bold text-teal-900 mb-2">Production Company</label>
                                  <input required type="text" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                                </div>
                                <div>
                                  <label className="block font-bold text-teal-900 mb-2">Project Type</label>
                                  <select required className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage">
                                    <option value="">Select project type</option>
                                    <option value="film">Feature Film</option>
                                    <option value="tv">Television</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="print">Print / Editorial</option>
                                    <option value="event">Live Event</option>
                                    <option value="other">Other</option>
                                  </select>
                                </div>
                              </>
                            )}

                            {serviceType === 'wellness' && (
                              <div>
                                <label className="block font-bold text-teal-900 mb-2">Group Size</label>
                                <select required className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage">
                                  <option value="">Select group size</option>
                                  <option value="1">Individual (1 person)</option>
                                  <option value="2-4">Small Group (2–4)</option>
                                  <option value="5-8">Group (5–8)</option>
                                  <option value="corporate">Corporate / Private Event</option>
                                </select>
                              </div>
                            )}

                            {serviceType === 'training' && (
                              <div>
                                <label className="block font-bold text-teal-900 mb-2">Dog's Name & Breed</label>
                                <input required type="text" className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage" />
                              </div>
                            )}
                         </div>
                         <div>
                            <label className="block font-bold text-teal-900 mb-2">
                              {serviceType === 'training' ? 'What are your primary goals or concerns?' : serviceType === 'talent' ? 'Project details, timeline, and requirements' : serviceType === 'boarding' ? 'Tell us about your dog and any special needs' : serviceType === 'wellness' ? 'Any dietary restrictions or accessibility needs?' : 'Message'}
                            </label>
                            <textarea required rows={4} className="w-full bg-cream border-2 border-teal-900 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sage"></textarea>
                         </div>
                         <button type="submit" className={`${btnPrimary} w-full mt-4`}>
                           {serviceType === 'general' || serviceType === 'talent' ? 'Send Message' : 'Confirm Booking'}
                         </button>
                      </form>
                    </motion.div>
                  )}

                  {bookingStep === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-28 h-28 bg-sage rounded-3xl flex items-center justify-center border-4 border-teal-900 mx-auto mb-8 shadow-[6px_6px_0px_0px_#0B3B3C] p-3">
                        <img src="/images/logo-teal.png" alt="Pasture & Paw" className="w-full h-full object-contain" />
                      </div>
                      <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">
                        {serviceType === 'general' || serviceType === 'talent' ? 'Message Sent!' : 'Booking Confirmed!'}
                      </h2>
                      <p className="text-xl text-teal-900/80 font-medium mb-12 max-w-md mx-auto">
                        {serviceType === 'general' || serviceType === 'talent'
                          ? "Thanks for reaching out! We'll get back to you within 24-48 hours." 
                          : `We've received your request for ${selectedDate?.toLocaleDateString()} at ${selectedTime}. Check your email for the calendar invitation.`}
                      </p>
                      <Link to="/" className={btnPrimary}>
                        Return to Home
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
