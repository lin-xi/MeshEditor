/**
 * 事件管理器
 */
class EventHub {
  private static hub: EventHub;

  private eventMap: Map<string, Set<Function>>;

  constructor() {
    this.eventMap = new Map<string, Set<Function>>();
  }

  public on(event: string, callback: Function): void {
    if (!this.eventMap.has(event))
      this.eventMap.set(event, new Set<Function>());
    const callbacks = this.eventMap.get(event);
    if (callbacks) {
      callbacks.add(callback);
      this.eventMap.set(event, callbacks);
    }
  }

  public emit(event: string, ...args: unknown[]): void {
    const callbacks = this.eventMap.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(...args);
      });
    }
  }

  public off(event: string, callback: Function): void {
    const callbacks = this.eventMap.get(event);
    if (!callbacks) throw Error(`Target event '${event}' not found`);
    callbacks.delete(callback);
  }

  /**
   * 注册事件监听
   * @param event 事件名
   * @param callback 回调函数
   */
  static on(event: string, callback: Function): void {
    if (!EventHub.hub) {
      EventHub.hub = new EventHub();
    }
    EventHub.hub.on(event, callback);
  }

  /** @ignore */
  static emit(event: string, ...args: unknown[]): void {
    if (!EventHub.hub) {
      EventHub.hub = new EventHub();
    }
    EventHub.hub.emit(event, ...args);
  }

  /**
   * 注销事件监听
   * @param event 事件名
   * @param callback 回调函数
   */
  static off(event: string, callback: Function): void {
    if (!EventHub.hub) {
      EventHub.hub = new EventHub();
    }
    EventHub.hub.off(event, callback);
  }

  /**
   * @deprecated
   * 注销事件监听, 请使用EventHub.off代替
   * @param event 事件名
   * @param callback 回调函数
   */
  static remove(event: string, callback: Function): void {
    console.warn(
      "EventHub.remove() will be removed in future releases. Use EventHub.off() instead."
    ); // eslint-disable-line
    EventHub.off(event, callback);
  }
}

export { EventHub };
