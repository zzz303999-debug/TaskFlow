// pages/stats/stats.js
Page({
  data: {
    stats: {
      completed: 23,
      pending: 5,
      rate: 82
    },
    chartData: [
      { day: '周一', value: 3, height: 30 },
      { day: '周二', value: 5, height: 50 },
      { day: '周三', value: 4, height: 40 },
      { day: '周四', value: 6, height: 60 },
      { day: '周五', value: 8, height: 80 },
      { day: '周六', value: 5, height: 50 },
      { day: '周日', value: 4, height: 40 }
    ],
    timeData: [
      { label: '学习', percent: 45, color: '#2563EB' },
      { label: '工作', percent: 30, color: '#FF754C' },
      { label: '生活', percent: 15, color: '#3FD1A5' },
      { label: '其他', percent: 10, color: '#94a3b8' }
    ],
    streak: 5
  },

  onLoad() {
    // 可以在这里从后端获取真实数据
  },

  onShow() {
    // 每次显示时刷新数据
    this.refreshStats();
  },

  // 刷新统计数据
  refreshStats() {
    // 模拟从本地存储或后端获取数据
    const stats = this.calculateStats();
    this.setData(stats);
  },

  // 计算统计数据（示例）
  calculateStats() {
    // 实际项目中应该从数据库计算
    return {
      stats: {
        completed: 23,
        pending: 5,
        rate: 82
      },
      streak: 5
    };
  }
});
