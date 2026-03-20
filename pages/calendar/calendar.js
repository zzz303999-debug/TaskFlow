// pages/calendar/calendar.js
Page({
  data: {
    currentMonth: '',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    days: [],
    selectedDate: '',
    events: [],
    weekStats: {
      total: 0,
      completed: 0,
      pending: 0
    }
  },

  onLoad() {
    this.initCalendar();
  },

  // 初始化日历
  initCalendar() {
    const now = new Date();
    this.generateCalendar(now.getFullYear(), now.getMonth());
    this.setData({
      selectedDate: this.formatDate(now)
    });
  },

  // 生成日历数据
  generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const days = [];
    const today = new Date();
    const tasks = wx.getStorageSync('tasks') || [];

    // 上月剩余天数
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        isToday: false,
        hasEvent: false,
        date: ''
      });
    }

    // 当月天数
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      const isToday = date.toDateString() === today.toDateString();
      const dateStr = this.formatDate(date);
      // 检查当天是否有任务
      const hasEvent = tasks.some(task => {
        if (task.deadline) {
          const taskDate = task.deadline.split(' ')[0];
          const [taskMonth, taskDay] = taskDate.split('月');
          const taskDayNum = parseInt(taskDay.replace('日', ''));
          return parseInt(taskMonth) === month + 1 && taskDayNum === i;
        }
        return false;
      });
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday,
        hasEvent,
        date: dateStr
      });
    }

    // 下月开始天数
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
        hasEvent: false,
        date: ''
      });
    }

    const monthStr = `${year}年${month + 1}月`;
    this.setData({
      currentMonth: monthStr,
      days
    });
  },

  // 上个月
  prevMonth() {
    const [year, month] = this.data.currentMonth.replace('年', '-').replace('月', '').split('-');
    const prevMonth = new Date(parseInt(year), parseInt(month) - 2, 1);
    this.generateCalendar(prevMonth.getFullYear(), prevMonth.getMonth());
  },

  // 下个月
  nextMonth() {
    const [year, month] = this.data.currentMonth.replace('年', '-').replace('月', '').split('-');
    const nextMonth = new Date(parseInt(year), parseInt(month), 1);
    this.generateCalendar(nextMonth.getFullYear(), nextMonth.getMonth());
  },

  // 选择日期
  selectDay(e) {
    const date = e.currentTarget.dataset.date;
    if (!date) return;

    this.setData({
      selectedDate: date,
      events: this.getEventsForDate(date)
    });
  },

  // 获取某日期的事件
  getEventsForDate(date) {
    const tasks = wx.getStorageSync('tasks') || [];
    const [year, month, day] = date.split('-');
    const targetMonth = parseInt(month);
    const targetDay = parseInt(day);
    
    return tasks.filter(task => {
      if (task.deadline) {
        const taskDate = task.deadline.split(' ')[0];
        const [taskMonth, taskDay] = taskDate.split('月');
        const taskDayNum = parseInt(taskDay.replace('日', ''));
        return parseInt(taskMonth) === targetMonth && taskDayNum === targetDay;
      }
      return false;
    });
  },

  // 格式化日期
  formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});
