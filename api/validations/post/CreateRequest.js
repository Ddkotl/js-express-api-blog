import { body } from 'express-validator'

export const CreateRequest = [
	body('title', 'Неверный заголовок').isLength({ min: 3 }).isString(),
	body('content', 'Неверный текст статьи').isLength({ min: 10 }).isString(),
	body('category_id', 'Id долженбыть числом').optional().isInt(),
	body('tags', 'Неверный формат тэгов').optional().isString(),
	body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
]
