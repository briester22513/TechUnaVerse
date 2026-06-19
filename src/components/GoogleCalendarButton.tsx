"use client";
import { useEffect, useRef } from "react";

export default function GoogleCalendarButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject CSS once
    const cssId = "gcal-scheduling-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
      document.head.appendChild(link);
    }

    // Load and init the scheduling button script
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      const cal = (window as { calendar?: { schedulingButton?: { load: (opts: unknown) => void } } }).calendar;
      if (containerRef.current && cal?.schedulingButton) {
        cal.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3mYxiuR6ynYE3zXVRfDcVN-e7uHO0sCof_ij6ka6_4VvNUPaDV_Rh2w2DqzmLY7GsdEZo6RxFu?gv=true",
          color: "#D4AF37",
          label: "Book an Appointment",
          target: containerRef.current,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return <div ref={containerRef} />;
}
