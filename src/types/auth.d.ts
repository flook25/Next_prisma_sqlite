// Interface สำหรับการเข้าสู่ระบบ
export interface LoginData {
  email: string;
  password: string;
}

// Interface สำหรับสมัครสมาชิก
export interface RegisterData {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  tel: string;
  role: string;
}
