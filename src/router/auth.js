import StudentLogin from '@/components/student/auth/Login.vue';
import StudentSignup from '@/components/student/auth/Signup.vue';

export default [
  {
    name: 'StudentLogin',
    path: '/auth/student/login',
    component: StudentLogin,
  },
  {
    name: 'StudentSignup',
    path: '/auth/student/signup',
    component: StudentSignup,
  },
];
