// timeDataGenerator.js
export function generateTimedata() {
  const today = new Date();
  const timedata = [];
  const categoryStats = {
  "Work": {
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  "No Category": {
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  "Personal": {
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  "Health & Fitness": {
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  "Learning": {
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  "Workout": {
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  }
};


  for (let i = 0; i < 7; i++) {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + i);
    const year = tomorrow.getFullYear()
    const day = tomorrow.getDate();
    const dayname = tomorrow.toLocaleString('default', { weekday: 'short' });
    const month = tomorrow.toLocaleString('default', { month: 'short' });

    const arr = [];
    for (let h = 6; h <=24; h++) {
      const slotStart = new Date(tomorrow);
      slotStart.setHours(h, 0, 0, 0);

      const slotEnd = new Date(slotStart);
      slotEnd.setHours(slotStart.getHours() + 1);

      const startHour = slotStart.getHours();
      const endHour = slotEnd.getHours();
      const minute = '00';

      const periodS = startHour >= 12 ? 'PM' : 'AM';
      const periodE = endHour >= 12 ? 'PM' : 'AM';

      const finalS = `${startHour % 12 || 12}:${minute}${periodS}`;
      const finalE = `${endHour % 12 || 12}:${minute}${periodE}`;

      arr.push({
        start: finalS,
        end: finalE,
        activityName: "",
        category: "",
        planned:false
      });
    }

    timedata.push({
      date: day,
      DayName: dayname,
      Month: month,
      Year:year ,
      activity: [],
      slots: arr,
      summary:categoryStats
    });
  }

  return timedata;
}
export const Days =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31] ;
export const Months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  const today = new Date();
  const tom = new Date(today);
  tom.setFullYear(tom.getFullYear()+1);
  

 export const Year = [today.getFullYear(),tom.getFullYear()];

 export const categoryStats = [
  {
    category: "Work",
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  {
    category: "No Category",
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  {
    category: "Personal",
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  {
    category: "Health & Fitness",
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  {
    category: "Learning",
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  },
  {
    category: "Workout",
    totalTime: 0,
    totalMinutes: 0,
    totalActivity: 0
  }
];

export const categoryColors = {
  "Work": "#3B82F6",
  "No Category": "#6B7280",
  "Personal": "#F43F5E",
  "Health & Fitness": "#10B981",
  "Learning": "#8B5CF6",
  "Workout": "#F97316"
};
