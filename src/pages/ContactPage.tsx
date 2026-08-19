import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Mail, MapPin, Instagram, Dog, Leaf, PawPrint, Moon, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

type ServiceType = 'farm' | 'training' | 'talent' | 'boarding' | 'wellness' | 'general' | null;

const serviceOptions = [
  {
    type: 'training' as ServiceType,
    icon: Dog,
    title: 'Dog Training Consultation',
    description: 'Book a free phone consultation to discuss your dog\'s behavioral goals.',
  },
  {
    type: 'boarding' as ServiceType,
    icon: Moon,
    title: 'Farm Boarding',
    description: 'Schedule a drop-off for overnight, extended, or recurring boarding stays.',
  },
  {
    type: 'farm' as ServiceType,
    icon: Leaf,
    title: 'Farm Tour or Visit',
    description: 'Schedule a time to visit the farm, see the animals, and pick up local goods.',
  },
  {
    type: 'wellness' as ServiceType,
    icon: Sparkles,
    title: 'Farm Wellness Experience',
    description: 'Book a full-day farm immersion for yourself, your group, or your team.',
  },
  {
    type: 'talent' as ServiceType,
    icon: PawPrint,
    title: 'Talent & Production Inquiry',
    description: 'Inquire about hiring our dogs and handler for film, TV, or commercial work.',
  },
  {
    type: 'general' as ServiceType,
    icon: Mail,
    title: 'General Inquiry',
    description: 'Have a different question? Send us a message directly.',
  },
];

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

  const getStepNumber = () => {
    if (bookingStep === 'service') return 1;
    if (bookingStep === 'calendar') return 2;
    if (bookingStep === 'form') return serviceType === 'general' || serviceType === 'talent' ? 2 : 3;
    return 3;
  };

  const getTotalSteps = () => {
    if (serviceType === 'general' || serviceType === 'talent') return 2;
    return 3;
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
          className={`p-3 md:p-4 border border-teal-900/10 font-bold text-base transition-colors
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
        <div className="flex justify-between items-center p-5 bg-sage-light border-b-4 border-teal-900">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-sage rounded-xl transition-colors border-2 border-transparent hover:border-teal-900"><ChevronLeft /></button>
          <h3 className="font-display font-bold text-xl text-teal-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button onClick={handleNextMonth} className="p-2 hover:bg-sage rounded-xl transition-colors border-2 border-transparent hover:border-teal-900"><ChevronRight /></button>
        </div>
        <div className="grid grid-cols-7 text-center border-b-2 border-teal-900/20 bg-cream">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="py-2.5 font-bold text-teal-900/50 text-xs uppercase tracking-wider">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 bg-cream">
          {blanks}
          {days}
        </div>
      </div>
    );
  };

  const selectedServiceLabel = serviceOptions.find(s => s.type === serviceType)?.title || '';

  return (
    <div className="min-h-screen bg-cream pt-24 pb-24">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-10">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-teal-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-teal-900/70 font-medium max-w-2xl mx-auto">
            Whether you're looking for expert dog training, a farm visit, or just have a question — we're here to help.
          </p>
        </motion.div>
      </section>

      {/* Main Booking Flow */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Step Indicator */}
          {bookingStep !== 'success' && (
            <div className="flex items-center justify-center gap-3 mb-10">
              {Array.from({ length: getTotalSteps() }, (_, i) => {
                const step = i + 1;
                const isActive = step === getStepNumber();
                const isCompleted = step < getStepNumber();
                return (
                  <React.Fragment key={step}>
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300
                      ${isActive ? 'bg-sage border-teal-900 text-teal-900 shadow-[3px_3px_0px_0px_#0B3B3C] scale-110' : ''}
                      ${isCompleted ? 'bg-teal-900 border-teal-900 text-cream' : ''}
                      ${!isActive && !isCompleted ? 'bg-cream border-teal-900/30 text-teal-900/30' : ''}
                    `}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step}
                    </div>
                    {step < getTotalSteps() && (
                      <div className={`w-12 h-0.5 transition-colors duration-300 ${isCompleted ? 'bg-teal-900' : 'bg-teal-900/20'}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          {/* Booking Card */}
          <div className="bg-white border-4 border-teal-900 rounded-[2rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_#0B3B3C]">
            
            {/* Back Button */}
            {bookingStep !== 'service' && bookingStep !== 'success' && (
              <button onClick={() => {
                  if (bookingStep === 'form' && serviceType !== 'general' && serviceType !== 'talent') setBookingStep('calendar');
                  else { setBookingStep('service'); setServiceType(null); }
                }} 
                className="flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back
              </button>
            )}

            <AnimatePresence mode="wait">
              {/* Step 1: Service Selection */}
              {bookingStep === 'service' && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-teal-900 mb-3">What can we help with?</h2>
                  <p className="text-teal-900/60 font-medium mb-10">Select the service you're interested in to get started.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map((option) => (
                      <button
                        key={option.type}
                        onClick={() => handleServiceSelect(option.type)}
                        className="text-left p-6 rounded-2xl border-3 border-teal-900/15 hover:border-teal-900 hover:bg-sage-light hover:shadow-[6px_6px_0px_0px_#0B3B3C] transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-sage-light rounded-xl border-2 border-teal-900/20 group-hover:border-teal-900 group-hover:bg-sage transition-all shrink-0">
                            <option.icon className="w-6 h-6 text-teal-900" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-teal-900 mb-1">{option.title}</h3>
                            <p className="text-teal-900/60 font-medium text-sm leading-relaxed">{option.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Calendar */}
              {bookingStep === 'calendar' && (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Selected Service Badge */}
                  <div className="inline-flex items-center gap-2 bg-sage-light text-teal-900 px-4 py-2 rounded-full border-2 border-teal-900/30 mb-6">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-bold text-sm">{selectedServiceLabel}</span>
                  </div>

                  <h2 className="font-display font-bold text-3xl text-teal-900 mb-2">
                    {serviceType === 'training' ? 'Schedule a Consultation' : serviceType === 'boarding' ? 'Schedule a Drop-Off' : serviceType === 'wellness' ? 'Book Your Experience' : 'Book a Farm Visit'}
                  </h2>
                  <p className="text-teal-900/60 font-medium mb-10">Select a date and time that works for you.</p>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Calendar - takes 3 columns */}
                    <div className="lg:col-span-3">
                      {renderCalendar()}
                    </div>
                    
                    {/* Time Selection - takes 2 columns */}
                    <div className="lg:col-span-2">
                      <h3 className="font-bold text-lg text-teal-900 mb-5 flex items-center gap-2">
                        <Clock className="text-sage w-5 h-5" /> Available Times
                      </h3>
                      
                      {selectedDate ? (
                        <div className="space-y-3">
                          {availableTimes.map(time => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`w-full p-4 font-bold text-base rounded-xl border-3 transition-all text-center
                                ${selectedTime === time 
                                  ? 'bg-sage border-teal-900 text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]' 
                                  : 'bg-cream border-teal-900/20 text-teal-900 hover:border-teal-900 hover:shadow-[4px_4px_0px_0px_#0B3B3C]'}`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="h-48 border-3 border-dashed border-teal-900/20 rounded-2xl flex items-center justify-center text-teal-900/40 font-medium text-base bg-cream/50 text-center px-6">
                          Select a date first
                        </div>
                      )}

                      {selectedTime && (
                         <motion.div 
                           initial={{ opacity: 0, y: 10 }} 
                           animate={{ opacity: 1, y: 0 }}
                           className="mt-6"
                         >
                           <button onClick={() => setBookingStep('form')} className={`${btnPrimary} w-full`}>
                             Continue to Details
                             <ArrowRight className="ml-2 w-5 h-5" />
                           </button>
                         </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Form */}
              {bookingStep === 'form' && (
                 <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Selected Service Badge */}
                  <div className="inline-flex items-center gap-2 bg-sage-light text-teal-900 px-4 py-2 rounded-full border-2 border-teal-900/30 mb-6">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-bold text-sm">{selectedServiceLabel}</span>
                  </div>

                  {/* Booking Summary Bar */}
                  {serviceType !== 'general' && serviceType !== 'talent' && selectedDate && selectedTime && (
                    <div className="mb-8 p-4 bg-sage-light border-2 border-teal-900 rounded-xl flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-5 h-5 text-teal-900/60 shrink-0" />
                        <div>
                           <p className="font-medium text-teal-900">
                             {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                           </p>
                        </div>
                      </div>
                      <button onClick={() => setBookingStep('calendar')} className="text-teal-900 font-bold underline hover:text-teal-700 text-sm">Change</button>
                    </div>
                  )}

                  <h2 className="font-display font-bold text-3xl text-teal-900 mb-8">
                    {serviceType === 'general' || serviceType === 'talent' ? 'Send a Message' : 'Your Details'}
                  </h2>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-bold text-teal-900 mb-2 text-sm">Your Name</label>
                          <input required type="text" placeholder="Full name" className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors" />
                        </div>
                        <div>
                          <label className="block font-bold text-teal-900 mb-2 text-sm">Email Address</label>
                          <input required type="email" placeholder="you@email.com" className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors" />
                        </div>
                        
                        {serviceType !== 'general' && (
                          <div>
                            <label className="block font-bold text-teal-900 mb-2 text-sm">Phone Number</label>
                            <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors" />
                          </div>
                        )}

                        {serviceType === 'talent' && (
                          <>
                            <div>
                              <label className="block font-bold text-teal-900 mb-2 text-sm">Production Company</label>
                              <input required type="text" placeholder="Company name" className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors" />
                            </div>
                            <div>
                              <label className="block font-bold text-teal-900 mb-2 text-sm">Project Type</label>
                              <select required className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors">
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
                            <label className="block font-bold text-teal-900 mb-2 text-sm">Group Size</label>
                            <select required className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors">
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
                            <label className="block font-bold text-teal-900 mb-2 text-sm">Dog's Name & Breed</label>
                            <input required type="text" placeholder="e.g. Luna, Golden Retriever" className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors" />
                          </div>
                        )}
                     </div>
                     <div>
                        <label className="block font-bold text-teal-900 mb-2 text-sm">
                          {serviceType === 'training' ? 'What are your primary goals or concerns?' : serviceType === 'talent' ? 'Project details, timeline, and requirements' : serviceType === 'boarding' ? 'Tell us about your dog and any special needs' : serviceType === 'wellness' ? 'Any dietary restrictions or accessibility needs?' : 'Message'}
                        </label>
                        <textarea required rows={4} placeholder="Tell us more..." className="w-full bg-cream border-2 border-teal-900/30 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-sage focus:border-teal-900 transition-colors resize-none"></textarea>
                     </div>
                     <button type="submit" className={`${btnPrimary} w-full mt-2`}>
                       {serviceType === 'general' || serviceType === 'talent' ? 'Send Message' : 'Confirm Booking'}
                       <ArrowRight className="ml-2 w-5 h-5" />
                     </button>
                  </form>
                </motion.div>
              )}

              {/* Success */}
              {bookingStep === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-sage rounded-full flex items-center justify-center border-4 border-teal-900 mx-auto mb-8 shadow-[6px_6px_0px_0px_#0B3B3C]">
                    <CheckCircle2 className="w-12 h-12 text-teal-900" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">
                    {serviceType === 'general' || serviceType === 'talent' ? 'Message Sent!' : 'Booking Confirmed!'}
                  </h2>
                  <p className="text-xl text-teal-900/70 font-medium mb-12 max-w-md mx-auto">
                    {serviceType === 'general' || serviceType === 'talent'
                      ? "Thanks for reaching out! We'll get back to you within 24–48 hours." 
                      : `We've received your request for ${selectedDate?.toLocaleDateString()} at ${selectedTime}. Check your email for the calendar invitation.`}
                  </p>
                  <Link to="/" className={btnPrimary}>
                    Return to Home
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:hello@pastureandpaw.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-sage-light border-3 border-teal-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_#0B3B3C] hover:shadow-[3px_3px_0px_0px_#0B3B3C] hover:translate-x-[3px] hover:translate-y-[3px] transition-all group text-center"
          >
            <div className="w-12 h-12 bg-sage rounded-xl border-2 border-teal-900 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-teal-900" />
            </div>
            <h3 className="font-bold text-teal-900 text-lg mb-1">Email Us</h3>
            <p className="text-teal-900/70 font-medium text-sm group-hover:text-teal-900 transition-colors">
              hello@pastureandpaw.com
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-sage-light border-3 border-teal-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_#0B3B3C] text-center"
          >
            <div className="w-12 h-12 bg-sage rounded-xl border-2 border-teal-900 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-teal-900" />
            </div>
            <h3 className="font-bold text-teal-900 text-lg mb-1">Visit the Farm</h3>
            <p className="text-teal-900/70 font-medium text-sm">
              123 Farm Road<br />
              Seattle County, WA 98000
            </p>
            <p className="text-xs text-teal-900/50 mt-2 font-medium italic">*Visits by appointment only</p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-sage-light border-3 border-teal-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_#0B3B3C] hover:shadow-[3px_3px_0px_0px_#0B3B3C] hover:translate-x-[3px] hover:translate-y-[3px] transition-all group text-center"
          >
            <div className="w-12 h-12 bg-sage rounded-xl border-2 border-teal-900 flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-6 h-6 text-teal-900" />
            </div>
            <h3 className="font-bold text-teal-900 text-lg mb-1">Follow Along</h3>
            <p className="text-teal-900/70 font-medium text-sm group-hover:text-teal-900 transition-colors">
              @pastureandpaw
            </p>
          </motion.a>
        </div>
      </section>

    </div>
  );
}
