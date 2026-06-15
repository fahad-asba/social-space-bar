'use client';
import { motion } from 'motion/react';
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock, Sparkles, Shield, Target } from 'lucide-react';

const features = [
  { text: '30-minute 1-on-1 session', icon: <Clock size={14} /> },
  { text: 'Custom marketing strategy', icon: <Target size={14} /> },
  { text: 'Expert marketing advice', icon: <Sparkles size={14} /> },
  { text: 'No commitment required', icon: <Shield size={14} /> },
];

const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const calendarDays = [null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const availableDays = [5, 9, 12, 16, 18, 23, 26];

export default function ThankYouConsultation() {
  return (
    <section id="consultation" className="ty-cal-section">
      <div className="ty-cal-bg-glow" />
      <div className="container ty-cal-inner">
        <motion.div
          className="ty-cal-card glass-card-premium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="ty-cal-topbar" />

          <div className="ty-cal-body">
            <motion.div
              className="ty-cal-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="ty-cal-icon-wrap">
                <CalendarDays size={32} />
              </div>
              <div className="section-label">Schedule Appointment</div>
              <h2 className="ty-cal-heading">
                Schedule Your Free <span className="gold">Consultation</span>
              </h2>
              <p className="ty-cal-desc">
                Choose a convenient time and speak directly with our marketing experts. Get a custom strategy tailored to your brand&apos;s unique needs - no commitment required.
              </p>

              <ul className="ty-cal-features">
                {features.map((f, i) => (
                  <motion.li
                    key={f.text}
                    className="ty-cal-feature"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <span className="ty-cal-check"><Check size={12} strokeWidth={3} /></span>
                    <span className="ty-cal-feature-icon">{f.icon}</span>
                    {f.text}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                type="button"
                className="btn-primary ty-cal-btn"
                onClick={() => {}}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <CalendarDays size={18} />
                Book Your Free Session
              </motion.button>
            </motion.div>

            <motion.div
              className="ty-cal-preview"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="ty-cal-preview-card">
                <div className="ty-cal-preview-header">
                  <div className="ty-cal-preview-month">
                    <ChevronLeft size={16} />
                    <span>June 2026</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
                <div className="ty-cal-days-header">
                  {dayNames.map(d => <span key={d} className="ty-cal-day-name">{d}</span>)}
                </div>
                <div className="ty-cal-grid">
                  {calendarDays.map((day, i) => (
                    <span
                      key={i}
                      className={`ty-cal-day${day === 3 ? ' ty-cal-day-active' : ''}${day && availableDays.includes(day) ? ' ty-cal-day-available' : ''}${!day ? ' ty-cal-day-empty' : ''}`}
                    >{day}</span>
                  ))}
                </div>
                <div className="ty-cal-preview-footer">
                  <Clock size={14} />
                  <span>30 min • Phone call</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
