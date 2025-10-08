const prisma = require('../prisma');
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required()
});

exports.createUser = async (req, res) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await prisma.user.create({ data: value });
  res.status(201).json(user);
};

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany({ orderBy: { id: 'asc' } });
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  const { error, value } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const updated = await prisma.user.update({ where: { id }, data: value });
  res.json(updated);
};

exports.deleteUser = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  await prisma.user.delete({ where: { id } });
  res.status(204).send();
};
