export const sampleUser = {
  email: 'biba@mail.com',
  password: 'biba123',
  name: 'biba',
  phone: '987033223',
  city: 'bibovka',
  photo: '',
  birthday: '2000-04-01T00:00:00.000Z',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlYzAzM2RiMDk3YjdlNGI1OWI0YSIsImlhdCI6MTY3Mjg2NjgxOSwiZXhwIjoxNjcyODY3NzE5fQ.e3_zz2DWcJ35FRkuIkeAMBDTU1345N9732ONhvu6vTQ',
  userId: '63b5ec033db097b7e4b59b4a',
};

export const sampleUser2 = {
  userId: '63b5edb23db097b7e4b59b4e',
  name: 'boba',
  password: 'boba123',
  email: 'boba@mail.com',
  photo: '',
  birthday: '2000-04-01T00:00:00.000Z',
  phone: '987033223',
  city: 'bibovka',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjVlZGIyM2RiMDk3YjdlNGI1OWI0ZSIsImlhdCI6MTY3Mjg2NzI1MCwiZXhwIjoxNjcyODY4MTUwfQ.ql2x8W_Hf_Pu20I_1Gj2aCZ6KROWhPxgBmHMW1xYnug',
};

//1. Register New User
// To register new user import dependecies and pass dispatch function into button handler:

// import { useDispatch } from 'react-redux';
// import { registerUserFetch } from '../../store/user/userSlice';

// const dispatch = useDispatch();

// dispatch(
//     registerUserFetch({
//       email: 'boba@mail.com',
//       password: 'boba123',
//       name: 'boba',
//       birthday: '2000-04-01',
//       phone: '987033223',
//       city: 'bibovka',
//     })
//   );

//2. Login  User

// import { useDispatch } from 'react-redux';
// import { loginUserFetch } from '../../store/user/userSlice';

// const dispatch = useDispatch();

// dispatch(
//   loginUserFetch({
//     email: 'baba@mail.com',
//     password: 'baba123',
//   })
// );

// 3. Get Current User

// import { useDispatch } from 'react-redux';
// import { getUserFetch } from '../../store/user/userSlice';

// const dispatch = useDispatch();

// dispatch(getUserFetch())

// 3. Update Current User

// import { useDispatch } from 'react-redux';
// import { updateUserFetch } from '../../store/user/userSlice';

// const dispatch = useDispatch();

// dispatch( updateUserFetch({
//   name: 'mario',
// }))