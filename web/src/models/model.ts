import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";


export interface PageHeaderProps {
  title: string;
  description?: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: { value: string; label: string; }[]
}


export interface ScheduleItems {
  week_day: number
  from: string
  to: string
}

export interface CadastroClassProps {
  teacher: {
    name: string
    avatar: string
    whatsapp: string
    bio: string
    subject: string
    cost: number
  }
  schedule: ScheduleItems[]
}
