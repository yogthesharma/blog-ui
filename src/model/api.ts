export interface WithResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
