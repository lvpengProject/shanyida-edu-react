import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';

const Home = lazy(() => import('./views/Home/index.jsx'));
const Login = lazy(() => import('./views/Login/index.jsx'));
const Class = lazy(() => import('./views/EduClass/index'));
const Classroom = lazy(() => import('./views/EduClassroom/index'))
const Func = lazy(() => import('./views/EduFunc/index'))
const Password = lazy(() => import('./views/EduPassword/index'))
const RoleFunc = lazy(() => import('./views/EduRoleFunc/index'))
const Staff = lazy(() => import('./views/EduStaff/index'))
const Student = lazy(() => import('./views/EduStudent/index'))
const UseRole = lazy(() => import('./views/EduUseRole/index'))

function App() {

  return (
      <HashRouter>
          <Suspense fallback={<div>loading</div>}>
              <Routes>
                  <Route path='/' element={<Login/>} />
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/home' element={<Home/>}>
                      <Route path='class' element={<Class/>} />
                      <Route path='classroom' element={<Classroom/>} />
                      <Route path='func' element={<Func/>} />
                      <Route path='password' element={<Password/>} />
                      <Route path='rolefunc' element={<RoleFunc/>} />
                      <Route path='staff' element={<Staff/>} />
                      <Route path='student' element={<Student/>} />
                      <Route path='userrole' element={<UseRole/>} />
                  </Route>
              </Routes>
          </Suspense>

      </HashRouter>
  )
}

export default App
