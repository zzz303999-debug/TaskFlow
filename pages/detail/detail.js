// pages/detail/detail.js
Page({
  data: {
    id: '',
    title: '',
    done: false,
    deadline: '',
    note: '',
    subtasks: [],
    toastShow: false,
    toastText: ''
  },

  onLoad(options) {
    this.setData({
      id: options.id || '',
      title: decodeURIComponent(options.title || '任务详情')
    });
    this.loadTaskDetail();
  },

  // 加载任务详情
  loadTaskDetail() {
    const tasks = wx.getStorageSync('tasks') || [];
    const task = tasks.find(t => t.id == this.data.id);
    if (task) {
      this.setData({
        title: task.title,
        done: task.done,
        deadline: task.deadline || '',
        note: task.note || '',
        subtasks: task.subtasks || []
      });
    }
  },

  // 切换完成状态
  toggleComplete() {
    const newDone = !this.data.done;
    this.setData({ done: newDone });
    this.updateTaskInStorage({ done: newDone });
    this.showToast(newDone ? '任务已完成 🎉' : '已标记为未完成');
    
    // 如果是从未完成标记为已完成，返回首页
    if (newDone) {
      setTimeout(() => {
        wx.navigateBack();
      }, 1000);
    }
  },

  // 更新本地存储中的任务
  updateTaskInStorage(updates) {
    const tasks = wx.getStorageSync('tasks') || [];
    const updatedTasks = tasks.map(task => {
      if (task.id == this.data.id) {
        return { ...task, ...updates };
      }
      return task;
    });
    wx.setStorageSync('tasks', updatedTasks);
  },

  // 添加子任务
  addSubtask() {
    wx.showModal({
      title: '添加子任务',
      editable: true,
      placeholderText: '输入子任务内容',
      success: (res) => {
        if (res.confirm && res.content) {
          const newSubtask = {
            id: Date.now(),
            title: res.content,
            done: false
          };
          const newSubtasks = [...this.data.subtasks, newSubtask];
          this.setData({
            subtasks: newSubtasks
          });
          this.updateTaskInStorage({ subtasks: newSubtasks });
          this.showToast('已添加子任务');
        }
      }
    });
  },

  // 删除任务
  deleteTask() {
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个任务吗？',
      confirmColor: '#FF754C',
      success: (res) => {
        if (res.confirm) {
          // 从本地存储中删除任务
          const tasks = wx.getStorageSync('tasks') || [];
          const updatedTasks = tasks.filter(task => task.id != this.data.id);
          wx.setStorageSync('tasks', updatedTasks);
          this.showToast('任务已删除');
          setTimeout(() => {
            wx.navigateBack();
          }, 1000);
        }
      }
    });
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
