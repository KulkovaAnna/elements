import { AxiosInstance } from 'axios';

export default abstract class AbstractClient<T> {
  protected abstract fetcher: AxiosInstance;
  public abstract getAll(): Promise<T[]>;
  public abstract getOne(id: string): Promise<T>;
  public abstract addOne(val: T): Promise<T>;
  public abstract deleteOne(id: string): Promise<T>;
}
