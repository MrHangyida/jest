// test('测试10与10匹配', () => {
//   //ToBe 匹配器 matchers
//   //类似 ===
//   expect(10).toBe(10);
// })
// test('测试对象与对象内容匹配', () => {
//   //toEqual 匹配器 matchers
//   const obj = { name: 'hang' }
//   expect(obj).toEqual({ name: 'hang' });
// })
// test('测试null', () => {
//   //toEqual 匹配器 matchers
//   //null特殊对象
//   const obj = null
//   expect(obj).toBeNull();
// })
// test('测试undefined', () => {
//   //toBeUndefined 匹配器 matchers
//   //null!==undefined
//   //undefind 未定义值 null没有该值且打印
//   const obj = undefined
//   expect(obj).toBeUndefined();
// })
// test('测试defined', () => {
//   //toBeDefined 匹配器 matchers
//   //定义值
//   const obj = null
//   expect(obj).toBeDefined();
// })
// test('测试true', () => {
//   //toBeTruthy 匹配器 matchers
//   const flag = 1 || true
//   expect(flag).toBeTruthy();
// })

// test('测试false', () => {
//   //toBeFalsy 匹配器 matchers
//   const flag = 0 || false
//   expect(flag).toBeFalsy();
// })

// test('测试not', () => {
//   //not 匹配器 matchers
//   // 非 选择器
//   const flag = 1 || true
//   expect(flag).not.toBeFalsy();
// })

// // 数字相关的匹配器
// test('测试大于', () => {
//   const number = 10
//   expect(number).toBeGreaterThan(9);
// })

// test('测试小于', () => {
//   const number = 10
//   expect(number).toBeLessThan(11);
// })
// test('测试大于等于', () => {
//   const number = 10
//   expect(number).toBeGreaterThanOrEqual(10);
// })
// test('测试小于等于', () => {
//   const number = 10
//   expect(number).toBeLessThanOrEqual(10);
// })

// test('测试小数相加', () => {
//   const firstNumber = 0.1
//   const secondNumber = 0.2
//   expect(firstNumber + secondNumber).toBeCloseTo(0.3);
// })

//String

test('测试字符串', () => {
  const str = 'www.baidu.com'
  expect(str).toMatch('www');
  expect(str).toMatch(/www/);
})

// Array
test('测试数组', () => {
  const arr = 'www.baidu.com'.split('.')
  expect(arr).toContain('www');
})

// 异常
const throwError = function () {
  throw new Error('this is a error')
}
test('测试异常', () => {
  // expect(throwError).toThrow();
  expect(throwError).toThrow('this is an error');
})