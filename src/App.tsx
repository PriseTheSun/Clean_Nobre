/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  WashingMachine,
  Clock,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Star,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Menu,
  X,
  Shirt,
  Sparkles,
  Zap,
  Waves,
  MessageCircle,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-space-indigo text-white p-6 rounded-3xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
              <h4 className="font-bold mb-2">🍪 Valorizamos sua privacidade</h4>
              <p className="text-sm text-lavender-grey leading-relaxed">
                Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa política de privacidade.
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button
                onClick={acceptCookies}
                className="flex-grow md:flex-none bg-punch-red text-white px-8 py-3 rounded-xl font-bold hover:bg-flag-red transition-all whitespace-nowrap"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LegalPage = ({ title, content, onClose }: { title: string, content: React.ReactNode, onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[70] bg-white overflow-y-auto"
  >
    <div className="max-w-4xl mx-auto px-4 py-20 relative">
      <button
        onClick={onClose}
        className="fixed top-8 right-8 bg-platinum p-3 rounded-full hover:bg-lavender-grey/20 transition-all"
      >
        <X className="text-space-indigo" />
      </button>
      <h1 className="text-4xl font-bold text-space-indigo mb-12">{title}</h1>
      <div className="prose prose-indigo max-w-none text-lavender-grey space-y-6">
        {content}
      </div>
    </div>
  </motion.div>
);

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/5511983344184"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
  >
    <WhatsAppIcon className="w-8 h-8" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
      Fale Conosco
    </span>
  </motion.a>
);
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-lavender-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <WashingMachine className="text-punch-red w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter text-space-indigo">Clean <span className="text-punch-red">Nobre</span></span>
          </div>

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-space-indigo hover:text-punch-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-space-indigo">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-lavender-grey/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-space-indigo hover:text-punch-red"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });
  const [existingBookings, setExistingBookings] = useState<{ date: string, time: string }[]>([]);

  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthNum = today.getMonth();
  const currentYear = today.getFullYear();

  const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const displayMonth = currentMonth.getMonth();
  const displayYear = currentMonth.getFullYear();

  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  const isPastDay = (day: number) => {
    if (displayYear < currentYear) return true;
    if (displayYear > currentYear) return false;
    if (displayMonth < currentMonthNum) return true;
    if (displayMonth > currentMonthNum) return false;
    return day < currentDay;
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(displayYear, displayMonth - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(displayYear, displayMonth + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setContactInfo({ ...contactInfo, phone: formatted });
  };

  useEffect(() => {
    if (isOpen) {
      fetch('/api/bookings')
        .then(async res => {
          const contentType = res.headers.get('content-type');
          if (!res.ok) {
            let errorMsg = 'Erro na requisição';
            if (contentType && contentType.includes('application/json')) {
              const errorData = await res.json();
              errorMsg = errorData.error || errorMsg;
            } else if (contentType && contentType.includes('text/html')) {
              errorMsg = 'O servidor retornou uma página HTML em vez de JSON. Isso pode ser um erro de configuração no Netlify (404 ou 500).';
            }
            throw new Error(errorMsg);
          }
          if (!contentType || !contentType.includes('application/json')) {
            throw new Error('O servidor não retornou JSON.');
          }
          return res.json();
        })
        .then(data => setExistingBookings(data))
        .catch(err => {
          console.error('Erro ao carregar agendamentos:', err.message);
          setExistingBookings([]);
        });
    }
  }, [isOpen]);

  const isTimeBooked = (day: number, time: string) => {
    const dateStr = `${day}/${String(displayMonth + 1).padStart(2, '0')}/${displayYear}`;
    return existingBookings.some(b => b.date === dateStr && b.time === time);
  };

  const isDayFull = (day: number) => {
    const dateStr = `${day}/${String(displayMonth + 1).padStart(2, '0')}/${displayYear}`;
    const bookedTimesForDay = existingBookings.filter(b => b.date === dateStr).length;
    return bookedTimesForDay >= timeSlots.length;
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: `${selectedDate}/${String(displayMonth + 1).padStart(2, '0')}/${displayYear}`,
          time: selectedTime,
          ...contactInfo
        }),
      });
      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } else {
        const text = await response.text();
        const isHtml = text.trim().toLowerCase().startsWith('<!doctype');
        throw new Error(isHtml
          ? 'Erro no servidor: O servidor retornou uma página HTML em vez de JSON. Verifique as configurações das Functions no Netlify.'
          : 'Erro inesperado: O servidor não retornou um formato JSON válido.');
      }

      if (response.ok) {
        setShowSuccess(true);
      } else {
        const errorMessage = data.details ? `${data.error}\n\nDetalhes: ${data.details}` : (data.error || 'Erro ao agendar');
        throw new Error(errorMessage);
      }
    } catch (error: any) {
      console.error('Erro no agendamento:', error);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-space-indigo/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto subtle-scrollbar"
          >
            <div className="p-8">
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-space-indigo mb-4">Agendamento Efetuado!</h3>
                  <p className="text-lavender-grey mb-4">
                    Obrigado pelo seu agendamento. Em breve entraremos em contato pelo número <strong>{contactInfo.phone}</strong> para confirmar os detalhes.
                  </p>
                  <p className="text-sm text-lavender-grey mb-6 bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <span className="font-bold text-yellow-700">Atenção:</span> Fique atento ao número informado. Caso não atenda, tentaremos entrar em contato por outros meios.
                  </p>
                  <p className="text-sm text-lavender-grey mb-6">
                    Caso precise de mudanças no agendamento, dúvidas ou informações, você pode nos chamar diretamente no WhatsApp:
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/5511983344184"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#20BD5A] transition-all flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      Falar no WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setShowSuccess(false);
                        setSelectedDate(null);
                        setSelectedTime(null);
                        setContactInfo({ name: '', phone: '', email: '' });
                        onClose();
                      }}
                      className="bg-platinum text-space-indigo px-8 py-3 rounded-xl font-bold hover:bg-lavender-grey/20 transition-all"
                    >
                      Fechar
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-space-indigo">Agendar Coleta</h3>
                      <p className="text-sm text-lavender-grey">Selecione o melhor dia e horário</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-platinum rounded-full transition-colors">
                      <X size={20} className="text-lavender-grey" />
                    </button>
                  </div>

                  <div className="bg-platinum/50 p-6 rounded-3xl mb-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-bold text-space-indigo">{monthNames[displayMonth]} {displayYear}</span>
                      <div className="flex gap-2">
                        <button onClick={prevMonth} className="p-1 hover:bg-white rounded-lg transition-colors"><ChevronLeft size={18} /></button>
                        <button onClick={nextMonth} className="p-1 hover:bg-white rounded-lg transition-colors"><ChevronRight size={18} /></button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {weekDays.map(day => (
                        <span key={day} className="text-[10px] uppercase font-bold text-lavender-grey text-center">{day}</span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {days.map(day => {
                        const full = isDayFull(day);
                        const past = isPastDay(day);
                        return (
                          <button
                            key={day}
                            disabled={full || past}
                            onClick={() => {
                              setSelectedDate(day);
                              setSelectedTime(null);
                            }}
                            className={`aspect-square rounded-xl text-sm font-medium transition-all flex items-center justify-center relative
                          ${past ? 'bg-lavender-grey/10 text-lavender-grey/40 cursor-not-allowed' :
                                full ? 'bg-lavender-grey/10 text-lavender-grey/40 cursor-not-allowed line-through' :
                                  selectedDate === day
                                    ? 'bg-punch-red text-white shadow-lg shadow-punch-red/30'
                                    : 'hover:bg-white text-space-indigo'}`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs text-lavender-grey uppercase font-bold mb-4 px-2">Horário Preferencial</p>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map(time => {
                        const booked = selectedDate ? isTimeBooked(selectedDate, time) : false;
                        return (
                          <button
                            key={time}
                            disabled={booked || !selectedDate}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 rounded-xl text-xs font-bold transition-all border
                          ${booked
                                ? 'bg-lavender-grey/10 text-lavender-grey/40 border-transparent cursor-not-allowed line-through'
                                : selectedTime === time
                                  ? 'bg-space-indigo text-white border-space-indigo shadow-md'
                                  : 'bg-white text-space-indigo border-lavender-grey/20 hover:border-punch-red'}`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full bg-platinum/30 border border-lavender-grey/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-punch-red transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={contactInfo.phone}
                      onChange={handlePhoneChange}
                      maxLength={15}
                      className="w-full bg-platinum/30 border border-lavender-grey/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-punch-red transition-colors"
                    />
                  </div>

                  <div className="space-y-4">
                    <button
                      disabled={!selectedDate || !selectedTime || !contactInfo.name || !contactInfo.phone || isSubmitting}
                      onClick={handleBooking}
                      className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2
                        ${(selectedDate && selectedTime && contactInfo.name && contactInfo.phone && !isSubmitting)
                          ? 'bg-punch-red text-white hover:bg-flag-red shadow-punch-red/20'
                          : 'bg-lavender-grey/20 text-lavender-grey cursor-not-allowed'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processando...
                        </>
                      ) : 'Confirmar Agendamento'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-space-indigo mb-6">
            Sua roupa <span className="text-punch-red">impecável</span>, sem esforço.
          </h1>
          <p className="text-lg text-lavender-grey mb-10 max-w-lg">
            A Clean Nobre cuida das suas peças com o carinho que elas merecem. Tecnologia de ponta e entrega rápida para você aproveitar o que realmente importa.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-punch-red text-white px-8 py-4 rounded-full font-bold hover:bg-flag-red transition-all shadow-lg shadow-punch-red/20"
            >
              Agendar Coleta
            </button>
            <a
              href="#services"
              className="border-2 border-space-indigo text-space-indigo px-8 py-4 rounded-full font-bold hover:bg-space-indigo hover:text-white transition-all inline-block"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 lg:mt-0 relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000"
              alt="Laundry Service"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="bg-punch-red/10 p-3 rounded-full">
              <Clock className="text-punch-red" />
            </div>
            <div>
              <p className="text-sm font-bold text-space-indigo">Entrega em 24h</p>
              <p className="text-xs text-lavender-grey">Serviço Express</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-platinum/50 skew-x-12 transform translate-x-1/2" />
  </section>
);

const Services = () => {
  const services = [
    { icon: <Shirt />, title: 'Lavagem a Seco', desc: 'Ideal para ternos, vestidos de festa e tecidos delicados.' },
    { icon: <Waves />, title: 'Lavagem Premium', desc: 'Tratamento especial com produtos biodegradáveis de alta performance.' },
    { icon: <Sparkles />, title: 'Passadoria', desc: 'Suas roupas passadas com precisão e prontas para o uso.' },
    { icon: <Zap />, title: 'Remoção de Manchas', desc: 'Técnicas avançadas para eliminar as manchas mais difíceis.' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2">O que fazemos</h2>
          <p className="text-4xl font-bold text-space-indigo">Serviços Especializados</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-platinum hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-lavender-grey/10"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-punch-red mb-6 shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-space-indigo mb-3">{s.title}</h3>
              <p className="text-lavender-grey text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        <div className="relative mb-16 lg:mb-0">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1000"
              alt="Our Facility"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-punch-red rounded-full -z-10 opacity-20 blur-3xl" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2 text-left">Sobre Nós</h2>
          <h3 className="text-4xl font-bold text-space-indigo mb-6">Tradição em Cuidado e Modernidade em Tecnologia</h3>
          <p className="text-lavender-grey mb-8 leading-relaxed">
            A Clean Nobre nasceu da necessidade de oferecer um serviço de lavanderia que unisse a confiança do cuidado artesanal com a eficiência da tecnologia moderna. Localizada no coração da cidade, somos referência em sustentabilidade e qualidade.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-punch-red flex-shrink-0" />
              <div>
                <p className="font-bold text-space-indigo">Sustentável</p>
                <p className="text-xs text-lavender-grey">Economia de 40% de água</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-punch-red flex-shrink-0" />
              <div>
                <p className="font-bold text-space-indigo">Experiência</p>
                <p className="text-xs text-lavender-grey">+10 anos no mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { icon: <Phone />, title: 'Agendamento', desc: 'Peça pelo site ou WhatsApp em segundos.' },
    { icon: <Truck />, title: 'Coleta', desc: 'Buscamos suas roupas no horário combinado.' },
    { icon: <Waves />, title: 'Lavagem', desc: 'Tratamento premium conforme o tecido.' },
    { icon: <CheckCircle2 />, title: 'Entrega', desc: 'Roupas limpas e cheirosas na sua porta.' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-space-indigo text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2">Processo</h2>
          <p className="text-4xl font-bold">Como Funciona</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <span className="text-punch-red">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-lavender-grey text-sm">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-punch-red/50 to-transparent -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'Essencial', features: ['Até 15 peças', 'Lavagem comum', 'Passadoria inclusa', 'Entrega em 48h'] },
    { name: 'Premium', features: ['Até 35 peças', 'Lavagem a seco (2 un)', 'Tratamento de manchas', 'Entrega em 24h'], popular: true },
    { name: 'Família', features: ['Peças ilimitadas*', 'Todos os serviços', 'Coleta prioritária', 'Suporte VIP'] },
  ];

  return (
    <section id="pricing" className="py-24 bg-platinum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2">Planos</h2>
          <p className="text-4xl font-bold text-space-indigo">Nossos Pacotes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-10 rounded-3xl bg-white border ${plan.popular ? 'border-punch-red shadow-2xl scale-105' : 'border-lavender-grey/10'} relative flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-punch-red text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  Mais Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-space-indigo mb-6">{plan.name}</h3>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-lavender-grey">
                    <CheckCircle2 className="text-punch-red w-4 h-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511983344184"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all text-center ${plan.popular ? 'bg-punch-red text-white hover:bg-flag-red' : 'bg-platinum text-space-indigo hover:bg-lavender-grey/20'}`}
              >
                Consultar Detalhes
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Mariana Silva', role: 'Anfitriã de Airbnb (Alta Demanda)', text: 'O serviço de lavagem a seco é impecável. Meus enxovais parecem novos toda vez que voltam da Clean Nobre.', stars: 5 },
    { name: 'Ricardo Santos', role: 'Gerente de Restaurante (Giro Diário)', text: 'A praticidade da coleta e entrega mudou minha rotina. Recomendo o plano Premium para quem tem pouco tempo.', stars: 5 },
    { name: 'Ana Costa', role: 'Executiva de Vendas (Uso Frequente)', text: 'Adoro o cheirinho das roupas quando chegam. Dá para sentir que usam produtos de alta qualidade.', stars: 4 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2">Depoimentos</h2>
          <p className="text-4xl font-bold text-space-indigo">O que dizem nossos clientes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl bg-platinum/50 border border-lavender-grey/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < r.stars ? 'text-punch-red fill-punch-red' : 'text-lavender-grey'}`} />
                ))}
              </div>
              <p className="text-space-indigo italic mb-6">"{r.text}"</p>
              <div>
                <p className="font-bold text-space-indigo">{r.name}</p>
                <p className="text-xs text-lavender-grey">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Qual o prazo médio de entrega?', a: 'Nosso prazo padrão é de 48 horas úteis. Para serviços expressos, entregamos em até 24 horas.' },
    { q: 'Vocês lavam tapetes e cortinas?', a: 'Sim! Temos equipamentos especializados para peças grandes e pesadas. Consulte valores específicos.' },
    { q: 'Como funciona a coleta e entrega?', a: 'Você agenda pelo site ou app, nós buscamos no seu endereço e devolvemos tudo pronto para o uso.' },
    { q: 'Quais produtos vocês utilizam?', a: 'Utilizamos apenas produtos biodegradáveis e hipoalergênicos, garantindo a segurança da sua família e do meio ambiente.' },
  ];

  return (
    <section id="faq" className="py-24 bg-platinum">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2">Dúvidas</h2>
          <p className="text-4xl font-bold text-space-indigo">Perguntas Frequentes</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-platinum/20 transition-colors"
              >
                <span className="font-bold text-space-indigo">{faq.q}</span>
                <ChevronDown className={`text-punch-red transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-sm text-lavender-grey leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-space-indigo rounded-[3rem] overflow-hidden shadow-2xl lg:grid lg:grid-cols-2">
        <div className="p-12 lg:p-20">
          <h2 className="text-sm font-bold text-punch-red uppercase tracking-widest mb-2">Contato</h2>
          <h3 className="text-4xl font-bold text-white mb-8">Nossa Localização</h3>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-punch-red">
                <Phone />
              </div>
              <div>
                <p className="text-xs text-lavender-grey uppercase font-bold">Telefone</p>
                <p className="text-white font-medium">(11) 98334-4184</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-punch-red">
                <Mail />
              </div>
              <div>
                <p className="text-xs text-lavender-grey uppercase font-bold">E-mail</p>
                <p className="text-white font-medium">contato@cleannobre.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-punch-red">
                <MapPin />
              </div>
              <div>
                <p className="text-xs text-lavender-grey uppercase font-bold">Endereço</p>
                <p className="text-white font-medium">R. Roca Sales, 302 A - Vila any, Guarulhos - SP, 07262-090</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-punch-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-punch-red transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="w-full h-[400px] lg:h-full min-h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=R.%20Roca%20Sales%2C%20302%20A%20-%20Vila%20any%2C%20Guarulhos%20-%20SP%2C%2007262-090&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clean Nobre Location"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [activeLegal, setActiveLegal] = useState<'terms' | 'privacy' | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const termsContent = (
    <>
      <p>Bem-vindo à Clean Nobre. Ao utilizar nossos serviços, você concorda com os seguintes termos:</p>
      <h2 className="text-xl font-bold text-space-indigo mt-8">1. Serviços</h2>
      <p>A Clean Nobre oferece serviços de lavanderia, passadoria e limpeza especializada. Reservamo-nos o direito de recusar peças que apresentem riscos à integridade de nossos equipamentos ou de outras peças.</p>
      <h2 className="text-xl font-bold text-space-indigo mt-8">2. Responsabilidade</h2>
      <p>Embora tomemos todo o cuidado possível, não nos responsabilizamos por danos causados por defeitos de fabricação, desgaste natural do tempo ou falta de etiquetas de instrução de lavagem.</p>
      <h2 className="text-xl font-bold text-space-indigo mt-8">3. Prazos</h2>
      <p>Os prazos de entrega são estimativas e podem variar conforme a demanda ou complexidade das peças.</p>
    </>
  );

  const privacyContent = (
    <>
      <p>Sua privacidade é importante para nós. Esta política explica como lidamos com seus dados:</p>
      <h2 className="text-xl font-bold text-space-indigo mt-8">1. Coleta de Dados</h2>
      <p>Coletamos informações básicas como nome, endereço e telefone para a prestação dos serviços de coleta e entrega.</p>
      <h2 className="text-xl font-bold text-space-indigo mt-8">2. Uso das Informações</h2>
      <p>Seus dados são utilizados exclusivamente para a operação logística e comunicação sobre seus pedidos.</p>
      <h2 className="text-xl font-bold text-space-indigo mt-8">3. Segurança</h2>
      <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado.</p>
    </>
  );

  return (
    <div className="min-h-screen selection:bg-punch-red selection:text-white">
      <Navbar />
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />
      <Services />
      <About />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />

      <footer className="py-12 bg-white/80 backdrop-blur-md border-t border-lavender-grey/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <WashingMachine className="text-punch-red w-6 h-6" />
              <span className="text-xl font-bold tracking-tighter text-space-indigo">Clean<span className="text-punch-red"> Nobre</span></span>
            </div>
            <p className="text-sm text-lavender-grey">
              © 2026 Clean Nobre. Todos os direitos reservados.
            </p>
            <div className="flex gap-8">
              <button onClick={() => setActiveLegal('terms')} className="text-sm font-medium text-space-indigo hover:text-punch-red transition-colors">Termos de Uso</button>
              <button onClick={() => setActiveLegal('privacy')} className="text-sm font-medium text-space-indigo hover:text-punch-red transition-colors">Privacidade</button>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
      <CookieConsent />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <AnimatePresence>
        {activeLegal === 'terms' && (
          <LegalPage
            title="Termos de Uso"
            content={termsContent}
            onClose={() => setActiveLegal(null)}
          />
        )}
        {activeLegal === 'privacy' && (
          <LegalPage
            title="Política de Privacidade"
            content={privacyContent}
            onClose={() => setActiveLegal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
