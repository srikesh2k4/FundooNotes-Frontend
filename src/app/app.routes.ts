import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './features/dashboard/pages/home/home';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Pagenotfound } from './features/dashboard/pages/pagenotfound/pagenotfound';

export const routes: Routes = [
  {
    'path': '',
    'component': Home
  },
  {
    'path': 'login',
    'component': Login
  },
  {
    'path': 'register',
    'component':Register
  }
  ,{
    'path': '**',
    'component': Pagenotfound
  }
];
