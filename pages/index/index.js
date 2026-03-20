// pages/index/index.js
Page({
  data: {
    today: '',
    tasks: [],
    inputValue: '',
    toastShow: false,
    toastText: ''
  },

  onLoad() {
    // 设置今天日期
    this.updateToday();
    // 从本地存储加载任务
    this.loadTasks();
  },

  onShow() {
    // 每次显示页面时更新日期和任务
    this.updateToday();
    this.loadTasks();
  },

  // 从本地存储加载任务
  loadTasks() {
    const tasks = wx.getStorageSync('tasks') || [];
    this.setData({ tasks });
  },

  // 保存任务到本地存储
  saveTasks() {
    wx.setStorageSync('tasks', this.data.tasks);
  },

  // 更新日期
  updateToday() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekDay = weekDays[date.getDay()];
    this.setData({
      today: `${month}月${day}日 ${weekDay}`
    });
  },

  // 切换任务完成状态
  toggleTask(e) {
    const id = e.currentTarget.dataset.id;
    const tasks = this.data.tasks.map(task => {
      if (task.id === id) {
        const newDone = !task.done;
        if (newDone) {
          this.showToast('任务完成 +10 XP 🎉');
        }
        return { ...task, done: newDone };
      }
      return task;
    });
    this.setData({ tasks });
    this.saveTasks();
  },

  // 打开任务详情
  openDetail(e) {
    const title = e.currentTarget.dataset.title;
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}&title=${encodeURIComponent(title)}`
    });
  },

  // AI 智能排序
  aiSort() {
    this.showToast('AI 已帮你优化今日任务顺序');
    // 模拟 AI 排序：把未完成的移到前面
    const sorted = [...this.data.tasks].sort((a, b) => {
      if (a.done === b.done) return 0;
      return a.done ? 1 : -1;
    });
    this.setData({ tasks: sorted });
  },

  // 快速添加任务
  quickAddTask() {
    const text = this.data.inputValue.trim();
    if (!text) {
      this.showToast('请输入任务内容');
      return;
    }

    // 简单的时间解析（可以扩展更智能的解析）
    let time = '刚刚';
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

    const newTask = {
      id: Date.now(),
      title: text,
      time: time,
      done: false,
      createdAt: new Date().toISOString(),
      deadline: `${now.getMonth() + 1}月${now.getDate()}日 ${time}`
    };

    this.setData({
      tasks: [...this.data.tasks, newTask],
      inputValue: ''
    });
    this.saveTasks();
    this.showToast('已添加任务：' + text);
  },

  // 输入框输入
  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // 语音输入（预留）
  startVoice() {
    wx.getRecorderManager().onStop((res) => {
      console.log('录音停止', res);
      // 这里可以接入语音识别 API
    });
    
    wx.getRecorderManager().start({
      duration: 60000,
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 96000
    });
    
    this.showToast('请说话...');
    
    // 2 秒后自动停止（示例）
    setTimeout(() => {
      wx.getRecorderManager().stop();
    }, 2000);
  },

  // Toast 提示
  showToast(text) {
    this.setData({
      toastText: text,
      toastShow: true
    });
    setTimeout(() => {
      this.setData({
        toastShow: false
      });
    }, 2000);
  }
});
