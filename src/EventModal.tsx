import React, { useState } from 'react'
import { CalendarDay } from './CalendarDay'
import { EventModal } from './EventModal'
import './index.css'

interface CalendarEvent {
  id: number
  title: string
  date: string
  time: string
  color: string
}

export const Calendar: React.FC = () => {
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState<CalendarEvent[]>([
    { id: 1, title: 'Встреча с командой', date: new Date().toISOString().split('T')[0], time: '10:00', color: 'blue' },
    { id: 2, title: 'Обед', date: new Date().toISOString().split('T')[0], time: '13:00', color: 'green' },
    { id: 3, title: 'Презентация проекта', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: '15:00', color: 'purple' }
  ])

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const addEvent = (event: Omit<CalendarEvent, 'id'>) => {
    setEvents([...events, { ...event, id: Date.now() }])
    setShowModal(false)
  }

  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
                      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

  return (
    <div className="app-container">
      <div className="app-card calendar-card">
        <header className="calendar-header">
          <h1>📅 {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h1>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            + Добавить событие
          </button>
        </header>

        <div className="calendar-grid">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
          
          {Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty"></div>
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dateStr = currentDate.toISOString().split('T')[0].replace(/\d+-\d+-\d+/, 
              `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`)
            const dayEvents = events.filter(e => e.date === dateStr)
            
            return (
              <CalendarDay 
                key={day} 
                day={day} 
                events={dayEvents}
                isToday={day === new Date().getDate()}
                onClick={() => setSelectedDate(dateStr)}
              />
            )
          })}
        </div>

        {showModal && (
          <EventModal 
            date={selectedDate || new Date().toISOString().split('T')[0]}
            onSave={addEvent}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  )
}
