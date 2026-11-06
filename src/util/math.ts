// при одинаковых a и b получаем одинаковый результат
// нет побочных эффектов
// + переиспользуемость

export const add = (a: number, b: number) => a + b;

export const increment = (a: number) => add(a, 1);

// const loggedAdd = withLogger(add);

// SOLID, OCP - open/closed principle
// S, SRP - single responsibility principle

// export const loggedAdd = (a: number, b: number) => {
// 	console.log("Adding", a, "and", b);
// 	const result = add(a, b);
// 	console.log("Result:", result);
// 	return result;
// };

// A. функция передается как аргумент
// B. функция возвращает функцию
// A, B, A + B
const withLogger = <Args extends unknown[], Result>(
	msg: string,
	fn: (...args: Args) => Result,
) => {
	return (...args: Args): Result => {
		console.log(msg, ...args);
		const result = fn(...args);
		console.log("Result:", result);
		return result;
	};
};

export const loggedAdd = withLogger("Adding", add);
loggedAdd(1, 2); // Adding 1 2 -> Result: 3
