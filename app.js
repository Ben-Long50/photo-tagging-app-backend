import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/users.js';
import levelRouter from './routes/levels.js';
import authRouter from './routes/authentication.js';
import scoreRouter from './routes/score.js';

const app = express();
mongoose.set('strictQuery', false);
const mongoDB = process.env.DATABASE_URL;

async function main() {
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(import.meta.dirname, 'public')));

app.use(cors());
app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', levelRouter);
app.use('/', scoreRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
