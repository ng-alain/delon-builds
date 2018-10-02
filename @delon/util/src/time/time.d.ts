/**
 * 获取时间范围
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 */
export declare function getTimeDistance(type: 'today' | '-today' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number, time?: Date | string | number): [Date, Date];
