
class Speedtest {
  constructor() {
    this.onupdate = () => {};
    this.onend = () => {};
  }
  start() {
    const simulate = () => {
      const ping = Math.floor(Math.random() * 30) + 5;
      const download = (Math.random() * 200 + 50).toFixed(1);
      const upload = (Math.random() * 50 + 10).toFixed(1);
      this.onupdate({ ping, download, upload });
      this.onend();
    };
    setTimeout(simulate, 1000);
  }
}
