import { createAction } from '@reduxjs/toolkit'; // Импорт функции создания экшена

// Функция создания обьекта экшена, со свойством type (строка) и свойством value (payload).
// Если нужны манипуляции с обьектом, тогда использует Prepare Callback
export const onLeaveFeedback = createAction('counter/onLeaveFeedback');
