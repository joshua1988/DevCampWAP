// 변수 선언
var a = 10;

// 함수 선언
function b() {
	return '20';
};

// 두 개의 값을 더해서 반환해주는 함수
export function sum(a, b) {
	return a + b;
};

// 선언한 변수와 함수 모두 다른 모듈에서 사용할 수 있게 export
export { a, b }
