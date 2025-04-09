import { Injectable } from '@angular/core';

/**
 * User model representing a user in the system
 * This model is derived from the login/signup form fields in the original PHP application
 */
export interface User {
  id?: number;
  email: string;
  username: string;
  password?: string; // Optional as we don't always want to expose this
  dob?: Date;        // Date of birth
  gender?: 'male' | 'female' | 'other';
  rememberMe?: boolean;
}

/**
 * Authentication response from the server
 */
export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

/**
 * Login credentials model
 */
export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Registration data model
 */
export interface RegistrationData {
  email: string;
  username: string;
  password: string;
  dob: Date;
  gender: 'male' | 'female' | 'other';
}